let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let contoh = fs.readFileSync('./mp3/subscribe.opus') 
conn.sendFile(m.chat, contoh, '', '', m, true)
}

handler.customPrefix = /^(help|ngetes|tes|anu)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
