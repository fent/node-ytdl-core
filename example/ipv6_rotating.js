const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

let options = {
  quality: 'highest',
  chunking: true,
  IPv6Block: '2001:2::/48',
  // Example /48 block provided by:
  // https://www.iana.org/assignments/ipv6-unicast-address-assignments/ipv6-unicast-address-assignments.xhtml
};
let url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
let output = path.resolve(__dirname, 'video.mp4');

const video = ytdl(url, options);
video.pipe(fs.createWriteStream(output));
video.on('end', () => {
  console.log('Finished downloading.');
});
