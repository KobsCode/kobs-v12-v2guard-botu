const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Bunu mu Arıyorsun? ${prefix}anti-raid aç/kapat`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`r_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Anti Raid Başarıyla Açıldı! \n Artık Gelen Botlar Banlanacak!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`r_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Anti Raid Başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'anti-raid'
}; 