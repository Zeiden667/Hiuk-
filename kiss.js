const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!kiss') {
            return true
        }
    }

    static action(message) {
        var kiss = new Discord.MessageEmbed()
    .setColor("#FD6C9E")
    .setTitle("😘・Kiss")
    .setDescription(message.member.displayName + "fais un bizouu a la populasse ")
    .setImage("https://media.giphy.com/media/8iwfa0XSxDUSQ/giphy.gif")
    .setTimestamp()
        message.delete();
        message.channel.send(kiss)
    }
}