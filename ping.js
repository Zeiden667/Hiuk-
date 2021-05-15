const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!ping') {
            return true
        }
    }

    static action(message) {
        message.delete();
        message.channel.send('pong')
    }
}