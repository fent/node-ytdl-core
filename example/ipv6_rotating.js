const fs = require('fs');
const path = require('path');
const ytdl = require('..');

const options = {
  quality: 'highest',
  IPv6Block: '2001:2::/48',
  // Example /48 block provided by:
  // https://www.iana.org/assignments/ipv6-unicast-address-assignments/ipv6-unicast-address-assignments.xhtml
};
const url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
const output = path.resolve(__dirname, 'video.mp4');

const video = ytdl(url, options);
video.pipe(fs.createWriteStream(output));
console.log('Downloading...');
video.on('end', () => {
  console.log('Finished downloading.');
});
