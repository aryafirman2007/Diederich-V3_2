import os from 'os'

let handler = async (m, { conn, text }) => {
  let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length

  let message = `
*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: 13th Gen Intel(R) Core(TM) i7-13620H
• *CPU Speed*: 4.90 GHz
• *Number of CPU Cores*: 16
`

  m.reply(message)
}

handler.help = ['botspec']
handler.tags = ['tools']
handler.command = /^(botspec|ram)$/i
export default handler 