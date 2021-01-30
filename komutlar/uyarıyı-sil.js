
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let a = message.mentions.users.first()
let aa = args[1]
let sa = await db.fetch(`uyarısayısı_${a.id}`)
if (sa == null) sa = '0'
if (!a || !aa) return message.channel.send(`Kişi ve Silinecek Uyarı Miktarı Belirt`)
    db.add(`uyarısayısı_${a.id}`, -aa)

    if (aa > sa) {
    message.channel.send(`Bu Üyenin Toplam ${sa} Kadar Uyarısı Var. Sizin Silmeye Çalıştığınız Bundan Daha Büyük Olduğu İçin Maalesef İşlem İptal Oldu! :x:`)
  } else {
  
  if (aa < sa)
  a.send(`${message.guild.name} Sunucusunda ${message.author.tag} Adlı Yetkili ${aa} Kadar Uyarını Sildi!`)
  }
  
  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'uyarı-sil'
}; 
