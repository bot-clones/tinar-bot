const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Tinar")
.setTitle("  Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **t!avatar** = Avatarınıza bakarsınız.  \n  **t!yetkilerim** = Yetkilerini görürsün.  \n  **t!profil** = Profilini görürsün.  \n  **t!sunucuresmi** = Sunucu resmini gösterir.  \n  **t!ping** = Botun Pingine Bakarsın.  \n  **t!id** = Birisinin id'sine Bakarsın.  \n  **t!davet** = Beni Sunucuna Ekle.  \n  **t!botbilgi** = Bot istatistiklerini görürsünüz.  \n  **t!bugt!bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}