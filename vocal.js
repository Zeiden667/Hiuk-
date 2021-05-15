const Discord = require('discord.js')
const Command = require('./command')
const guildEmbedColor = new Map();
module.exports = class Ping extends Command {

    static match(messaage) {
        if(messaage.content === 'h!vocal') {
            return true
        }
    }
    static action(message) {
  const discord = require('discord.js')
        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        const color = guildEmbedColor.get(message.guild.id)

        let count = 0;
        let counter = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        var Embed = new discord.MessageEmbed()
            .setTitle("🔉・__Vocal__")
            .setDescription("**Il y a actuellement  : **"+ count + " **Personnes en vocal sur le serveur **")
            .setColor("#313236")
            .setFooter(`Hiuk bot`)
            .setTimestamp()
            if(!message.member.hasPermission('ADMINISTRATOR')){
                message.delete();
                message.channel.send("Vous n'avez pas les permissions nécessaire pour effectuer cette commande.")
            }
            if(message.member.hasPermission('ADMINISTRATOR')){
            message.delete();

        message.channel.send(Embed)
    }
}
}