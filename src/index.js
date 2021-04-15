// require the discord.js module
const Discord = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code.
// this event will only trigger one time after logging in.
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with bot token from env.
const BOT_TOKEN = process.env.BOT_TOKEN;
client.login(BOT_TOKEN);

client.on('message', message => {
	
    if (message.channel.id === process.env.BOT_CHANNEL) {
        if (message.content === 'sheesh' || message.content === "!sheesh") {
            message.channel.send('SHEEEEEEEEEEEEEEEEEEEEEEEEEEEESH');
        }
    }
});