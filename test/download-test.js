const assert      = require('assert');
const path        = require('path');
const fs          = require('fs');
const url         = require('url');
const streamEqual = require('stream-equal');
const sinon       = require('sinon');
const nock        = require('./nock');
const ytdl        = require('..');


describe('Download video', () => {
  const id = '_HSylqgVYQI';
  const video = path.resolve(__dirname,
    'files/videos/' + id + '-regular/video.flv');
  const filter = (format) => format.container === 'mp4';
  let testInfo;
  before((done) => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/pJk0p-98Xzc-vevo/expected_info.json'),
    'utf8', (err, body) => {
      assert.ifError(err);
      testInfo = JSON.parse(body);
      done();
    });
  });

  let clock;
  before(() => { clock = sinon.useFakeTimers({ toFake: ['setTimeout'] }); });
  after(() => { clock.restore(); });

  it('Should be pipeable and data equal to stored file', (done) => {
    const scope = nock(id, {
      type: 'regular',
      dashmpd: true,
      get_video_info: true,
      player: 'player-vflppxuSE',
    });
    const stream = ytdl(id, { filter: filter });

    stream.on('info', (info, format) => {
      scope.urlReplyWithFile(format.url, 200, video);
    });

    const filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, (err, equal) => {
      assert.ifError(err);
      scope.done();
      assert.ok(equal);
      done();
    });
  });

  it('Fals gracefully if error getting info', (done) => {
    const scope = nock(id, {
      type: 'regular',
      statusCode: 500,
    });
    const stream = ytdl(id, { filter: filter });
    stream.on('error', (err) => {
      scope.done();
      assert.ok(err);
      assert.equal(err.message, 'Status code: 500');
      done();
    });
  });

  describe('destroy stream', () => {
    describe('immediately', () => {
      it('Doesn\'t start the download', (done) => {
        const scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
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
      after(() => { nock.cleanAll(); });
      it('Doesn\'t start the download', (done) => {
        const scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        const stream = ytdl(id, { filter });

        stream.on('request', () => {
          stream.destroy();
          scope.done();
        });
        stream.on('info', (info, format) => {
          nock.url(format.url).reply(200, 'aaaaaaaaaaaa');
        });
        stream.on('response', () => {
          throw Error('Should not emit `response`');
        });
        stream.on('data', () => {
          throw Error('Should not emit `data`');
        });
        const abort = sinon.spy();
        stream.on('abort', abort);
        stream.on('error', (err) => {
          scope.done();
          assert.ok(abort.called);
          assert.equal(err.message, 'socket hang up');
          done();
        });
      });
    });

    describe('after download has started', () => {
      it('Download is incomplete', (done) => {
        const scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        const stream = ytdl(id, { filter });

        stream.on('info', (info, format) => {
          scope.urlReplyWithFile(format.url, 200, video);
        });

        stream.on('response', (res) => {
          stream.destroy();
          res.on('data', () => {
            done(Error('Should not emit `data`'));
          });
        });

        const abort = sinon.spy();
        stream.on('abort', abort);
        stream.on('error', (err) => {
          scope.done();
          assert.ok(abort.called);
          assert.equal(err.message, 'socket hang up');
          done();
        });
      });
    });
  });

  describe('stream disconnects before end', () => {
    let filesize;
    before((done) => {
      fs.stat(video, (err, stat) => {
        assert.ifError(err);
        filesize = stat.size;
        done();
      });
    });

    const destroy = (req, res) => {
      req.abort();
      res.unpipe();
      res.emit('end');
    };

    it('Still downloads the whole video', (done) => {
      const scope = nock(id, {
        type: 'regular',
        dashmpd: true,
        get_video_info: true,
        player: 'player-vflppxuSE',
      });
      const stream = ytdl(id);
      stream.on('error', done);

      let destroyedTimes = 0;
      stream.on('info', (info, format) => {
        let req, res;
        stream.once('request', (a) => { req = a; });
        stream.once('response', (a) => { res = a; });
        stream.on('reconnect', () => { clock.tick(100); });

        scope.urlReplyWithFile(format.url, 200, video, {
          'content-length': filesize,
          'accept-ranges': 'bytes',
        });

        stream.on('progress', (chunkLength, downloaded, total) => {
          if (downloaded / total >= 0.5) {
            scope.urlReply(format.url, 206, () => {
              return fs.createReadStream(video, { start: downloaded });
            }, {
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
      streamEqual(filestream, stream, (err, equal) => {
        assert.ifError(err);
        scope.done();
        assert.equal(destroyedTimes, 1);
        assert.ok(equal);
        done();
      });
    });

    describe('with range', () => {
      it('Downloads from the given `start` to `end`', (done) => {
        const scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });

        const start = Math.floor(filesize * 0.1);
        const end = Math.floor(filesize * 0.45);
        const rangedSize = end - start + 1;
        const stream = ytdl(id, { range: { start, end } });

        let destroyedTimes = 0;
        stream.on('info', (info, format) => {
          let req, res;
          stream.on('request', (a) => { req = a; });
          stream.on('response', (a) => { res = a; });
          stream.on('reconnect', () => { clock.tick(100); });

          scope.urlReply(format.url, 206, () => {
            return fs.createReadStream(video, { start, end });
          }, {
            'content-range': `bytes=${start}-${end}/${filesize}`,
            'content-length': rangedSize,
            'accept-ranges': 'bytes',
          });

          stream.on('progress', (chunkLength, downloaded, total) => {
            if (downloaded / total >= 0.5) {
              scope.urlReply(format.url, 206, () => {
                return fs.createReadStream(video, { start: start + downloaded, end });
              }, {
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
        streamEqual(filestream, stream, (err, equal) => {
          assert.ifError(err);
          scope.done();
          assert.equal(destroyedTimes, 1);
          assert.ok(equal);
          done();
        });
      });
    });
  });

  describe('with start range', () => {
    it('Range added to download headers', (done) => {
      const stream = ytdl.downloadFromInfo(testInfo, {
        range: { start: 500 },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206, '', {'content-length': '0'});
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('with end range', () => {
    it('Range added to download headers', (done) => {
      const stream = ytdl.downloadFromInfo(testInfo, {
        range: { end: 1000 },
      });
      stream.on('info', (info, format) => {
        nock.url(format.url)
          .reply(206, '', {'content-length': '0'});
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('with begin', () => {
    it('Begin added to download URL', (done) => {
      const stream = ytdl.downloadFromInfo(testInfo, { begin: '1m' });
      stream.on('info', (info, format) => {
        nock.url(format.url + '&begin=60000').reply(200, '');
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('with a bad filter', () => {
    it('Emits error', (done) => {
      const stream = ytdl.downloadFromInfo(testInfo, { filter: () => {} });
      stream.on('error', (err) => {
        assert.ok(err);
        assert.ok(/No formats found/.test(err.message));
        done();
      });
    });
  });

  describe('that is broadcasted live', () => {
    it('Begins downloading video succesfully', (done) => {
      const id = 'N4bU1i-XAxE';
      const scope = nock(id, {
        type: 'live',
        dashmpd: true,
        dashmpd2: true,
        m3u8: true,
        get_video_info: true,
        player: 'player-en_US-vfl5-0t5t',
      });
      const stream = ytdl(id, { quality: 91 });
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
        const host = url.parse(format.url).host;
        scope.urlReply(`https://${host}/file01.ts`, 200, 'one', {
          'content-length': '3'
        });
        scope.urlReply(`https://${host}/file02.ts`, 200, 'two', {
          'content-length': '3'
        });
        scope.urlReply(`https://${host}/file03.ts`, 200, 'tres', {
          'content-length': '4'
        });
      });

      let body = '';
      stream.setEncoding('utf8');
      stream.on('data', (chunk) => { body += chunk; });
      let progress = sinon.spy();
      stream.on('progress', progress);
      stream.on('end', () => {
        assert.equal(body, 'onetwotres');
        assert.ok(progress.called);
        assert.deepEqual(progress.args, [
          [3, 1, 3],
          [3, 2, 3],
          [4, 3, 3]
        ]);
        done();
      });
    });

    describe('end download early', () => {
      it('Stops downloading video', (done) => {
        const id = 'N4bU1i-XAxE';
        const scope = nock(id, {
          type: 'live',
          dashmpd: true,
          dashmpd2: true,
          m3u8: true,
          get_video_info: true,
          player: 'player-en_US-vfl5-0t5t',
        });
        const stream = ytdl(id, { quality: 91 });
        stream.on('info', () => {
          process.nextTick(() => {
            stream.destroy();
            scope.done();
            done();
          });
        });

        stream.on('data', () => { throw Error('should not emit `data`'); });
      });
    });

    describe('from a dash-mpd itag', () => {
      it('Begins downloading video succesfully', (done) => {
        const id = 'N4bU1i-XAxE';
        const scope = nock(id, {
          type: 'live',
          dashmpd: true,
          dashmpd2: true,
          m3u8: true,
          get_video_info: true,
          player: 'player-en_US-vfl5-0t5t',
        });
        const stream = ytdl(id, { quality: 142 });
        stream.on('info', (info, format) => {
          scope.urlReplyWithFile(format.url, 200, path.resolve(__dirname,
            'files/videos/' + id + '-live/playlist.mpd'));
          const host = url.parse(format.url).host;
          scope.urlReply(`https://${host}/video/file01.ts`, 200, 'one');
          scope.urlReply(`https://${host}/video/file02.ts`, 200, 'two');
          scope.urlReply(`https://${host}/video/file03.ts`, 200, 'tres');
        });

        let body = '';
        stream.setEncoding('utf8');
        stream.on('data', (chunk) => { body += chunk; });
        stream.on('end', () => {
          assert.equal(body, 'onetwotres');
          done();
        });
      });
    });
  });
});
