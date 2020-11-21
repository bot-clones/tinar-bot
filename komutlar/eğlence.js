const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Tinar")
.setTitle("Eğlence Komutları")
 .setTimestamp()
.setDescription(" **t!tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **t!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **t!fbi** = Bot FBi Gif Atar.  \n  **t!token** = Tokenimi Öğrenmek İstemezmisin?  \n  **t!düello** = Düello Atarsın.  \n  **t!wasted** = Polis tarafından yakalanırsın.  \n  **t!atatürk** = Dene ve gör... (1881t!1938) ")
.setImage("https://i.hizliresim.com/dLsneV.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}