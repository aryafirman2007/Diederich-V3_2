import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js';

/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

/**
Anti NSFW by Tio
**/

// Function to handle NSFW detection logic
async function antiNsfw(url) {
    try {
        let response = await axios.get('https://api.sightengine.com/1.0/check.json', {
            params: {
                'url': url,
                'models': 'nudity-2.0',
                'api_user': api.user,  // Replace with your API user
                'api_secret': api.user,  // Replace with your API secret
            }
        });

        if (response.data.status === 'success') {
            const message = `Konten NSFW *( ${response.data.nudity.sexual_activity}% )* terdeteksi oleh sistem, media mengandung NSFW.`;
            return {
                nsfw: response.data.nudity.sexual_activity,
                msg: message
            };
        }
    } catch (e) {
        console.log('Terjadi error saat mendeteksi media: ' + e);
    }
}

// Middleware that checks NSFW media
export async function before(m, { conn }) {
    let data = db.data.chats[m.chat]; // Fetch group-specific data from the database
    if (m.isBaileys && m.fromMe) return true; // Ignore bot messages
    if (!m.isGroup) return false; // Only allow this in groups

    const { mtype, sender } = m;
    let hapus = m.key.participant;  // Who sent the message
    let bang = m.key.id;  // Message ID

    // If the anti-NSFW feature is enabled in this group
    if (data.antiNsfw) {
        if (mtype === 'imageMessage' || mtype === 'videoMessage' || mtype === 'stickerMessage') {
            const media = await m.download(); // Download the media

            let up;
            // Upload image or video to the service
            if (mtype === 'imageMessage' || mtype === 'videoMessage') {
                up = await uploadImage(media);
            } else if (mtype === 'stickerMessage') {
                up = await uploadFile(media);
            }

            // Run NSFW detection
            const { nsfw, msg } = await antiNsfw(up);
            if (nsfw > 0.35) {
                return conn.sendMessage(m.chat, {
                    text: `❗${msg}`
                }, {
                    quoted: m,
                    mentions: [sender]
                }).then(_ => {
                    // Delete NSFW media from the group chat
                    conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: bang,
                            participant: hapus
                        }
                    });
                });
            } else {
                console.log('Media aman');
            }
        }
    }
}

// Handler for enabling/disabling the anti-NSFW feature
const handler = async (m, { conn, command, text }) => {
    let chat = db.data.chats[m.chat];  // Fetch group-specific settings

    switch (command) {
        case "antinsfw":
            if (text === "on") {
                chat.antiNsfw = true;  // Enable the feature
                m.reply("Anti-NSFW detection has been enabled for this group.");
            } else if (text === "off") {
                chat.antiNsfw = false;  // Disable the feature
                m.reply("Anti-NSFW detection has been disabled for this group.");
            } else {
                m.reply("Usage: .antinsfw on / .antinsfw off");
            }
            break;
    }
};

// Command to enable or disable the anti-NSFW feature
handler.command = /^(antinsfw)$/i;
handler.tags = ["group"];
handler.group = true;  // Only works in groups
handler.admin = true;  // Admins only can use the command
handler.botAdmin = true;  // Bot needs to be an admin to delete NSFW messages

export default handler;
