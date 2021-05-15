const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");

client.on("ready", async () =>{
  const status = [
    '・🍖・les Mugiwaras',
    'dev by twelf#9595 et ZeiDen#9999',
    'En dévlopement | h!help'
  ]
  let i = 0
  setInterval(() => {
    client.user.setActivity(status[i],({type :'STREAMING',url :'https://www.twitch.tv/zeiden_x'}))
    i = ++i % status.length

  }, 1e4)
    console.log("le bot est allumé");
    
})
client.once('ready', () => {
    console.log('Félicitations, votre bot Discord a été correctement initialisé !');
 });

const prefix ="h!";

var list = [];

const Help = require('./command/help')

const Ping = require('./command/ping')

const Nitro = require('./command/nitro')

const Yo = require('./command/yo')

const Besh = require('./command/besh')

const Kiss = require('./command/kiss')

const Dev = require('./command/Dev')

const Ahou = require('./command/ahou')

const Slap = require('./command/slap')

const Ball = require('./command/8ball')

const Pp = require('./command/avatar')

const Vocal = require('./command/vocal')

const Invite = require('./command/invite')

const Ppbot = require('./command/pp bot')

const Command = require('./command/command')

const config = require('./config.json');

client.db = require('./db.json')

client.on('message', message => {
    Ping.parse(message)
    Help.parse(message)
    Nitro.parse(message)
    Yo.parse(message)
    Besh.parse(message)
    Kiss.parse(message)
    Dev.parse(message)
    Ahou.parse(message)
    Slap.parse(message)
    Ball.parse(message)
    Pp.parse(message)
    Vocal.parse(message)
    Invite.parse(message)
    Ppbot.parse(message)
})


client.on('message', async (message) => {
    if(message.author.bot) return;

    let args = message.content.split(" ");
    let command = args.shift().toLowerCase();

    if(!command.startsWith(prefix)) return;

    
   
    
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
  
  
    
    
    
   
    
    
    

    
    

   

    
  if(message.content.startsWith( prefix + "sond")){
     if(message.member.hasPermission("ADMINISTRATOR")){
        message.delete()
        let msg = message.content.slice(6)
        if(!msg) return message.reply("msg")

        let embed = new Discord.MessageEmbed()
        .addField("→ Nouveau sondage de "+message.author.username, msg +
          ` 
           1️⃣ -  !
           
           2️⃣ -  !
           
           3️⃣ -  !
          `)
        .setColor("#D473D4")
        let msgreaction = await message.channel.send(embed)

        await msgreaction.react("1️⃣")
        await msgreaction.react("2️⃣")
        await msgreaction.react("3️⃣")
     }
    }
    
      if(message.content.startsWith( prefix + "sug")){
        message.delete()
        let msg = message.content.slice(5)
        if(!msg) return message.reply("msg")

        let embed = new Discord.MessageEmbed()
        .addField("Nouvelle suggestion de "+message.author.username, msg)
        let msgreaction = await message.channel.send(embed)

        await msgreaction.react("✅")
        await msgreaction.react("❌")
    }
  
    
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            let args = message.content.split(" ");
            
            if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
                message.reply("lien de la vidéo non ou mal mentionné.");
            }
            else {
                if(list.length > 0){
                    list.push(args[1]);
                    
                    var liste = new Discord.MessageEmbed()
                    .setColor("#1D4851")
                    .setAuthor("ajouté a la liste :")
                    .setDescription("Musiques")
                    message.channel.send(liste);
                }
                else {
                    list.push(args[1]);
                    var liste2 = new Discord.MessageEmbed()
                    .setColor("#1D4851")
                    .setAuthor("**ajouté a la liste** :")
                    .setDescription("Musiques,**fonction pas encore disponible**.")
                
                    message.channel.send(liste2);

                    message.member.voice.channel.join().then(connection => {
                        playMusic(connection);

                        connection.on("disconnect", () => {
                            list = [];
                        });
                    
                    }).catch(err => {
                        message.replay("Eureur lors de la connexion : " + err);
                    });
                }
            }
        }

        
    }
    if(message.content === prefix + "playlist"){
        let msg = "**FILE D'ATTENTE !**\n";
        for(var i = 0;i < list.length;i++){
            let name;
            await ytdl.getInfo(list[i], (err, info) => {
                if(err){
                    console.log("erreur de lien : " + err);
                    list.slice(i, 1);
                }
                else {
                    name = info.title;
                }
            });
            msg += "> " + i + " - " + name + "\n";

        }
        message.channel.send(msg);

    }
    
});



function playMusic(connection){
    let dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio"}));

    dispatcher.on("finish", () => {
        list.shift();
        dispatcher.destroy();

        if(list.length > 0){
            playMusic(connection);
        }
        else {
            connection.disconnect();
        }
    });

    dispatcher.on("error", err => {
        console.log("erreur de dispatcher : " + err);
        dispatcher.destroy();
        connection.disconnect();
    })
}

// id : 691297893469913102
// role : 798547903912083467
client.on('guildMemberAdd', (member) => {
    var general = client.channels.cache.get('835432682245849118');
    var bvn = new Discord.MessageEmbed()
    .setColor("#313236")
    .setDescription(`あ」・🍖 **Bienvenue à ${member}**,Il / elle a rejoint Les Mugiwaras !!`)
     general.send(bvn);
  });
   



client.on("message", async message => {
    if(message.content.startsWith( prefix + "say")){
        message.delete();
        let msg = message.content.slice(5)
        if(!msg) return message.reply("Veillez entrez un messaage.")

        
        message.channel.send(msg)
    }
})



client.login(config.TOKEN);