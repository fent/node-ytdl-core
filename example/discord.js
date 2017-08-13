// Install discord.js before running this!
const Discord = require('discord.js');
const ytdl    = require('..');

const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const clientToken = ' Y o u r   B o t   T o k e n ';

const client = new Discord.Client();
client.login(clientToken);

client.on('ready', () => {
  console.log('discord.js client ready');
});

client.on('message', message => {
  if (message.content.startsWith('++play')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Please be in a voice channel first!');
    }
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(url, {
          filter : 'audioonly',
        });
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
