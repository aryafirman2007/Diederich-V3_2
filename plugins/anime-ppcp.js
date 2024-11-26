let handler = async (m, { conn }) => {
    // Define pairs of male and female images
    const imagePairs = [
        { seme: './couple/seme1.jpg', uke: './couple/uke1.jpg' },
        { seme: './couple/seme2.jpg', uke: './couple/uke2.jpg' },
        { seme: './couple/seme3.jpg', uke: './couple/uke3.jpg' },
        { seme: './couple/seme4.jpg', uke: './couple/uke4.jpg' },
        { seme: './couple/seme5.jpg', uke: './couple/uke5.jpg' },
        { seme: './couple/seme6.jpg', uke: './couple/uke6.jpg' },
        { seme: './couple/seme7.jpg', uke: './couple/uke7.jpg' },
        { seme: './couple/seme8.jpg', uke: './couple/uke8.jpg' },
        { seme: './couple/seme9.jpg', uke: './couple/uke9.jpg' },
        { seme: './couple/seme10.jpg', uke: './couple/uke10.jpg' },
        { seme: './couple/seme11.jpg', uke: './couple/uke11.jpg' },
        { seme: './couple/seme12.jpg', uke: './couple/uke12.jpg' },
        { seme: './couple/seme13.jpg', uke: './couple/uke13.jpg' },
        { seme: './couple/seme14.jpg', uke: './couple/uke14.jpg' },
        { seme: './couple/seme15.jpg', uke: './couple/uke15.jpg' },
        { seme: './couple/seme16.jpg', uke: './couple/uke16.jpg' },
        { seme: './couple/seme17.jpg', uke: './couple/uke17.jpg' },
        { seme: './couple/seme18.jpg', uke: './couple/uke18.jpg' },
        { seme: './couple/seme19.jpg', uke: './couple/uke19.jpg' },
        { seme: './couple/seme20.jpg', uke: './couple/uke20.jpg' },
        { seme: './couple/seme21.jpg', uke: './couple/uke21.jpg' },
        { seme: './couple/seme22.jpg', uke: './couple/uke22.jpg' },
        { seme: './couple/seme23.jpg', uke: './couple/uke23.jpg' },
        { seme: './couple/seme24.jpg', uke: './couple/uke24.jpg' },
        { seme: './couple/seme25.jpg', uke: './couple/uke25.jpg' },
        { seme: './couple/seme26.jpg', uke: './couple/uke26.jpg' },
        { seme: './couple/seme27.jpg', uke: './couple/uke27.jpg' },
        { seme: './couple/seme28.jpg', uke: './couple/uke28.jpg' },
        { seme: './couple/seme29.jpg', uke: './couple/uke29.jpg' },
        { seme: './couple/seme30.jpg', uke: './couple/uke30.jpg' },
        { seme: './couple/seme31.jpg', uke: './couple/uke31.jpg' },
        { seme: './couple/seme32.jpg', uke: './couple/uke32.jpg' },
        { seme: './couple/seme33.jpg', uke: './couple/uke33.jpg' },
        { seme: './couple/seme34.jpg', uke: './couple/uke34.jpg' },
        { seme: './couple/seme35.jpg', uke: './couple/uke35.jpg' },
        { seme: './couple/seme36.jpg', uke: './couple/uke36.jpg' },
        { seme: './couple/seme37.jpg', uke: './couple/uke37.jpg' },
        { seme: './couple/seme38.jpg', uke: './couple/uke38.jpg' },
        { seme: './couple/seme39.jpg', uke: './couple/uke39.jpg' },
        { seme: './couple/seme40.jpg', uke: './couple/uke40.jpg' },
        { seme: './couple/seme41.jpg', uke: './couple/uke41.jpg' },
        { seme: './couple/seme42.jpg', uke: './couple/uke42.jpg' },
        { seme: './couple/seme43.jpg', uke: './couple/uke43.jpg' },
        { seme: './couple/seme44.jpg', uke: './couple/uke44.jpg' },
        { seme: './couple/seme45.jpg', uke: './couple/uke45.jpg' },
        { seme: './couple/seme46.jpg', uke: './couple/uke46.jpg' },
        { seme: './couple/seme47.jpg', uke: './couple/uke47.jpg' },
        { seme: './couple/seme48.jpg', uke: './couple/uke48.jpg' },
        { seme: './couple/seme49.jpg', uke: './couple/uke49.jpg' },
        { seme: './couple/seme50.jpg', uke: './couple/uke50.jpg' },
        { seme: './couple/seme51.jpg', uke: './couple/uke51.jpg' },
        { seme: './couple/seme52.jpg', uke: './couple/uke52.jpg' },
        { seme: './couple/seme53.jpg', uke: './couple/uke53.jpg' },
        { seme: './couple/seme54.jpg', uke: './couple/uke54.jpg' },
        { seme: './couple/seme55.jpg', uke: './couple/uke55.jpg' },
        { seme: './couple/seme56.jpg', uke: './couple/uke56.jpg' },
        { seme: './couple/seme57.jpg', uke: './couple/uke57.jpg' },
        { seme: './couple/seme58.jpg', uke: './couple/uke58.jpg' },
        { seme: './couple/seme59.jpg', uke: './couple/uke59.jpg' },
        { seme: './couple/seme60.jpg', uke: './couple/uke60.jpg' },
        { seme: './couple/seme61.jpg', uke: './couple/uke61.jpg' },
        { seme: './couple/seme62.jpg', uke: './couple/uke62.jpg' },
        { seme: './couple/seme63.jpg', uke: './couple/uke63.jpg' },
        { seme: './couple/seme64.jpg', uke: './couple/uke64.jpg' },
        { seme: './couple/seme65.jpg', uke: './couple/uke65.jpg' },
        { seme: './couple/seme66.jpg', uke: './couple/uke66.jpg' },
        { seme: './couple/seme67.jpg', uke: './couple/uke67.jpg' },
        { seme: './couple/seme68.jpg', uke: './couple/uke68.jpg' },
        { seme: './couple/seme69.jpg', uke: './couple/uke69.jpg' },
        { seme: './couple/seme70.jpg', uke: './couple/uke70.jpg' },
        { seme: './couple/seme71.jpg', uke: './couple/uke71.jpg' },
        { seme: './couple/seme72.jpg', uke: './couple/uke72.jpg' },
        { seme: './couple/seme73.jpg', uke: './couple/uke73.jpg' },
        { seme: './couple/seme74.jpg', uke: './couple/uke74.jpg' },
        { seme: './couple/seme75.jpg', uke: './couple/uke75.jpg' },
        { seme: './couple/seme76.jpg', uke: './couple/uke76.jpg' },
        { seme: './couple/seme77.jpg', uke: './couple/uke77.jpg' },
        { seme: './couple/seme78.jpg', uke: './couple/uke78.jpg' },
        { seme: './couple/seme79.jpg', uke: './couple/uke79.jpg' },
        { seme: './couple/seme80.jpg', uke: './couple/uke80.jpg' }
    ];
    
    

    // Randomly select a pair of images
    const selectedPair = imagePairs[Math.floor(Math.random() * imagePairs.length)];

    // Send the images
    await conn.sendFile(m.chat, selectedPair.seme, 'ppcp.jpg', 'Seme', m);
    return conn.sendFile(m.chat, selectedPair.uke, 'ppcp.jpg', 'Uke', m);
};

handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(ppcp|ppcouple)$/i;

export default handler;
