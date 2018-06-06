const fs    = require('fs');
const path  = require('path');
const https = require('https');
const ytdl  = require('..');
const id    = 'https://www.youtube.com/watch?v=QRS8MkLhQmM';
const lang  = 'en';

ytdl.getInfo(id, (err, info) => {
  if (err) throw err;
  const tracks = info
    .player_response.captions
    .playerCaptionsTracklistRenderer.captionTracks;
  if (tracks && tracks.length) {
    console.log('Found captions for',
      tracks.map(t => t.name.simpleText).join(', '));
    const track = tracks.find(t => t.languageCode === lang);
    if (track) {
      console.log('Retrieving captions:', track.name.simpleText);
      console.log('URL', track.baseUrl);
      const output = `${info.title}.${track.languageCode}.xml`;
      console.log('Saving to', output);
      https.get(track.baseUrl, (res) => {
        res.pipe(fs.createWriteStream(path.resolve(__dirname, output)));
      });

    } else {
      console.log('Could not find captions for', lang);

    }
  } else {
    console.log('No captions found for this video');
  }

});
