import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender;
  let pp = await conn.profilePictureUrl(who).catch((_) => hwaifu.getRandom());
  let name = await conn.getName(who);

  const sentMsg = await conn.sendContactArray(
    m.chat,
    [
      [
        `${nomorown}`,
        `${await conn.getName(nomorown + "@s.whatsapp.net")}`,
        `💌 Owner Bot `,
        `🇼​​🇮​​🇱​​🇹​​🇪​​🇷​❜​🇸​ ​🇭​​🇺​​🇸​​🇧​​🇦​​🇳​​🇩​`,
        `argonearhere77@gmail.com`,
        `🇮🇩 Indonesia`,
        `📍 Jakarta Selatan`,
        `👤 ᴏᴡɴᴇʀ ᴅɪᴇᴅᴇʀɪᴄʜ ʙᴏᴛ`,
      ],
      [
        `${conn.user.jid.split("@")[0]}`,
        `${await conn.getName(conn.user.jid)}`,
        `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`,
        `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`,
        `nielllawrence@gmail.com`,
        `🇮🇩 Indonesia`,
        `📍 Banten`,
        `ʜᴀɴʏᴀ ʙᴏᴛ ʙɪᴀsᴀ ʏᴀɴɢ ᴋᴀᴅᴀɴɢ sᴜᴋᴀ ᴇʀᴏʀ ☺`,
      ],
    ],
    fkontak,
  );
  await m.reply(`ᴍʏ ᴏᴡɴᴇʀ ᴅᴏɴᴛ sᴘᴀᴍ ᴏʀ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʙʟᴏᴄᴋᴇᴅ`);
};
handler.help = ["owner", "creator"];
handler.tags = ["info"];

handler.command = /^(owner|creator)$/i;

export default handler;
