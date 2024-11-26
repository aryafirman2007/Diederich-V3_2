import didyoumean from 'didyoumean';
import similarity from 'similarity';

let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);      

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴄᴀʀɪ ᴍᴇɴᴜ ʙᴇʀɪᴋᴜᴛ ɪɴɪ?\n\n◦ ɴᴀᴍᴀ ᴄᴏᴍᴍᴀɴᴅ: ➠ *${usedPrefix + mean}*\n◦ ʜᴀsɪʟ ᴋᴇᴍɪʀɪᴘᴀɴ: ➠ *${similarityPercentage}%*`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
       	showAdAttribution: true,
            title: 'D I D Y O U M E A N',
            thumbnailUrl: 'https://image.cdn.centcloud.seaart.me/2024-07-22/cqf2ufte878c739fh01g-2/153993f128cafb834859f7b6ceb06bb9_high.webp',
            sourceUrl: 'https://linktr.ee/ArFur117',
            mediaType: 1,
            renderLargerThumbnail: true
                     }
        }
      });
    }
  }
}

export default handler;