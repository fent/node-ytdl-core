const path = require('path');
const fs = require('fs');
const ytdl = require('..');
const id = '7wNb0pHyGuI';

const filepath = path.resolve(__dirname, 'info.json');

ytdl.getInfo(id, (err, info) => {
  if (err) throw err;
  console.log('title:', info.title);
  console.log('rating:', info.player_response.videoDetails.averageRating);
  console.log('uploaded by:', info.author.name);
  const json = JSON.stringify(info, null, 2)
    .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0'); // eslint-disable-line max-len
  fs.writeFile(filepath, json, err2 => {
    if (err2) throw err2;
  });
});
