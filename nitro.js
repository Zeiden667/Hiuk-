const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!nitro') {
            return true
        }
    }

    static action(message) {
        var invite = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("GG ! ta gagné un ➜ Nitro classique")
        .setImage("https://www.tremplin-numerique.org/wp-content/uploads/2020/05/Discord-Nitro-Banner-Image.jpg")
        .setDescription("[cliquez ici](https://discord.gg/wMr6WwfhJJ)")

        message.member.send(invite)
    }
}