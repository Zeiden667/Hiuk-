const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!dev') {
            return true
        }
    }

    static action(message) {
        var dev = new Discord.MessageEmbed()
    .setColor("#D473D4")
    .setTitle("📡・Le Dévlopeur Du bot.")
    .setDescription("Pour me soutenir : ")
    .addField("`Ma chaine youtube : `","https://www.youtube.com/channel/UCOrMVuFdzIouToCPKB5WGdg",false)
    .setImage("https://66.media.tumblr.com/231e7a25d6c12aea0c24b4fdf5744641/tumblr_pps4ytt4LN1vmiunio1_500.gif")
    .setTimestamp()
        message.delete();
        message.member.send(dev)
    }
}