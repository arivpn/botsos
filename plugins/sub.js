let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let subarie = fs.readFileSync('./mp3/arietube.mp3') 
conn.sendFile(m.chat, subarie, '', '', m, true)
}

handler.customPrefix = /^(sub|subscribe|yt|ch)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
