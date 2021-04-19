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
    const url = (`https://api.giphy.com/v1/randomid?api_key=${GIPHY_TOKEN}`);
    const response = await fetch(url);
    const resJSON = await response.json();
    //console.log(resJSON);
    const random_id = resJSON.data.random_id;
    console.log(`${url}/gifs/${random_id}`);
    const image = await fetch(`${url}/gifs/${random_id}`);
    const imageJSON = await image.json();
    console.log(imageJSON);
}



console.log("yo");
gif();

client.on('message', message => {
    
    if (message.channel.id === BOT_CHANNEL) {
        if (message.content === '!gif' || message.content === "!gif") {
            gif();
        }
    }
});   

