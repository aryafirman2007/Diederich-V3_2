let handler = async (m, { conn, command }) => {
m.reply(wait)
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ',
    mediaType: 2, 
    description: 'https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ',
    title: "ɴᴏᴡ ᴘʟᴀʏɪɴɢ...",
    body: `${command}`,
    thumbnail: await (await fetch('https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg')).buffer(),
    sourceUrl: 'https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ'
}
     }
    })
}

handler.help = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54']
handler.tags = ['mangkane']
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i
handler.owner = false
handler.mods = false
handler.limit = true

export default handler