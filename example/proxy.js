const ytdl = require('..');

const stream = ytdl('https://www.youtube.com/watch?v=2UBFIhS1YBk', {
  requestOptions: (parsed) => {
    return {
      host: '127.0.0.1',
      port: 8888,
      path: '/' + parsed.href,
      headers: { Host: parsed.host },
    };
  },
});

console.log('Starting Download');

stream.on('data', (chunk) => {
  console.log('downloaded', chunk.length);
});

stream.once('end', () => {
  console.log('Finished');
});
