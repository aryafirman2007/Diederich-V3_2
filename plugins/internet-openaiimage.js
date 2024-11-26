import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let url = `https://widipe.com/dalle?text=${text}`
	conn.sendFile(m.chat, url, null, `hasil dalle dari ${text}`, m)
}
handler.help = ['ai-image']
handler.tags = ['internet']
handler.exp = 0;
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img)$/i 

export default handler;
