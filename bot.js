const Discord = require('discord.js');
const client = new Discord.Client();

var words = new Array("test", "mean");

var eggs = new Array("egg", "tomato");

client.once('ready', () => {

    console.log('Alllllll is good.');

});

client.on('message', message => {
    const args = message.content.split(/ +/);
    for (i = 0; i < args.length; i++) {
        var egg = eggs.includes(args[i]);
        if (egg === true) {
            return message.react('🍆')
        }
        var swear = words.includes(args[i]);
        if (swear === true) {
            return message.channel.send('no.')
        }
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
