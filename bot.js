const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {

    console.log('Alllllll is good.');

});

client.on('message', message => {
    if (message.content === "test") {
        message.channel.send("no");
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
