const assert      = require('assert');
const path        = require('path');
const fs          = require('fs');
const url         = require('url');
const streamEqual = require('stream-equal');
const nock        = require('./nock');
const ytdl        = require('..');


describe('Download video', function() {
  var id = '_HSylqgVYQI';
  var video = path.resolve(__dirname,
    'files/videos/' + id + '-regular/video.flv');
  var filter = function(format) { return format.container === 'mp4'; };
  var testInfo = require('./files/videos/pJk0p-98Xzc-vevo/expected_info.json');

  beforeEach(function() {
    ytdl.cache.reset();
  });

  it('Should be pipeable and data equal to stored file', function(done) {
    var scope = nock(id, {
      type: 'regular',
      dashmpd: true,
      get_video_info: true,
      player: 'player-vflppxuSE',
    });
    var stream = ytdl(id, { filter: filter });

    stream.on('info', function(info, format) {
      scope.urlReplyWithFile(format.url, 200, video);
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
      assert.ifError(err);
      scope.done();
      assert.ok(equal);
      done();
    });
  });

  it('Fals gracefully if error getting info', function(done) {
    var scope = nock(id, {
      type: 'regular',
      statusCode: 500,
    });
    var stream = ytdl(id, { filter: filter });
    stream.on('error', function(err) {
      scope.done();
      assert.ok(err);
      assert.equal(err.message, 'Status code: 500');
      done();
    });
  });

  describe('destroy stream', function() {
    describe('immediately', function() {
      it('Doesn\'t start the download', function(done) {
        var scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        var stream = ytdl(id, { filter: filter });
        stream.destroy();

        stream.on('request', function() {
          done(new Error('Should not emit `request`'));
        });
        stream.on('response', function() {
          done(new Error('Should not emit `response`'));
        });
        stream.on('info', function() {
          scope.done();
          done();
        });
      });
    });

    describe('right after request is made', function() {
      after(function() { nock.cleanAll(); });
      it('Doesn\'t start the download', function(done) {
        var scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        var stream = ytdl(id, { filter: filter });

        stream.on('request', function() {
          stream.destroy();
          scope.done();
          done();
        });
        stream.on('info', function(info, format) {
          nock.url(format.url).reply(200, 'aaaaaaaaaaaa');
        });
        stream.on('response', function() {
          throw new Error('Should not emit `response`');
        });
        stream.on('data', function() {
          throw new Error('Should not emit `data`');
        });
      });
    });

    describe('after download has started', function() {
      it('Download is incomplete', function(done) {
        var scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        var stream = ytdl(id, { filter: filter });

        stream.on('info', function(info, format) {
          scope.urlReplyWithFile(format.url, 200, video);
        });

        stream.on('response', function(res) {
          stream.destroy();
          res.on('data', function() {
            done(new Error('Should not emit `data`'));
          });
        });

        stream.on('abort', done);
      });
    });
  });

  describe('stream disconnects before end', function() {
    var filesize;
    before(function(done) {
      fs.stat(video, function(err, stat) {
        if (err) return done(err);
        filesize = stat.size;
        done();
      });
    });

    function destroy(req, res) {
      req.abort();
      res.unpipe();
      res.emit('end');
    }

    it('Still downloads the whole video', function(done) {
      var scope = nock(id, {
        type: 'regular',
        dashmpd: true,
        get_video_info: true,
        player: 'player-vflppxuSE',
      });
      var stream = ytdl(id);

      var destroyedTimes = 0;
      stream.on('info', function(info, format) {
        var req, res;
        scope.urlReplyFn(format.url, function() {
          req = this.req;
          return [
            200,
            fs.createReadStream(video),
            { 'content-length': filesize }
          ];
        });

        stream.once('response', function(a) { res = a; });

        stream.on('progress', function(chunkLength, downloaded, total) {
          if (downloaded / total >= 0.5) {
            var newUrl = format.url + '&range=' + downloaded + '-';
            scope.urlReplyFn(newUrl, function() {
              return [
                200,
                fs.createReadStream(video, { start: downloaded }),
                { 'content-length': filesize - downloaded }
              ];
            });
            stream.removeAllListeners('progress');
            destroyedTimes++;
            destroy(req, res);
          }
        });
      });

      var filestream = fs.createReadStream(video);
      streamEqual(filestream, stream, function(err, equal) {
        assert.ifError(err);
        scope.done();
        assert.equal(destroyedTimes, 1);
        assert.ok(equal);
        done();
      });
    });

    describe('with range', function() {
      it('Downloads from the given `start` to `end`', function(done) {
        var scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });

        var start = Math.floor(filesize * 0.1);
        var end = Math.floor(filesize * 0.45);
        var rangedSize = end - start + 1;
        var stream = ytdl(id, { range: { start: start, end: end } });

        var destroyedTimes = 0;
        stream.on('info', function(info, format) {
          var req, res;
          var url = format.url + '&range=' + start + '-' + end;
          scope.urlReplyFn(url, function() {
            req = this.req;
            return [
              200,
              fs.createReadStream(video, { start: start, end: end }),
              { 'content-length': rangedSize }
            ];
          });

          stream.once('response', function(a) { res = a; });

          stream.on('progress', function(chunkLength, downloaded, total) {
            if (downloaded / total >= 0.5) {
              var newUrl = format.url +
                '&range=' + (start + downloaded) + '-' + end;
              scope.urlReplyFn(newUrl, function() {
                return [
                  200,
                  fs.createReadStream(video, {
                    start: start + downloaded,
                    end: end,
                  }),
                  { 'content-length': rangedSize - downloaded }
                ];
              });
              destroyedTimes++;
              stream.removeAllListeners('progress');
              destroy(req, res);
            }
          });
        });

        var filestream = fs.createReadStream(video, { start: start, end: end });
        streamEqual(filestream, stream, function(err, equal) {
          assert.ifError(err);
          scope.done();
          assert.equal(destroyedTimes, 1);
          assert.ok(equal);
          done();
        });
      });
    });

    describe('Stream keeps disconnecting', function() {
      it('Too many reconnects', function(done) {
        var scope = nock(id, {
          type: 'regular',
          dashmpd: true,
          get_video_info: true,
          player: 'player-vflppxuSE',
        });
        var stream = ytdl(id);

        var destroyedTimes = 0;
        stream.on('info', function(info, format) {
          var req, res;
          scope.urlReplyFn(format.url, function() {
            req = this.req;
            return [
              200,
              fs.createReadStream(video),
              { 'content-length': filesize }
            ];
          });

          stream.on('response', function(a) { res = a; });

          stream.on('progress', function(chunkLength, downloaded) {
            // Keep disconnecting.
            if (++destroyedTimes < 5) {
              var newUrl = format.url + '&range=' + downloaded + '-';
              scope.urlReplyFn(newUrl, function() {
                return [
                  200,
                  fs.createReadStream(video, { start: downloaded }),
                  { 'content-length': filesize - downloaded }
                ];
              });
            }
            destroy(req, res);
          });
        });

        stream.on('end', function() {
          throw new Error('Stream should not end');
        });

        stream.on('error', function(err) {
          scope.done();
          assert.ok(err);
          assert.equal(err.message, 'Too many reconnects');
          assert.equal(destroyedTimes, 5);
          done();
        });
      });
    });
  });

  describe('with range', function() {
    it('Range added to download URL', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, {
        range: { start: 500, end: 1000 }
      });
      stream.on('info', function(info, format) {
        nock.url(format.url + '&range=500-1000')
          .reply(200, '', {'content-length': '0'});
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('with begin', function() {
    it('Begin added to download URL', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, { begin: '1m' });
      stream.on('info', function(info, format) {
        nock.url(format.url + '&begin=60000').reply(200, '');
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('with a bad filter', function() {
    it('Emits error', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, {
        filter: function() {}
      });
      stream.on('error', function(err) {
        assert.ok(err);
        assert.ok(/No formats found/.test(err.message));
        done();
      });
    });
  });

  describe('that is broadcasted live', function() {
    it('Begins downloading video succesfully', function(done) {
      var id = 'N4bU1i-XAxE';
      var scope = nock(id, {
        type: 'live',
        dashmpd: true,
        dashmpd2: true,
        m3u8: true,
        get_video_info: true,
        player: 'player-en_US-vfl5-0t5t',
      });
      var stream = ytdl(id, { quality: 91 });
      stream.on('info', function(info, format) {
        var host = url.parse(format.url).host;
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
        scope.urlReply('https://' + host + '/file01.ts', 200, 'one');
        scope.urlReply('https://' + host + '/file02.ts', 200, 'two');
        scope.urlReply('https://' + host + '/file03.ts', 200, 'tres');
      });

      var body = '';
      stream.setEncoding('utf8');
      stream.on('data', function(chunk) { body += chunk; });
      stream.on('end', function() {
        assert.equal(body, 'onetwotres');
        done();
      });
    });
  });
});
