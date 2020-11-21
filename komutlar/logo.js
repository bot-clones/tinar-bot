const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Tinar")
.setTitle(" Logo Komutları ")
 .setTimestamp()
.setDescription(" **t!dinamik** = Dinamik logo oluşturur.  \n  **t!altın** = Altın logo oluşturur.  \n  **t!banner** = Banner logo oluşturur.  \n  **t!basit** = Basit logo oluşturur.  \n  **t!elmas** = Elmas logo oluşturur.  \n  **t!sarı** = Sarı logo oluşturur.  \n  **t!neonmavi** = Neon mavi logo oluşturur.  \n  **t!kalın** = Kalın logo oluşturur.  \n  **t!anime** = Anime yazı tipinde logo oluşturur.  \n  **t!habbo** = Habbo yazı tipinde logo oluşturur.  \n  **t!arrow** = Ok işaretli logo oluşturur.  \n  **t!green** = Yeşil logo oluşturur.  \n  **t!alev** = Alevli logo oluşturur.  \n  **t!red** = Kırmızı logo oluşturur. ")
.setImage("https://i.hizliresim.com/dLsneV.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}