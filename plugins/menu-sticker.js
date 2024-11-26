let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ꜱᴛɪᴄᴋᴇʀ*
╠➺   .ᴀᴛᴛᴘ <ᴛᴇᴋꜱ> (ⓛ)
╠➺   .ꜱᴛɪᴋᴇʀᴛᴇʟᴇɢʀᴀᴍ <ᴜʀʟ> (ⓛ) (ⓟ)
╠➺   .qᴄ (ⓛ)
╠➺   .ʙᴏɴᴋ @ᴜꜱᴇʀ
╠➺   .ʙᴏɴᴋ
╠➺   .ᴄᴏʟᴏɴɢ <ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ>
╠➺   .ᴄᴏʟᴏɴɢ <ʀᴇᴘʟʏ ɢᴀᴍʙᴀʀ>
╠➺   .ᴄᴏʟᴏɴɢ <ᴜʀʟ/ʟɪɴᴋ>
╠➺   .ᴇᴍᴏᴊɪ
╠➺   .ᴇᴍᴏᴊɪᴍɪx
╠➺   .ɢᴇᴛᴇxɪꜰ
╠➺   .ꜱᴍᴇᴍᴇ
╠➺   .ᴛᴏᴠɪᴅᴇᴏ
╠➺   .ᴡᴍ <ᴘᴀᴄᴋɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>
╠➺   .ᴄᴀʀɪꜱᴛɪᴋᴇʀ <qᴜᴇʀʏ>
╰─── –
╔═━───╍━╍╍┄ *ɢᴇɴᴇʀᴀʟ*
╠➺   .ꜱᴛɪᴋᴇʀ
╠➺   .ᴛᴏɪᴍɢ
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
handler.help = ['menusticker']
handler.tags = ['info']
handler.command = /^(menusticker)$/i

export default handler