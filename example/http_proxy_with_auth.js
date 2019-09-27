const ytdl = require('..');
const proxyDetails = { ip: '111.111.111.111', port: 8080, username: 'hadorons', password: 'pass1234' }
const auth = Buffer.from(`${proxyDetails.username}:${proxyDetails.password}`).toString('base64');

const stream = ytdl('https://www.youtube.com/watch?v=2UBFIhS1YBk', {
  requestOptions: {
    transform: (parsed) => {
      return {
        host: proxyDetails.ip,
        port: proxyDetails.port,
        path: parsed.href,
        headers: {
          Host: parsed.host,
          'Proxy-Authorization': 'Basic ' + auth // Remove it if you don't need to authenticate to your proxy.
        },
        protocol: 'http:', // This is needed if you want to communicate with your proxy over HTTP and not HTTPS
      };
    }
  },
});

console.log('Starting Download');

stream.on('data', (chunk) => {
  console.log('downloaded ', chunk.length);
});

stream.on('end', () => {
  console.log('Finished');
});
