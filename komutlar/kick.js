const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let banlanıcak = message.mentions.users.first()
let banlimit = await db.fetch(`kicklimit_${message.guild.id}`)
 let bansayı= await db.fetch(`kicksayı_${message.author.id}`)
let guild = message.guild
if (!banlanıcak) return message.channel.send(`Kişi Seç!`)
  if (bansayı > banlimit) return message.channel.send(`Kick Sayın Limiti Geçtiği İçin Kickleyemem!`)
  
  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send('Sebep Belirt')
  
  message.channel.send(`Kullanıcı Başarıyla Kicklendi`)
guild.members.kick(banlanıcak)
  db.add(`kicksayı_${message.author.id}`, 1)

  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kick'
}; 