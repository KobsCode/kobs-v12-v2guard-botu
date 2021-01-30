const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let banlanıcak = args[0]
let banlimit = await db.fetch(`banlimit_${message.guild.id}`)
 let bansayı= await db.fetch(`bansayı_${message.author.id}`)
let guild = message.guild
if (!banlanıcak) return message.channel.send(`İD Belirt`)
 if(isNaN(banlanıcak)) return message.channel.send(`Kullanıcı İD si Sadece Sayılardan Oluşabilir`)
  
  message.channel.send(`Kullanıcı Başarıyla UnBanlandı`)
guild.members.unban(banlanıcak)
  let kanal = await db.fetch(`banlog_${message.guild.id}`)
  if (kanal) {
    const sa = new Discord.MessageEmbed()
    .setTitle('Kullanıcı UnBanlandı!')
    .setDescription(` ${banlanıcak} İdli Kullanıcı <@${message.author.id}> Tarafından Sunucudan Yasağı Kaldırıldı`)
    .setTimestamp()
    client.channels.cache.get(kanal).send(sa)
  }
  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'unban'
}; 