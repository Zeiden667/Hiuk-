const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!yo') {
            return true
        }
    }

    static action(message) {
    var yo = new Discord.MessageEmbed()
    .setColor("#FD6C9E")
    .setTitle("👋・Hiuk dis salut à " + message.member.displayName)
    .setImage("https://data.photofunky.net/output/image/6/0/3/5/60352c/photofunky.gif")
    .setTimestamp()
        message.delete();
        message.channel.send(yo)
    }
}