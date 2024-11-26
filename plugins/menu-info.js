let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ɪɴꜰᴏ*
╠➺   .ᴄᴇᴋɪᴅᴄʜ 
╠➺   .ᴏᴡɴᴇʀ
╠➺   .ᴄʀᴇᴀᴛᴏʀ
╠➺   .ᴜꜱᴇʀ
╠➺   .ʙᴏᴛꜱᴛᴀᴛᴜꜱ
╠➺   .ɢᴀᴍᴇ
╠➺   .ɢᴇᴍᴘᴀ
╠➺   .ʀᴇᴘᴏʀᴛ <ᴛᴇᴋꜱ>
╠➺   .ʀᴇqᴜᴇꜱᴛ <ᴛᴇᴋꜱ>
╠➺   .ʀᴜɴᴛɪᴍᴇ
╠➺   .ꜱᴄʀɪᴘᴛ
╠➺   .ᴛᴇꜱᴛꜱᴘᴇᴇᴅ
╠➺   .ᴛqᴛᴏ
╠➺   .ᴄʀᴇᴅɪᴛ
╠➺   .ʙᴀɴɴᴇᴅʟɪꜱᴛ
╠➺   .ʟɪꜱᴛɢᴄ
╠➺   .ᴘʀᴏꜰɪʟᴇ [@ᴜꜱᴇʀ]
╠➺   .ᴘʀᴇᴍʟɪꜱᴛ [ᴀɴɢᴋᴀ]
╠➺   .ᴘʀᴏꜰɪʟᴇ (ⓛ)
╠➺   .ᴘʀᴏꜰɪʟᴇ *⧼@ᴜꜱᴇʀ⧽* (ⓛ)
╠➺   .ʀᴏʟᴇ
╠➺   .ꜱᴇʀᴠᴇʀ
╠➺   .ᴘɪɴɢ
╠➺   .ꜱᴘᴇᴇᴅ
╠➺   .ᴠᴇʀꜱɪᴏɴ
╚═─━╍╍━╍╾
╔═━───╍━╍╍┄ *ᴍᴇɴᴜ*
╠➺   .ᴍᴇɴᴜ
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
handler.help = ['menuinfo']
handler.tags = ['info']
handler.command = /^(menuinfo)$/i

export default handler