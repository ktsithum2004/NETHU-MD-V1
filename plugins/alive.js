const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240918-WA0013.mp3'
                    }
let des = `*👋 𝙷𝚎𝚕𝚕𝚘 ${pushname}* 𝙸'𝚖 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠

I'm NETHU MD Whatsapp Bot 🫧💨

Join Our Support Chanel : https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A 🌟

Subscribe Our Youtube Chanel : https://www.youtube.com/@SlNethuMax 🌟

🌟 Haw are Nice Day 🌟

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
