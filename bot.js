//note: for this to work you need: ffmpeg, ytdlcore, opusscript

const Discord = require('discord.js');
const client = new Discord.Client();
//const ffmpeg = require('ffmpeg');
let prefix ="!"; //this is for later bot commands
//const currentPL = require('http..song.js) //song is going to be a function in another node

//this is the part where you c and p
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();
//end cp

//Don't post what's inside bot.login when you post it on github
//client.login('MzI5NzkxMjAzNDM0NTYxNTM4.DDXncw.q3yw7jenJ036O3O4CaZ3HA875cs');
//
client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!play') {
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => {
       const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
       broadcast.playStream(stream);
       const dispatcher = connection.playBroadcast(broadcast);
     })
     .catch(console.error);
  }
});

client.login('MzI5NzkxMjAzNDM0NTYxNTM4.DDYUeQ.Fm9gdExcm9rlv9x2Y2NJL22TJ6o');
//this login code thing is your bot's token code
