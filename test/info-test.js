const ytdl = require('..');
const path = require('path');
const assert = require('assert-diff');
const nock = require('./nock');
const sinon = require('sinon');


describe('ytdl.getInfo()', () => {
  describe('From a regular video', () => {
    const id = 'pJk0p-98Xzc';
    let expectedInfo;
    before(() => {
      expectedInfo = require(path.resolve(__dirname, `files/videos/vevo/expected-info.json`));
    });

    it('Retrieves correct metainfo', async() => {
      const scope = nock(id, {
        type: 'vevo',
        get_video_info: true,
        player: true,
      });

      let info = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.videoDetails.shortDescription.length);
      assert.equal(info.formats.length, expectedInfo.formats.length);
    });

    describe('Use ytdl.getBasicInfo()', () => {
      it('Retrieves just enough metainfo', async() => {
        const scope = nock(id, {
          type: 'vevo',
          get_video_info: true,
        });

        let info = await ytdl.getBasicInfo(id);
        scope.done();
        assert.equal(info.formats.length, expectedInfo.formats.length);
        assert.notEqual(info.formats[0].url, expectedInfo.formats[0].url);
      });

      describe('Followed by ytdl.getInfo()', () => {
        it('Does not make extra requests', async() => {
          const scope = nock(id, {
            type: 'vevo',
            get_video_info: true,
            player: true,
          });

          let info = await ytdl.getBasicInfo(id);
          assert.equal(info.formats.length, expectedInfo.formats.length);
          assert.notEqual(info.formats[0].url, expectedInfo.formats[0].url);
          let info2 = await ytdl.getInfo(id);
          scope.done();
          assert.equal(info2.formats[0].url, expectedInfo.formats[0].url);
        });
      });

      describe('Use `ytdl.downloadFromInfo()`', () => {
        it('Throw error', async() => {
          const scope = nock(id, {
            type: 'vevo',
            get_video_info: true,
          });

          let info = await ytdl.getBasicInfo(id);
          scope.done();
          assert.throws(() => {
            ytdl.downloadFromInfo(info);
          }, /Cannot use/);
        });
      });
    });

    describe('Use `ytdl.downloadFromInfo()`', () => {
      it('Retrieves video file', done => {
        let clock = sinon.useFakeTimers({ toFake: ['setTimeout'] });
        after(() => { clock.restore(); });

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
      it('Request gets called with more headers', async() => {
        const scope = nock(id, {
          type: 'vevo',
          get_video_info: true,
          player: true,
          headers: { 'X-Hello': '42' },
        });

        await ytdl.getInfo(id, {
          requestOptions: { headers: { 'X-Hello': '42' } },
        });
        scope.done();
      });
    });

    describe('Using the promise API', () => {
      it('Retrieves correct metainfo', done => {
        const scope = nock(id, {
          type: 'vevo',
          get_video_info: true,
          player: true,
        });

        ytdl.getInfo(id)
          .then(info => {
            scope.done();
            assert.ok(info.videoDetails.shortDescription.length);
            assert.equal(info.formats.length, expectedInfo.formats.length);
            done();
          })
          .catch(done);
      });

      describe('On a video that fails', () => {
        const testId = '99999999999';

        it('Error is caught', done => {
          const scope = nock(testId, { type: 'non-existent' });
          const p = ytdl.getInfo(testId);
          p.catch(err => {
            scope.done();
            assert.ok(err);
            assert.equal(err.message, 'Video unavailable');
            done();
          });
        });
      });
    });

    describe('Using the callback API', () => {
      it('Retrieves correct metainfo', done => {
        const scope = nock(id, {
          type: 'vevo',
          get_video_info: true,
          player: true,
        });

        ytdl.getInfo(id, (err, info) => {
          assert.ifError(err);
          scope.done();
          assert.ok(info.videoDetails.shortDescription.length);
          assert.equal(info.formats.length, expectedInfo.formats.length);
          done();
        });
      });

      describe('On a video that fails', () => {
        const testId = '99999999999';

        it('Error is caught', done => {
          const scope = nock(testId, { type: 'non-existent' });
          ytdl.getInfo(testId, err => {
            scope.done();
            assert.ok(err);
            assert.equal(err.message, 'Video unavailable');
            done();
          });
        });
      });
    });

    describe('Called twice', () => {
      const testId = 'pJk0p-98Xzc';

      it('Makes requests once', async() => {
        const scope = nock(testId, {
          type: 'vevo',
          get_video_info: true,
          player: true,
        });

        let info1 = await ytdl.getInfo(testId);
        assert.ok(info1.videoDetails.shortDescription.length);
        assert.equal(info1.formats.length, expectedInfo.formats.length);
        let info2 = await ytdl.getInfo(testId);
        scope.done();
        assert.equal(info2, info1);
      });
    });
  });

  describe('From a non-existant video', () => {
    const id = '99999999999';

    it('Should give an error', async() => {
      const scope = nock(id, { type: 'non-existent' });
      await assert.rejects(ytdl.getInfo(id), /Video unavailable/);
      scope.done();
    });
  });

  describe('From an age restricted video', () => {
    const id = 'rIqCiJKWx9I';
    const expectedInfo = require(`./files/videos/age-restricted/expected-info.json`);

    it('Returns correct video metainfo', async() => {
      const scope = nock(id, {
        type: 'age-restricted',
        embed: true,
        player: true,
        get_video_info: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.equal(info.formats.length, expectedInfo.formats.length);
      assert.ok(info.videoDetails.age_restricted);
    });

    it('Fails gracefully when unable to find config', async() => {
      const scope = nock(id, {
        type: 'age-restricted',
        embed: [true, 200, 'no-config'],
      });
      await assert.rejects(ytdl.getInfo(id), /Could not find player config/);
      scope.done();
    });
  });

  describe('From a video that was live streamed but not currently live', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'nu5uzMXfuLc';
      const scope = nock(id, {
        type: 'streamed',
        player: true,
        get_video_info: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.equal(info.formats.length, 10);
    });
  });

  describe('From a video that is not embeddable outside of YouTube', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'GFg8BP01F5Q';
      const scope = nock(id, {
        type: 'no-embed',
        player: true,
        get_video_info: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.equal(info.formats.length, 15);
    });
  });

  describe('With a bad video ID', () => {
    const id = 'bad';
    it('Returns an error', async() => {
      await assert.rejects(ytdl.getInfo(id), /No video id found: bad/);
    });
  });

  describe('When there is an error', () => {
    describe('From a video that does not have `player_response` object', () => {
      it('Uses backup `playerResponse`', async() => {
        const id = 'pJk0p-98Xzc';
        const scope = nock(id, {
          type: 'vevo',
          watch: 'no-player-response',
          get_video_info: [true, 200, 'no-player-response'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info.videoDetails.title);
      });
    });

    describe('With a private video', () => {
      it('Fails gracefully', async() => {
        const id = 'z2jeHsa0UG0';
        const scope = nock(id, {
          type: 'private',
          embed: true,
        });
        await assert.rejects(ytdl.getInfo(id), /private video/);
        scope.done();
      });
    });

    it('Fails gracefully when unable to get watch page', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        statusCode: 500,
      });
      await assert.rejects(
        ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }),
        /Status code: 500/,
      );
      scope.done();
    });

    it('Fails gracefully when unable to parse watch page config', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-config',
      });
      await assert.rejects(ytdl.getInfo(id), /Error parsing info:/);
      scope.done();
    });

    it('Fails gracefully when unable to get embed page', async() => {
      const id = 'rIqCiJKWx9I';
      const scope = nock(id, {
        type: 'age-restricted',
        embed: [true, 500],
      });
      await assert.rejects(
        ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }),
        /Status code: 500/,
      );
      scope.done();
    });

    it('Fails gracefully when unable to parse embed config', async() => {
      const id = 'rIqCiJKWx9I';
      const scope = nock(id, {
        type: 'age-restricted',
        embed: [true, 200, 'bad-config'],
      });
      await assert.rejects(ytdl.getInfo(id), /Error parsing config:/);
      scope.done();
    });

    it('Fails gracefully when unable to get video info page', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        get_video_info: [true, 500],
      });
      await assert.rejects(
        ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }),
        /Status code: 500/,
      );
      scope.done();
    });

    it('Fails gracefully when get video info page errors', async() => {
      const id = 'pJk0p-98Xzc';
      const scope = nock(id, {
        type: 'vevo',
        watch: 'no-formats',
        get_video_info: [true, 200, 'error'],
      });
      await assert.rejects(
        ytdl.getInfo(id),
        /Playback on other websites has been disabled by the video owner./,
      );
      scope.done();
    });

    it('Fails gracefully when unable to get html5player tokens', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        get_video_info: true,
        player: [true, 500],
      });
      await assert.rejects(
        ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }),
        /Status code: 500/,
      );
      scope.done();
    });

    it('Fails gracefully when unable to get m3u8 playlist', async() => {
      const id = '5qap5aO4i9A';
      const scope = nock(id, {
        type: 'live',
        dashmpd: true,
        m3u8: [true, 500],
        get_video_info: true,
        player: true,
      });
      await assert.rejects(
        ytdl.getInfo(id, { requestOptions: { maxRetries: 0 } }),
        /Status code: 500/,
      );
      scope.done();
    });

    it('Fails gracefully when unable to parse `player_response`', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-player-response',
        get_video_info: true,
      });
      await assert.rejects(
        ytdl.getInfo(id),
        /Error parsing `player_response`:/,
      );
      scope.done();
    });
  });
});
