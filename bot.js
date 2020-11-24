const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {

    console.log('All is good.');

});

client.on('message', message => {

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
