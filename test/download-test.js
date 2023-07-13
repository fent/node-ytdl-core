const assert = require('assert');
const path = require('path');
const fs = require('fs');
const streamEqual = require('stream-equal');
const sinon = require('sinon');
const nock = require('./nock');
const ytdl = require('..');
const net = require('net');


describe('Download video', () => {
  const filter = format => format.container === 'mp4';
  let expectedInfo;
  before(() => expectedInfo = require('./files/videos/regular/expected-info.json'));

  let clock;
  before(() => { clock = sinon.useFakeTimers({ toFake: ['setTimeout'] }); });
  after(() => { clock.restore(); });

  it('Should be pipeable and data equal to stored file', async() => {
    const id = '_HSylqgVYQI';
    const scope = nock(id, 'regular', {
      watchJson: false,
    });
    const stream = ytdl(id, { filter: filter });
    const video = path.resolve(__dirname, `files/videos/regular/video.flv`);

    stream.on('info', (info, format) => {
      scope.urlReplyWithFile(format.url, 200, video);
    });

    const filestream = fs.createReadStream(video);
    let equal = await streamEqual(filestream, stream);
    scope.done();
    assert.ok(equal);
  });

  describe('When there is an error', () => {
    it('Stream emits an error', done => {
      const id = '99999999999';
      const scope = nock(id, 'non-existent');
      const stream = ytdl(id, { filter, requestOptions: { maxRetries: 0 } });
      stream.on('error', err => {
        assert.ok(err);
        assert.strictEqual(err.message, 'Video unavailable');
        scope.done();
        done();
      });
    });
  });

  describe('destroy stream', () => {
    describe('immediately', () => {
      it('Doesn\'t start the download', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter });
        stream.destroy();

        stream.on('request', () => {
          done(Error('Should not emit `request`'));
        });
        stream.on('response', () => {
          done(Error('Should not emit `response`'));
        });
        stream.on('info', () => {
          scope.done();
          done();
        });
      });
    });

    describe('right after request is made', () => {
      it('Doesn\'t start the download', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter });

        stream.on('request', () => {
          stream.destroy();
          scope.done();
          done();
        });
        stream.on('info', (info, format) => {
          nock.url(format.url).reply(200, 'aaaaaaaaaaaa');
        });
        stream.on('response', () => {
          done(Error('Should not emit `response`'));
        });
        stream.on('data', () => {
          done(Error('Should not emit `data`'));
        });
        stream.on('error', err => {
          // Swallow possible error, only occurs in node v10, v12.
          assert.strictEqual(err.message, 'socket hang up');
        });
      });
    });

    describe('after download has started', () => {
      it('Download is incomplete', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter });
        const video = path.resolve(__dirname, `files/videos/regular/video.flv`);

        stream.on('info', (info, format) => {
          scope.urlReplyWithFile(format.url, 200, video);
        });

        stream.on('response', res => {
          res.on('data', () => {
            done(Error('Should not emit `data`'));
          });
          stream.destroy();
          scope.done();
          done();
        });

        stream.on('abort', () => {
          done(Error('Should not emit `abort`'));
        });
      });
    });
  });

  describe('destroy chunked stream', () => {
    const chunkedFilter = 'videoonly';
    describe('immediately', () => {
      it('Doesn\'t start the download', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter: chunkedFilter });
        stream.destroy();

        stream.on('request', () => {
          done(Error('Should not emit `request`'));
        });
        stream.on('response', () => {
          done(Error('Should not emit `response`'));
        });
        stream.on('info', () => {
          scope.done();
          done();
        });
      });
    });

    describe('right after request is made', () => {
      it('Doesn\'t start the download', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter: chunkedFilter });

        stream.on('request', () => {
          stream.destroy();
          scope.done();
          done();
        });
        stream.on('info', (info, format) => {
          nock.url(format.url).reply(200, 'aaaaaaaaaaaa');
        });
        stream.on('response', () => {
          done(Error('Should not emit `response`'));
        });
        stream.on('data', () => {
          done(Error('Should not emit `data`'));
        });
        const abort = sinon.spy();
        stream.on('abort', abort);
        stream.on('error', err => {
          // Swallow possible error, only occurs in node v10, v12.
          assert.strictEqual(err.message, 'socket hang up');
        });
      });
    });

    describe('after download has started', () => {
      it('Download is incomplete', done => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const stream = ytdl(id, { filter: chunkedFilter });
        const video = path.resolve(__dirname, `files/videos/regular/video.flv`);

        stream.on('info', (info, format) => {
          scope.urlReplyWithFile(format.url, 200, video);
        });

        stream.on('response', res => {
          res.on('data', () => {
            done(Error('Should not emit `data`'));
          });
          stream.destroy();
          scope.done();
          done();
        });

        stream.on('abort', () => {
          done(Error('Should not emit `abort`'));
        });
      });
    });
  });

  describe('stream disconnects before end', () => {
    const id = '_HSylqgVYQI';
    const video = path.resolve(__dirname, `files/videos/regular/video.flv`);
    let filesize;
    before(done => {
      fs.stat(video, (err, stat) => {
        assert.ifError(err);
        filesize = stat.size;
        done();
      });
    });

    const destroy = (req, res) => {
      req.destroy();
      res.unpipe();
    };

    it('Still downloads the whole video', async() => {
      const scope = nock(id, 'regular', {
        watchJson: false,
      });
      const stream = ytdl(id);

      let destroyedTimes = 0;
      stream.on('info', (info, format) => {
        let req, res;
        stream.once('request', a => { req = a; });
        stream.once('response', a => { res = a; });
        stream.on('reconnect', () => { clock.tick(500); });

        scope.urlReplyWithFile(format.url, 200, video, {
          'content-length': filesize,
          'accept-ranges': 'bytes',
        });

        stream.on('progress', (chunkLength, downloaded, total) => {
          if (downloaded / total >= 0.5) {
            scope.urlReply(format.url, 206, () => fs.createReadStream(video, { start: downloaded }), {
              'content-range': `bytes=${downloaded}-${filesize}/${filesize}`,
              'content-length': filesize - downloaded,
              'accept-ranges': 'bytes',
            });
            stream.removeAllListeners('progress');
            destroyedTimes++;
            destroy(req, res);
          }
        });
      });

      const filestream = fs.createReadStream(video);
      let equal = await streamEqual(filestream, stream);
      scope.done();
      assert.strictEqual(destroyedTimes, 1);
      assert.ok(equal);
    });

    describe('with range', () => {
      it('Downloads from the given `start` to `end`', async() => {
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const start = Math.floor(filesize * 0.1);
        const end = Math.floor(filesize * 0.45);
        const rangedSize = end - start + 1;
        const stream = ytdl(id, { range: { start, end } });

        let destroyedTimes = 0;
        stream.on('info', (info, format) => {
          let req, res;
          stream.on('request', a => { req = a; });
          stream.on('response', a => { res = a; });
          stream.on('reconnect', () => { clock.tick(500); });

          scope.urlReply(format.url, 206, () => fs.createReadStream(video, { start, end }), {
            'content-range': `bytes=${start}-${end}/${filesize}`,
            'content-length': rangedSize,
            'accept-ranges': 'bytes',
          });

          stream.on('progress', (chunkLength, downloaded, total) => {
            if (downloaded / total >= 0.5) {
              scope.urlReply(format.url, 206, () => fs.createReadStream(video, { start: start + downloaded, end }), {
                'content-range': `bytes=${downloaded}-${end}/${filesize}`,
                'content-length': rangedSize - downloaded,
                'accept-ranges': 'bytes',
              });
              destroyedTimes++;
              stream.removeAllListeners('progress');
              destroy(req, res);
            }
          });
        });

        const filestream = fs.createReadStream(video, { start, end });
        let equal = await streamEqual(filestream, stream);
        scope.done();
        assert.strictEqual(destroyedTimes, 1);
        assert.ok(equal);
      });
    });

    describe('that should be chunked', () => {
      it('Starts downloading video successfully and data equal to stored file', async() => {
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const dlChunkSize = 1024 * 200;
        const stream = ytdl(id, { filter: 'videoonly', dlChunkSize });

        stream.on('info', (info, format) => {
          scope.urlReply(format.url, 206, () => fs.createReadStream(video, { start: 0, end: dlChunkSize - 1 }), {
            'content-range': `bytes=0-${dlChunkSize - 1}/${filesize}`,
            'content-length': dlChunkSize,
            'accept-ranges': 'bytes',
          });

          stream.on('progress', (chunk, downloaded) => {
            if (downloaded % dlChunkSize === 0) {
              scope.urlReply(
                format.url,
                206,
                () => fs.createReadStream(video, { start: dlChunkSize, end: filesize - 1 }),
                {
                  'content-range': `bytes=${dlChunkSize}-${filesize - 1}/${filesize}`,
                  'content-length': filesize - downloaded,
                  'accept-ranges': 'bytes',
                });
              stream.removeAllListeners('progress');
            }
          });
        });

        const filestream = fs.createReadStream(video);
        let equal = await streamEqual(filestream, stream);
        scope.done();
        assert.ok(equal);
      });
    });

    describe('chunked with range', () => {
      it('Downloads from the given `start` to `end`', async() => {
        const scope = nock(id, 'regular', {
          watchJson: false,
        });
        const start = Math.floor(filesize * 0.1);
        const end = Math.floor(filesize * 0.15);
        const rangedSize = end - start + 1;
        const dlChunkSize = 1024 * 10;
        const stream = ytdl(id, { filter: 'videoonly', dlChunkSize, range: { start, end } });

        let totalBytes, downloadedBytes, reqStart, reqEnd = 0;

        stream.on('request', req => {
          const range = req.options.headers.range.replace('bytes=', '').split('-');
          reqStart = reqStart !== start ? parseInt(range[0]) : reqStart;
          reqEnd = parseInt(range[1]);
        });

        stream.on('info', (info, format) => {
          let chunkStart = start;
          let chunkEnd = rangedSize < dlChunkSize ? end : start + dlChunkSize - 1;
          let contentLength = chunkEnd - chunkStart + 1;

          scope.urlReply(format.url, 206, () => fs.createReadStream(video, { start: chunkStart, end: chunkEnd }), {
            'content-range': `bytes=${chunkStart}-${chunkEnd}/${rangedSize}`,
            'content-length': contentLength,
            'accept-ranges': 'bytes',
          });

          stream.on('progress', (chunk, downloaded, total) => {
            if (downloaded % dlChunkSize === 0 && chunkEnd !== end) {
              chunkStart = chunkEnd + 1;
              chunkEnd = rangedSize - downloaded < dlChunkSize ? end : chunkEnd + dlChunkSize;
              contentLength = chunkEnd ? chunkEnd - chunkStart + 1 : end - chunkStart;

              scope.urlReply(
                format.url,
                206,
                () => fs.createReadStream(video, { start: chunkStart, end: chunkEnd }),
                {
                  'content-range': `bytes=${chunkStart}-${chunkEnd}/${rangedSize}`,
                  'content-length': contentLength,
                  'accept-ranges': 'bytes',
                });
            }
            totalBytes = total;
            downloadedBytes = downloaded;
          });
        });

        const filestream = fs.createReadStream(video, { start, end });
        let equal = await streamEqual(filestream, stream);
        scope.done();
        assert.ok(equal);
        assert.strictEqual(totalBytes, rangedSize);
        assert.strictEqual(downloadedBytes, totalBytes);
        assert.strictEqual(reqStart, start);
        assert.strictEqual(reqEnd, end);
      });
    });

    it('Chunks video only and chunk size matches given size', done => {
      const dlChunkSize = 1024 * 200;
      const stream = ytdl.downloadFromInfo(expectedInfo, { filter: 'videoonly', dlChunkSize });

      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });

      stream.on('request', req => {
        const reqChunkSize = parseInt(req.options.headers.range.split('-')[1]);
        assert.strictEqual(reqChunkSize, dlChunkSize);
        stream.removeAllListeners('request');
        stream.destroy();
        done();
      });
    });

    it('Chunks audio only and chunk size matches given size', done => {
      const dlChunkSize = 1024;
      const stream = ytdl.downloadFromInfo(expectedInfo, { filter: 'audioonly', dlChunkSize });

      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });

      stream.on('request', req => {
        const reqChunkSize = parseInt(req.options.headers.range.split('-')[1]);
        assert.strictEqual(reqChunkSize, dlChunkSize);
        stream.removeAllListeners('request');
        stream.destroy();
        done();
      });
    });
  });

  describe('with start range', () => {
    it('Range added to download headers', done => {
      const start = 500;
      const stream = ytdl.downloadFromInfo(expectedInfo, {
        range: { start },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.resume();
      stream.on('error', done);
      stream.on('request', req => {
        const reqStart = parseInt(req.options.headers.range.replace('bytes=', '').split('-')[0]);
        assert.strictEqual(reqStart, start);
        done();
      });
    });
  });

  describe('chunked with start range', () => {
    it('Range added to download headers', done => {
      const start = 500;
      const stream = ytdl.downloadFromInfo(expectedInfo, {
        filter: 'audioonly',
        range: { start },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.resume();
      stream.on('error', done);
      stream.on('request', req => {
        const reqStart = parseInt(req.options.headers.range.replace('bytes=', '').split('-')[0]);
        assert.strictEqual(reqStart, start);
        done();
      });
    });
  });

  describe('with end range', () => {
    it('Range added to download headers', done => {
      const end = 1000;
      const stream = ytdl.downloadFromInfo(expectedInfo, {
        range: { end },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.resume();
      stream.on('error', done);
      stream.on('request', req => {
        const reqEnd = parseInt(req.options.headers.range.replace('bytes=', '').split('-')[1]);
        assert.strictEqual(reqEnd, end);
        done();
      });
    });
  });

  describe('chunked with end range', () => {
    it('Range added to download headers', done => {
      const end = 1000;
      const stream = ytdl.downloadFromInfo(expectedInfo, {
        filter: 'audioonly',
        range: { end },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.resume();
      stream.on('error', done);
      stream.on('request', req => {
        const reqEnd = parseInt(req.options.headers.range.replace('bytes=', '').split('-')[1]);
        assert.strictEqual(reqEnd, end);
        done();
      });
    });
  });

  describe('with begin', () => {
    it('Begin added to download URL', done => {
      const stream = ytdl.downloadFromInfo(expectedInfo, { begin: '1m' });
      stream.on('info', (info, format) => {
        nock.url(`${format.url}&begin=60000`).reply(200, '');
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('With IPv6 Block', () => {
    it('Sends request with IPv6 address', done => {
      const stream = ytdl.downloadFromInfo(expectedInfo, { IPv6Block: '2001:2::/48' });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.on('request', req => {
        assert.ok(net.isIPv6(req.options.localAddress));
        done();
      });
    });
  });

  describe('Without IPv6 Block', () => {
    it('Sends request with (default) IPv4 address', done => {
      const stream = ytdl.downloadFromInfo(expectedInfo);
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206);
      });
      stream.on('request', req => {
        assert.ok(req.options.localAddress === undefined);
        done();
      });
    });
  });

  describe('with a bad filter', () => {
    it('Emits error', done => {
      const stream = ytdl.downloadFromInfo(expectedInfo, { filter: () => false });
      stream.on('error', err => {
        assert.ok(err);
        assert.ok(/No such format found/.test(err.message));
        done();
      });
    });
  });

  describe('that is broadcasted live', () => {
    it('Begins downloading video succesfully', done => {
      const testId = '5qap5aO4i9A';
      const scope = nock(testId, 'live-now');
      const stream = ytdl(testId, { filter: format => format.isHLS });
      stream.on('info', (info, format) => {
        scope.urlReply(format.url, 200, [
          '#EXTM3U',
          '#EXT-X-VERSION:3',
          '#EXT-X-TARGETDURATION:8',
          '#EXT-X-MEDIA-SEQUENCE:01',
          '',
          '#EXTINF:7.975,',
          '/file01.ts',
          '#EXTINF:7.941,',
          '/file02.ts',
          '#EXTINF:7.975,',
          '/file03.ts',
          '#EXT-X-ENDLIST',
        ].join('\n'));
        const host = new URL(format.url).host;
        scope.urlReply(`https://${host}/file01.ts`, 200, 'one', {
          'content-length': '3',
        });
        scope.urlReply(`https://${host}/file02.ts`, 200, 'two', {
          'content-length': '3',
        });
        scope.urlReply(`https://${host}/file03.ts`, 200, 'tres', {
          'content-length': '4',
        });
      });

      let body = '';
      stream.setEncoding('utf8');
      stream.on('data', chunk => { body += chunk; });
      let progress = sinon.spy();
      stream.on('progress', progress);
      stream.on('end', () => {
        assert.strictEqual(body, 'onetwotres');
        assert.ok(progress.called);
        assert.deepEqual(progress.args, [
          [3, 1, 3],
          [3, 2, 3],
          [4, 3, 3],
        ]);
        done();
      });
    });

    describe('end download early', () => {
      it('Stops downloading video', done => {
        const testId = '5qap5aO4i9A';
        const scope = nock(testId, 'live-now');
        const stream = ytdl(testId);
        stream.on('info', () => {
          process.nextTick(() => {
            stream.destroy();
            scope.done();
            done();
          });
        });

        stream.on('data', () => { done(Error('should not emit `data`')); });
      });
    });

    describe('from a dash-mpd itag', () => {
      it('Begins downloading video succesfully', done => {
        const testId = '5qap5aO4i9A';
        let dashResponse = fs.readFileSync(path.resolve(__dirname, `files/videos/live-now/dash-manifest.xml`), 'utf8');
        const replaceBetweenTags = (tagName, content) => {
          const regex = new RegExp(`<${tagName}>(.+?)</${tagName}`, 'g');
          dashResponse = dashResponse.replace(regex, `<${tagName}>${content}</${tagName}`);
        };

        // Create a playlist file that has only 3 short segments
        // so we can easily mock these in tests.
        replaceBetweenTags('SegmentTimeline', `
            <S d="5000" /><S d="5000" /><S d="5000">
            `);
        replaceBetweenTags('BaseURL', 'https://googlevideo.com/videoplayback/');
        replaceBetweenTags('SegmentList', `
            <SegmentURL media="sq/video01.ts" />
            <SegmentURL media="sq/video02.ts" />
            <SegmentURL media="sq/video03.ts" />
            `);
        dashResponse = dashResponse.replace('type="dynamic"', '');

        const scope = nock(testId, 'live-now', {
          watchJson: false,
          dashmpd: [true, 200, dashResponse],
        });
        const stream = ytdl(testId, { filter: format => format.isDashMPD });
        stream.on('info', (info, format) => {
          scope.urlReply(format.url, 200, dashResponse);
          scope.urlReply(`https://googlevideo.com/videoplayback/sq/video01.ts`, 200, 'one');
          scope.urlReply(`https://googlevideo.com/videoplayback/sq/video02.ts`, 200, 'two');
          scope.urlReply(`https://googlevideo.com/videoplayback/sq/video03.ts`, 200, 'tres');
        });

        let body = '';
        stream.setEncoding('utf8');
        stream.on('data', chunk => { body += chunk; });
        stream.on('end', () => {
          scope.done();
          assert.strictEqual(body, 'onetwotres');
          done();
        });
      });
    });
  });

  describe('that has not yet started broadcasting', () => {
    it('Stream emits an error', done => {
      const id = 'VIBFo3Ti5vQ';
      const scope = nock(id, 'live-future');
      let stream = ytdl(id, { requestOptions: { maxRetries: 0 } });
      stream.on('error', err => {
        scope.done();
        assert.ok(/This live event will begin in/.test(err.message), `Error did not match: ${err.message}`);
        done();
      });
    });
  });

  describe('From a rental', () => {
    it('Stream emits an error', done => {
      const id = 'SyKPsFRP_Oc';
      const scope = nock(id, 'rental');
      let stream = ytdl(id);
      stream.on('error', err => {
        scope.done();
        assert.strictEqual(err.message, 'This video requires payment to watch.');
        done();
      });
      stream.on('data', () => {
        done(Error('should not emit `data`'));
      });
      stream.on('end', () => {
        done(Error('should not emit `end`'));
      });
    });
  });

  describe('With no formats', () => {
    it('Stream emits an error', done => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, 'regular', {
        watchHtml: [true, 200, body => body.replace(/\b(formats|adaptiveFormats)\b/g, 'no')],
        watchJson: false,
        get_video_info: false,
        player: false,
      });
      let stream = ytdl(id);
      stream.on('error', err => {
        scope.done();
        assert.strictEqual(err.message, 'This video is unavailable');
        done();
      });
      stream.on('data', () => {
        done(Error('should not emit `data`'));
      });
      stream.on('end', () => {
        done(Error('should not emit `end`'));
      });
    });
  });
});
