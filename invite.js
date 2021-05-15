const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!invite') {
            return true
        }
    }

    static action(message) {
    
        message.channel.send('https://discord.gg/wMr6WwfhJJ')
    }
}