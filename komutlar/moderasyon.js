const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Tinar")
.setTitle("Moderasyon Komutları ")
 .setTimestamp()
.setDescription(" **t!sil** = Yazdığınız miktarda mesajı siler.  \n  **t!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **t!kick** = Etiketlediğiniz kişiyi atarsınız.  \n  **t!duyuru** = Bota duyuru yaptırırsınız.  \n  **t!küfür** = Küfür engel sistemini açarsınız.  \n  **t!reklam** = Reklam engel sistemi açarsınız.  \n  **t!slowmode** = Yavaş modu ayarlarsınız.  \n  **t!forceban** = Birisine id ban atarsınız.  \n  **t!unban** = Birisinin banını açarsınız.  \n  **t!sat!as** = Bot biri sa dedimi cevap verir.  \n  **t!sunucubilgi** = Sunucu bilgilerini görürsün.  \n  **t!üyedurum** = Üyelerin durumlarını görürsün.  \n  **t!çekiliş** = Çekiliş başlatırsınız. ")
.setImage("https://i.hizliresim.com/dLsneV.jpg")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}