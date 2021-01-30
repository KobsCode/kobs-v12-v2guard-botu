const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  

    db.delete(`modlog_${message.guild.id}`)
       const sa = new Discord.RichEmbed()
    .setDescription(`Modlog Kapatıldı`)
    .setTimestamp()
    return message.channel.send(sa)
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'modlog-kapat'
}; 