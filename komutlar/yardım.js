const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("Black")
.setAuthor("Tinar Yardım Menüsü")
.setTitle("|⚙| Tinar bot yardım menüsüne hoşgeldin!")
 .setTimestamp()
.setDescription("💎 \n\n **t!eğlence** = __Eğlence komutlarını görüntülersiniz.__ 💎 \n\n **t!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ 💎\n\n  **t!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ 💎 \n\n  **t!logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://i.hizliresim.com/dLsneV.jpg")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'yardım'
}