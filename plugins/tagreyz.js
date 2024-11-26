import { sticker5 } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker5(null, `https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
conn.reply(m.chat,'ada yang nyariin lu @6283129627886',m)   
}

handler.customPrefix = /^(reyz|rey|ArFur117)$/i;
handler.command = new RegExp();
export default handler