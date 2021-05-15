
const Discord = require('discord.js')
const Command = require('./command')
module.exports = class avatar extends Command {
    static match(messaage) {
        if(messaage.content === 'h!pp') {
            return true
        }
    }

    static action(message) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        message.delete();
        message.channel.send(embed);
    }
}