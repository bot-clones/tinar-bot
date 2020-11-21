const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {
 
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Olmak İçin Bir Sebep Belirtin.**\n\n**AFK Örnek Kullanım :** \`${prefix}afk <sebep>\``)
  if(!REASON) return message.channel.send(embed)
 //lrowsxrd
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Moduna Başarıyla Girildi**\n\n**AFK Olma Sebebi :** \`${REASON}\``)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};