const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message,args ) => {

let jailrol = "rol id"
let k = message.mentions.users.first()
let sebep = args.slice(1).join(' ')
 if (!k) return message.channel.send(`Kullanıcı Belirt`)
    if (!sebep) return message.channel.send('Sebep Belirt')

  
  
  k.roles.add(jailrol)
  k.send(`${message.guild.name} Sunucusundan ${sebep} sebebinden dolayı jail yedin!`)
 message.guild.owner.send(`${k} Adlı Kullanıcı ${message.guild.name} Sunucusundan ${sebep} sebebinden dolayı ${message.author.tag} tarafından jail yedi`)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'jail'
}; 