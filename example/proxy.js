const ytdl = require('..');
const HttpsProxyAgent = require('https-proxy-agent');

// Update the proxy URL to a working proxy server
const proxy = 'http://user:pass@proxyserver.example.com:8080';
const agent = HttpsProxyAgent(proxy);

// Configure the proxy server
// Remove 'user:pass@' if you don't need to authenticate to your proxy.

const stream = ytdl('https://www.youtube.com/watch?v=aqz-KE-bpKQ', {
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
