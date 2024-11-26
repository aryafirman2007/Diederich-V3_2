let handler = async (m, { conn, command, text }) => {
	
  if (!text) return conn.reply(m.chat, '• *Example :* .cekkontol Bapak Komintod', m)

conn.reply(m.chat, `
╭━━━━°「 *kontolnya ${text}* 」°
┃
┊• Nama : ${text}
┃• kontol : ${pickRandom(['Putih','Merah','Hitam'])}
┊• Panjang : ${getRandomLength()} CM
┃• Status : ${pickRandom(['Perjaka','Ga perjaka','Tahan lama','Gampang keluar','Disunat','Blom Disunat'])}
╰═┅═━––––––๑
`.trim(), m)
}
handler.help = ['cekkontol *<name>*']
handler.tags = ['fun']
handler.command = /^cekkontol/i

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function getRandomLength() {
return Math.floor(Math.random() * 21) + 10; // Generates a number between 10 and 30
}
