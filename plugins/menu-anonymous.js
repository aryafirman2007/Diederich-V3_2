let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ᴀɴᴏɴʏᴍᴏᴜꜱ*
╠➺   .ꜱᴛᴀʀᴛ
╠➺   .ʟᴇᴀᴠᴇ
╠➺   .ɴᴇxᴛ
╠➺   .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
╚═─━╍╍━╍╾
`
await conn.sendMessage(m.chat, {
  text: `${anu}`,
      contextInfo: {
      externalAdReply: {
        title: 'MENU LIST DIEDERICH',
        body: 'D I E D E R I C H  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg',
        sourceUrl: 'https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ',
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.help = ['menuanonymous']
handler.tags = ['info']
handler.command = /^(menuanonymous)$/i

export default handler