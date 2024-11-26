import fs from "fs";
import fetch from "node-fetch";
let handler = async (m, { conn }) => {
  let caption = `*CHANNEL FURRY*

Furry Lovers | WhatsApp 頻道
https://www.whatsapp.com/channel/0029VadDh6LB4hdZew7NyN1T


*GROUP FURRY*

爱𝙁𝙐𝙍𝙍𝙔𝙏𝙊𝙋𝙄𝘼🪽
https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ

FURRY FANDOM SOCIETY
https://chat.whatsapp.com/KBffLp1fpF81irhW42kl6z

Satwa furry
https://chat.whatsapp.com/Cg2mNuxleFJBV9yhfsvMB2

FURRY FANDOM GEN Z
https://chat.whatsapp.com/Is4JxUA8iaaEULXowxcetz

₣ɄⱤⱤɎ ₩ØⱤⱠĐ
https://chat.whatsapp.com/IK8mxnZ9wCJJqtLQKlH7R7

|Talk Of Furry People/Art S4|
https://chat.whatsapp.com/IRFU9s0QOw0HjvF5ZF97qm

Fred,member+admin core
https://chat.whatsapp.com/LFQA3JRlndqBxUEDqWB6GN

Other
https://linktr.ee/ArFur117`;
  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
        title: "D I E D E R I C H",
        thumbnailUrl: "https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg",
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
      },
    },
  });
};
handler.help = ["gcderich", "gcfurry"];
handler.tags = ["main"];
handler.command = /^(gcderich|groupbot|botgc|botgroup|gcfurry|groupfurry)$/i;
export default handler;
