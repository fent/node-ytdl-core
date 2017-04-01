/* install ytdl-core before running this! */
/* npm install --save ytdl-core */
const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client();
client.login(" Y o u r   B o t   T o k e n ");

client.on('message', message => {
  if (message.content.startsWith('++play')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {
          audioonly: true
        });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
