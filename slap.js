const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!ping') {
            return true
        }
    }

    static action(message) {
        if(message.content.startsWith(prefix +"slap")) {
            message.delete();
            let ne = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633")
            let nv1 = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://i0.wp.com/haruhichan.com/wpblog/wp-content/uploads/Ryuuji-Takasu-x-Taiga-Aisaka-Toradora-anime-series-slap-haruhichan.com_.gif?resize=500%2C281")
            let vg = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-4.gif")
            let ns = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://31.media.tumblr.com/bc552888a0ab2b3535577102baf3579b/tumblr_mp7xsv9nH81qbvovho1_500.gif")
            let cm = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-6.gif")
            let kcm = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif")
            let ng = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://media.giphy.com/media/iMCedi21L9MXg1gN43/giphy.gif")
            let np = new Discord.MessageEmbed()
            .setColor("#DF6D14")
            .setTitle(message.member.displayName + " te met une claque ")
            .setImage("https://th.bing.com/th/id/R43f2042b669b3c8237586c4ec0e76bbe?rik=Ds%2bkAxp5cg31iQ&riu=http%3a%2f%2fzoronamiplus.weebly.com%2fuploads%2f3%2f7%2f6%2f7%2f37674207%2f5978405_orig.gif&ehk=dmugLjt4wkOaUHIKp8PE9sqVQcE8u82nzGkpZlCNWJk%3d&risl=&pid=ImgRaw")
                let tab = [
                  ne,
                  nv1,
                  vg,
                  ns,
                  cm,
                   kcm,
                  ng,
                  np
            ]
            let index = Math.floor(Math.random() * (tab.length))
            message.channel.send(tab[index])

        }
    }
}