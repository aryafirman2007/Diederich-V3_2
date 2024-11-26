let handler = async (m) => {

let anu =` ╔═━───╍━╍╍┄ *ᴍᴀɪɴ*
╠➺   @ᴠᴇʀɪꜰʏ
╠➺   .ᴀꜰᴋ [ᴀʟᴀꜱᴀɴ]
╠➺   .ᴅᴀꜰᴛᴀʀ
╠➺   .ᴅᴏɴᴀꜱɪ
╠➺   .ᴊᴀᴅɪᴀɴ
╠➺   .ɢᴄʙᴏᴛ
╠➺   .ɢᴄᴇʟᴀɪɴᴀ
╠➺   .ᴅᴀꜱʜʙᴏᴀʀᴅ (ⓛ)
╠➺   .ᴅᴀꜱʜ (ⓛ)
╠➺   .ᴠɪᴇᴡꜱ (ⓛ)
╠➺   .ᴛᴏᴛᴀʟꜰᴇᴀᴛᴜʀᴇ
╠➺   .ᴄᴇᴋꜱɴ
╠➺   .ʟɪᴍɪᴛ [@ᴜꜱᴇʀ]
╠➺   ᴍᴏᴅᴇ
╠➺   .ɴᴏᴡᴀ <ɴᴜᴍʙᴇʀ>
╠➺   .ᴏʀᴅᴇʀ
╠➺   .ᴘʀᴏꜰɪʟᴇ (ⓛ)
╠➺   .ᴘʀᴏꜰɪʟᴇ *⧼@ᴜꜱᴇʀ⧽* (ⓛ)
╠➺   .ɢᴇᴛᴍꜱɢ
╠➺   .ᴜɴʀᴇɢ
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
handler.help = ['menuuser']
handler.tags = ['info']
handler.command = /^(menuuser)$/i

export default handler