const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!ahou') {
            return true
        }
    }

    static action(message) {
        var ahou = new Discord.MessageEmbed()
    .setColor("#D473D4")
    .setDescription("🐺・[Ahou Ahou](https://www.youtube.com/watch?v=fL2yHzxFnY8)")
    .setImage("https://data.photofunky.net/output/image/6/9/9/7/69979a/photofunky.gif")
    .setTimestamp()
        message.delete();
        message.channel.send(ahou)
    }
}