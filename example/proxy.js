const ytdl = require('..');
const HttpsProxyAgent = require('https-proxy-agent');

const agent = HttpsProxyAgent({
  ip: '111.111.111.111',
  port: 8080,
  // Remove this if you don't need to authenticate to your proxy.
  auth: 'user:pass',
});

const stream = ytdl('https://www.youtube.com/watch?v=2UBFIhS1YBk', {
  requestOptions: { agent },
});

console.log('Starting Download');

stream.on('data', chunk => {
  console.log('downloaded', chunk.length);
});

stream.on('error', err => {
  console.error(err);
});

stream.on('end', () => {
  console.log('Finished');
});
