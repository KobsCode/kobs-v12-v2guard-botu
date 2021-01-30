const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

  
  let limit = args.slice(0).join(' ')
  
  if (!limit) return message.channel.send(`Limit Belirt`)
  if (isNaN(limit)) return message.channel.send('Ban Limiti Sadece Sayılardan Oluşabilir!')
  
  db.set(`banlimit_${message.guild.id}`, limit)
message.channel.send(`Ban Limiti **${limit}** Olarak Ayarlandı!`)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'banlimit'
}; 