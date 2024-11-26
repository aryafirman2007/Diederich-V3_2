let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {};
    if (!text)
        throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split("|");
    if (!jid || !name || !pesan)
        throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw "Nomer tidak terdaftar di whatsapp.";
    if (jid == m.sender) throw "tidak bisa mengirim pesan ke diri sendiri.";
    let mf = Object.values(conn.menfess).find((mf) => mf.status === true);
    if (mf) return !0;
    let id = +new Date();
    let teks =
        `Hai @${data.jid.split("@")[0]}, maaf mengganggu ada pemberitahuan khusus.\n\nDari: *${name}*\nIsi: \n${pesan}\n\n*Ketik balasan kamu, apakah kamu siap menerima ini?, bagaimana pendapatmu dan perasaanmu saat menerima ini, serta apa motivasimu kedepannya untuk ini?*`.trim();
    await conn
        .relayMessage(
            data.jid,
            {
                extendedTextMessage: {
                    text: teks,
                    contextInfo: {
                        mentionedJid: [data.jid],
                        externalAdReply: {
                            title: "PEMBERITAHUAN KHUSUS",
                            mediaType: 1,
                            previewType: 0,
                            renderLargerThumbnail: true,
                            thumbnailUrl:
                                "https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg",
                            sourceUrl: "https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ",
                            showAdAttribution: true,
                        },
                    },
                },
            },
            {},
        )
        .then(() => {
            m.reply("Mengirim Jawaban.");
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false,
            };
            return !0;
        });
};
handler.tags = ["owner"];
handler.help = ["Private"];
handler.command = /^(pesan|rahasia|kirim|peringatan)$/i;
handler.private = true;
handler.owner = true
handler.mods = true;

export default handler;
