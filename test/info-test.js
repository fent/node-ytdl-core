const ytdl   = require('..');
const path   = require('path');
const fs     = require('fs');
const assert = require('assert-diff');
const nock   = require('./nock');
const sinon  = require('sinon');
const muk    = require('muk-prop');


describe('ytdl.getInfo()', () => {
  let clock;
  before(() => { clock = sinon.useFakeTimers({ toFake: ['setTimeout'] }); });
  after(() => { clock.restore(); });

  describe('From a regular video', () => {
    const id = 'pJk0p-98Xzc';
    let expectedInfo;
    before((done) => {
      fs.readFile(path.resolve(__dirname,
        `files/videos/${id}-vevo/expected_info.json`),
      'utf8', (err, body) => {
        assert.ifError(err);
        expectedInfo = JSON.parse(body);
        done();
      });
    });

    it('Retrieves correct metainfo', (done) => {
      const scope = nock(id, {
        type: 'vevo',
        dashmpd: true,
        get_video_info: true,
        player: 'player-en_US-vflV3n15C',
      });

      ytdl.getInfo(id, (err, info) => {
        assert.ifError(err);
        scope.done();
        assert.ok(info.description.length);
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });

    describe('Use ytdl.getBasicInfo()', () => {
      it('Retrieves just enough metainfo', (done) => {
        const scope = nock(id, {
          type: 'vevo',
          dashmpd: false,
          get_video_info: true,
        });

        ytdl.getBasicInfo(id, (err, info) => {
          assert.ifError(err);
          scope.done();
          assert.equal(info.formats.length, expectedInfo.formats.length - 1);
          done();
        });
      });

      describe('Followed by ytdl.getInfo()', () => {
        it('Does not make extra requests', (done) => {
          const scope = nock(id, {
            type: 'vevo',
            dashmpd: true,
            get_video_info: true,
            player: 'player-en_US-vflV3n15C',
          });

          ytdl.getBasicInfo(id, (err, info) => {
            assert.ifError(err);
            assert.equal(info.formats.length, expectedInfo.formats.length - 1);
            ytdl.getInfo(id, (err, info) => {
              scope.done();
              assert.equal(info.formats.length, expectedInfo.formats.length);
              done();
            });
          });
        });
      });

      describe('Use `ytdl.downloadFromInfo()`', () => {
        it('Throw error', (done) => {
          const scope = nock(id, {
            type: 'vevo',
            dashmpd: false,
            get_video_info: true,
          });

          ytdl.getBasicInfo(id, (err, info) => {
            assert.ifError(err);
            scope.done();
            assert.throws(() => {
              ytdl.downloadFromInfo(info);
            }, /Cannot use/);
            done();
          });
        });
      });
    });

    describe('Use `ytdl.downloadFromInfo()`', () => {
      it('Retrives video file', (done) => {
        const stream = ytdl.downloadFromInfo(expectedInfo);
        let scope;
        stream.on('info', (info, format) => {
          scope = nock.url(format.url).reply(200);
        });
        stream.resume();
        stream.on('error', done);
        stream.on('end', () => {
          scope.done();
          done();
        });
      });
    });

    describe('Pass request options', () => {
      it('Request gets called with more headers', (done) => {
        const scope = nock(id, {
          type: 'vevo',
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
          headers: { 'X-Hello': '42' }
        });

        ytdl.getInfo(id, {
          requestOptions: { headers: { 'X-Hello': '42' }}
        }, (err) => {
          assert.ifError(err);
          scope.done();
          done();
        });
      });
    });

    describe('Using the promise API', () => {
      it('Retrieves correct metainfo', (done) => {
        const scope = nock(id, {
          type: 'vevo',
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });

        ytdl.getInfo(id)
          .then((info) => {
            scope.done();
            assert.ok(info.description.length);
            assert.equal(info.formats.length, expectedInfo.formats.length);
            done();
          })
          .catch(done);
      });

      describe('On a video that fails', () => {
        const id = 'unknown-vid';

        it('Error is caught', (done) => {
          const scope = nock(id);
          const p = ytdl.getInfo(id);
          p.catch((err) => {
            scope.done();
            assert.ok(err);
            assert.equal(err.message, 'This video does not exist.');
            done();
          });
        });
      });
    });

    describe('Called twice', () => {
      const id = 'pJk0p-98Xzc';

      it('Makes requests once', (done) => {
        const scope = nock(id, {
          type: 'vevo',
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });

        let myinfo = null;
        ytdl.getInfo(id, (err, info) => {
          assert.ifError(err);
          myinfo = info;
          assert.ok(info.description.length);
          assert.equal(info.formats.length, expectedInfo.formats.length);
          ytdl.getInfo(id, (err, info) => {
            assert.ifError(err);
            scope.done();
            assert.equal(info, myinfo);
            done();
          });
        });
      });
    });
  });

  describe('From a non-existant video', () => {
    const id = 'unknown-vid';

    it('Should give an error', (done) => {
      const scope = nock(id);
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'This video does not exist.');
        done();
      });
    });
  });

  describe('From an age restricted video', () => {
    const id = 'rIqCiJKWx9I';
    const expectedInfo = require('./files/videos/' + id + '-age-restricted/expected_info.json');

    it('Returns correct video metainfo', (done) => {
      const scope = nock(id, {
        type: 'age-restricted',
        dashmpd: true,
        embed: true,
        player: 'player-en_US-vflV3n15C',
        get_video_info: true,
      });
      ytdl.getInfo(id, (err, info) => {
        assert.ifError(err);
        scope.done();
        assert.equal(info.formats.length, expectedInfo.formats.length);
        assert.ok(info.age_restricted);
        done();
      });
    });

    describe('In any language', () => {
      it('Returns correct video metainfo', (done) => {
        const scope = nock(id, {
          type: 'age-restricted',
          watch: 'german',
          dashmpd: true,
          embed: true,
          player: 'player-en_US-vflV3n15C',
          get_video_info: true,
        });
        ytdl.getInfo(id, (err, info) => {
          assert.ifError(err);
          scope.done();
          assert.equal(info.formats.length, expectedInfo.formats.length);
          done();
        });
      });
    });
  });

  describe('From a video that was live streamed', () => {
    it('Returns correct video metainfo', (done) => {
      const id = 'nu5uzMXfuLc';
      const scope = nock(id, {
        type: 'streamed',
        player: 'player-vfleGnGfg',
        get_video_info: true,
      });
      ytdl.getInfo(id, (err, info) => {
        assert.ifError(err);
        scope.done();
        assert.equal(info.formats.length, 5);
        done();
      });
    });
  });

  describe('From a rental', () => {
    const id = 'SyKPsFRP_Oc';
    it('Returns an error about it', (done) => {
      const scope = nock(id, {
        type: 'rental',
        get_video_info: true,
      });
      ytdl.getInfo(id, (err) => {
        assert.ok(err);
        scope.done();
        assert.equal(err.message, 'This video requires payment to watch.');
        done();
      });
    });
  });

  describe('From a video that is not yet available', () => {
    const id = 'iC9YT-5aUhI';
    it('Returns an error', (done) => {
      const scope = nock(id, {
        type: 'unavailable',
        get_video_info: true,
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'This video is unavailable');
        done();
      });
    });
  });

  describe('With a bad video ID', () => {
    const id = 'bad';
    it('Returns an error', (done) => {
      ytdl.getInfo(id, (err) => {
        assert.ok(err);
        assert.equal(err.message, 'No video id found: bad');
        done();
      });
    });
  });

  describe('When there is an error requesting one of the pages', () => {
    it('Fails gracefully when unable to get watch page', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        statusCode: 500,
      });
      ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to find config', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'no-config',
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Could not find player config');
        done();
      });
    });

    it('Fails gracefully when unable to parse config', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-config',
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.ok(/Error parsing config:/.test(err.message));
        done();
      });
    });

    it('Fails gracefully when unable to get embed page', (done) => {
      const id = 'rIqCiJKWx9I';
      const scope = nock(id, {
        type: 'age-restricted',
        embed: [true, 500]
      });
      ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to get video info page', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        get_video_info: [true, 500]
      });
      ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when get video info page errors', (done) => {
      const id = 'iC9YT-5aUhI';
      const scope = nock(id, {
        type: 'unavailable',
        get_video_info: [true, 200, 'error']
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message,
          'Code 2: Watch this video on YouTube. ' +
          'Playback on other websites has been disabled by the video owner.');
        done();
      });
    });

    it('Fails gracefully when unable to get html5player tokens', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        get_video_info: true,
        player: [true, 500, 'player-vflppxuSE'],
      });
      ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to get m3u8 playlist', (done) => {
      const id = 'N4bU1i-XAxE';
      const scope = nock(id, {
        type: 'live',
        dashmpd: true,
        dashmpd2: true,
        m3u8: [true, 500],
        get_video_info: true,
        player: 'player-en_US-vfl5-0t5t',
      });
      ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when no formats are found', (done) => {
      const id = 'pJk0p-98Xzc';
      const scope = nock(id, {
        type: 'vevo',
        watch: 'no-formats',
        dashmpd: [true, 200, 'no-formats'],
        get_video_info: [true, 200, 'no-formats'],
        player: 'player-en_US-vflV3n15C',
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'No formats found');
        done();
      });
    });

    it('Fails gracefully when unable to parse player_response', (done) => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-player-response',
        get_video_info: true,
      });
      ytdl.getInfo(id, (err) => {
        scope.done();
        assert.ok(err);
        assert.ok(/Error parsing `player_response`:/.test(err.message));
        done();
      });
    });
  });

  describe('When encountering a format not yet known with debug', () => {
    it('Warns the console', (done) => {
      const warn = sinon.spy();
      muk(console, 'warn', warn);
      after(muk.restore);

      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        dashmpd: true,
        get_video_info: [true, 200, 'unknown-format'],
        player: 'player-vflppxuSE',
      });
      ytdl.getInfo(id, { debug: true}, (err, info) => {
        assert.ifError(err);
        scope.done();
        assert.ok(warn.called);
        assert.equal(warn.getCall(0).args[0],
          'No format metadata for itag 9999 found');
        assert.ok(info);
        done();
      });
    });
  });
});
