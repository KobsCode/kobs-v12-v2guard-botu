const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`${client.guilds.size} Kadar Sunucuya Hizmet Veriyorum!`);
  client.user.setStatus("idle");
    client.user.setActivity("Guard Bot  Altyapı", { type: "WATCHING" });
  

  
};