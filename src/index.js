const fetch = require("node-fetch");

// require the discord.js module
const Discord = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

// create a new Discord client
const client = new Discord.Client();

const GIPHY_TOKEN = process.env.GIPHY_TOKEN;

// when the client is ready, run this code.
// this event will only trigger one time after logging in.
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with bot token from env.
const BOT_TOKEN = process.env.BOT_TOKEN;
client.login(BOT_TOKEN);

// get env variable for bot testing channel.
const BOT_CHANNEL = process.env.BOT_CHANNEL;

const gif = async () => {
    const url = (`https://api.giphy.com/v1`);
    const res = await fetch(`${url}/gifs/random?api_key=${GIPHY_TOKEN}`);
    const resJSON = await res.json();
    console.log(resJSON.data.image_url);
}

client.on('message', message => {
    
    // seperate the call and the tag.
    if (message.content.length != 0) {
        temp = message.content.split(" ");
    }
    
    // verifying message is within desired channel.
    if (message.channel.id === BOT_CHANNEL) {
        
        if (temp.length >= 2 && temp[0] === '!gif') {
        
            const url = (`https://api.giphy.com/v1`);
            const res = fetch(`${url}/gifs/random?api_key=${GIPHY_TOKEN}&tag=${temp[1]}`)
            .then(res => res.json())
            .then(data => message.channel.send(data.data.image_url)); 
        }
    }
});   

