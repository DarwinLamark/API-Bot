const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "$";
var randnum = 0;

bot.on('ready', function() {
    console.log("I'm Ready !");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '$markdown') {
            message.channel.send(
`Le **Markdown**, c'est la *vie* ! ***Discord***

~~Bonjour~~
__Bonjour__
`);
                message.channel.send("``Code``");
        }
        else if (message.content === '$richEmbed1') {
            message.channel.send({embed: {
                color: 3447003,
                description: 'Bonjour le monde !'
            }});
        }
        else if (message.content === '$richEmbed2') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Titre',
                url: 'https://www.google.com',
                description: 'Bonjour le monde !',
                fields: [{
                    name: 'Du texte simple',
                    value: 'Votre texte ici'
                },
                {
                    name: 'Markdown',
                    value: 'Voilà L\'adresse de [Google](https://www.google.com). '
                },
                {
                    name: 'Ajout d\'une URL',
                    value: 'Le **Markdown**, c\'est la *vie* ! ***Discord*** '
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Par API Bot'
                }
            }});
        }
        else if (message.content === '$richEmbed3') {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Mon Titre - 256 caractères')
            .setAuthor('Nom',  'https://bot-hub.com/media/bot_icon/Sift-Bot/Sift_Bot_Logo.jpg')
            .setColor(3447003)
            .setDescription('Ma Description - 2048 caractères')
            .setFooter('Pied de page - 2048', 'https://bot-hub.com/media/bot_icon/Sift-Bot/Sift_Bot_Logo.jpg')
            .setImage ('https://maxcdn.icons8.com/Share/icon/nolan/Business/rules1600.png')
            .setThumbnail('http://housing.umn.edu/sites/housing.umn.edu/files/resources.png')
            .setTimestamp()
            .setURL('https://discord.gg/wJdTMqM');
            
            embed.addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord*** ')
            .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord*** ')
            .addBlankField(true)
            .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord*** ')

            message.channel.send({embed: embed});
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('welcome to Gamer Central du Gaming :tada::hugging: !' + member.displayName);
    }).catch(console.error)
});

bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send(' you are left the server :slight_frown:' + member.displayName);
    }).catch(console.error)
});

bot.login('NDM4NjY4NDMwMDkxMjIzMDQx.DcIJOw.ECz3BLoZMl8fu6vcPi42x3iVqxc') //token