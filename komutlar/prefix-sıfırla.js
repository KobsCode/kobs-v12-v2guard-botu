const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
   
let prefix = ayarlar.prefix
    db.delete(`prefix_${message.guild.id}`)
  message.channel.send(`Prefix Tekrar` + prefix + `Oldu!`)
}

exports.conf = {
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "prefix-sıfırla"
}