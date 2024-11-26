import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import { googleImage } from '@bochilteam/scraper'

var handler = async (m, { conn }) => {
    const searchTerm = 'hntai furry shota yaoi';
    m.reply(wait)
    try {
        const res = await googleImage(searchTerm)
        let image = res.getRandom()
        let link = image
        let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `Nih Foto Shota nya`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: wm
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false,
                            ...await prepareWAMessageMedia({ image: { url: link } }, { upload: conn.waUploadToServer })
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "quick_reply",
                                "buttonParamsJson": `{\"display_text\":\"Next Image\",\"id\":\".shota\"}`
                            }],
                        })
                    })
                }
            }
        }, { quoted: m })

        return await conn.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
            type: "audioMessage",
            ptt: true,
        })
    }
}

handler.help = ['shota'];
handler.tags = ['nsfw'];
handler.command = /^(shota)$/i;
handler.premium = false;
handler.register = true;
handler.limit = 1;

export default handler
