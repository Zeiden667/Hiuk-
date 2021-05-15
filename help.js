const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!help') {
            return true
        }
    }

    static action(message) {
        var help = new Discord.MessageEmbed()
        .setColor("#DB1702")
        .setTitle("Présentation de Hiuk ・❤️・")
        .setAuthor("・🍖・Les Mugiwaras")
        .setDescription("Toutes les Commandes [pour de l'aide veillez contacter ZeiDen](https://www.francebleu.fr/loisirs/evenements/le-dico-des-ados-que-signifie-le-mot-cheh-1523356033)")
        .setImage("https://media.giphy.com/media/91VGJqqIBZ099gTPhC/giphy.gif")
        .addField("🎀・","`h!say`,`h!yo`,`h!slap`,`h!sond`,`h!sug`,`h!8ball`,`h!ahou`,`h!pp`,`h!ppbot`,`h!nitro`",false)
        .addField("🎵・","`h!play`,`h!s`,`h!vocal`",false)
        .addField("📡・","`h!dev`,`h!invite`",false)
        .setFooter("Bot pris en charge par ZeiDen","https://upload.wikimedia.org/wikipedia/commons/d/dd/Discord.png")
        .setTimestamp() 
        message.delete();
        message.channel.send(help)
    }
}