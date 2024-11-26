import fetch from 'node-fetch';
const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = (await import("@adiwajshing/baileys"))["default"];
import '@bochilteam/scraper';
import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
  const grantlyFolder = './char/grantly';
  const files = fs.readdirSync(grantlyFolder);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  let url;

  if (randomFile) {
    url = path.join(grantlyFolder, randomFile);
  } else {
    // Fallback in case no file is found
    url = grantly[Math.floor(Math.random() * grantly.length)];
  }

  if (!url.startsWith('http')) {
    // Convert local path to URL
    url = `${path.resolve(url)}`;
  }

  let mediaType = url.endsWith('.mp4') ? 'video' : 'image';
  let media = await prepareWAMessageMedia({ [mediaType]: { url: url } }, { upload: conn.waUploadToServer });

  let message = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Grantly"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Knight Collage"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
            ...media
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              name: "quick_reply",
              buttonParamsJson: "{\"display_text\":\"Next\",\"id\":\".grantly\"}"
            }]
          })
        })
      }
    }
  }), { quoted: m });

  await conn.relayMessage(m.chat, message.message, {});
};

handler.help = ['grantly'];
handler.tags = ['furry-char'];
handler.command = /^(grantly)$/i;
handler.premium = false;
handler.register = true;
handler.limit = 1;
export default handler;

global.grantly = [
 "", //bisa video dan gambar
];
