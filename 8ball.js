const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!8ball') {
            return true
        }
    }

    static action(message) {
        message.delete();
        let tab = [
            "ta 2 qi !",
            "Zeiden est mort maintenant c Hiuk enfoiré !",
            "AHOU AHOU AHOU !",
            "va la bas https://www.youtube.com/watch?v=yLEbwbXrzGU",
            "ta cru jtt ta pute ?",
            "demande a ton père il va te dire !!!",
            "tkt mon tipeu du tieks pose pas de questions t'aura pas de réponses !",
            
        ]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }
}