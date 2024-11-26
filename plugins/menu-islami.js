let handler = async (m) => {

let anu =`
*MENU ISLAMI*
╔═━───╍━╍╍┄ *ɪꜱʟᴀᴍɪ*
╠➺   .ᴀʟqᴜʀᴀɴ <114> <1>
╠➺   .qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ (ⓛ)
╰─── –
╔═━───╍━╍╍┄ *qᴜʀᴀɴ*
╠➺   .ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ [1-99]
╠➺   .ᴋɪꜱᴀʜɴᴀʙɪ <ɴᴀᴍᴇ> (ⓛ)
╠➺   .ꜱᴀʟᴀᴛ <ᴅᴀᴇʀᴀʜ>
╠➺   .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
╠➺   .ᴀʏᴀᴛᴋᴜʀꜱɪ (ⓛ)
╰─── –
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
handler.help = ['menuislami']
handler.tags = ['info']
handler.command = /^(menuislami)$/i

export default handler