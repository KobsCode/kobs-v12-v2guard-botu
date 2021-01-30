const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
   
  let prefix = args[0]
  if (!prefix) return message.reply('Prefix Belirt!')
      db.set(`prefix_${message.guild.id}`, prefix)
     message.channel.send('Prefixim ' + prefix + 'Olarak Ayarlandı')
  
  
}

exports.conf = {
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "prefix"
}