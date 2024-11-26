import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => { 
let stiker = await sticker(null, global.API(`https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.command = /^(gojo)$/i

export default handler 