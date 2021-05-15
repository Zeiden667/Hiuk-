const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!ppbot') {
            return true
        }
    }

    static action(message) {
    
        message.channel.send("h!pp")
    }
}