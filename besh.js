const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!besh') {
            return true
        }
    }

    static action(message) {
        var besh = new Discord.MessageEmbed()
    .setColor("fff000")
    .setTitle("Bescherelle Power")
    .addField("📕・Tien Attrape","https://bescherelle.com/",false)
    .setImage("https://media1.tenor.com/images/694e0fc0e5901b9f20921cab7ee65a8c/tenor.gif?itemid=17625121")
    .setTimestamp()
        message.delete();
        message.channel.send(besh)
    }
}