let handler = async (m) => {

let anu =`
# *MENU ARTIFICIAL INTELLIGENCE* #
╔═━───╍━╍╍┄
╠➺   .ᴀɪɪᴍᴀɢᴇ (ⓛ)
╠➺   .ᴀɪᴠᴏɪᴄᴇ
╠➺   .ᴀɪ
╠➺   .ᴏᴘᴇɴᴀɪ
╠➺   .ɢᴘᴛ
╠➺   .ᴅɪꜰꜰᴜꜱɪᴏɴ (ⓛ)
╠➺   .ɢᴇᴍɪɴɪ
╠➺   .ʙᴀʀᴅ
╠➺   .ᴛᴏᴀɴɪᴍᴇ  (ⓟ)
╠➺   .ᴊᴀᴅɪᴀɴɪᴍᴇ  (ⓟ)
╠➺   .ᴊᴀᴅɪᴢᴏᴍʙɪᴇ (ⓛ) (ⓟ)
╠➺   .ʟᴜᴍɪɴᴀɪ
╠➺   .ʀᴇᴍɪɴɪ (ⓛ)
╠➺   .ᴄᴏʟᴏʀ (ⓛ)
╠➺   .ʜᴅʀ (ⓛ)
╠➺   .ʜᴅ (ⓛ)
╠➺   .ʜᴅ (ⓛ)
╠➺   .ᴛxᴛ2ɪᴍɢ
╠➺   .ᴠᴏɪᴄᴇᴠᴏx (ⓛ)
╚═─━╍╍━╍╾
╔═━───╍━╍╍┄ *ᴄʜᴀʀᴀᴄᴛᴇʀ-ᴀɪ*
╠➺   .​ᴅᴇʀɪᴄʜ
╠➺   .​ᴏꜱᴄᴀʀ
╠➺   .ꜱʜᴜᴄʜɪ
╠➺   .ᴛʜᴇᴏ
╠➺   .ɢʀᴀɴᴛʟʏ
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
handler.help = ['menuai']
handler.tags = ['info']
handler.command = /^(menuai)$/i

export default handler