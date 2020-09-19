const fs = require('fs');
const Discord = require('discord.js');

const { prefix } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
 
for (const file of commandFiles) {
	const commandName = require(`./commands/${file}`);
	client.commands.set(commandName.name, commandName);
}

client.once('ready', () => {

    console.log('All is good.');

});



client.on('message', message => {
	client.user.setPresence({
		status: "online",
		game: { name: "pc help"}
    	});
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName)

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
