const ytdl = require('..');
const path = require('path');
const assert = require('assert-diff');
const nock = require('./nock');
const sinon = require('sinon');
const spy = require('sinon').spy;
const muk = require('muk-prop');


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
        player: true,
      });

      let info = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.videoDetails.shortDescription.length);
      assert.strictEqual(info.formats.length, expectedInfo.formats.length);
    });

    describe('Use ytdl.getBasicInfo()', () => {
      it('Retrieves just enough metainfo', async() => {
        const scope = nock(id, {
          type: 'vevo',
        });

        let info = await ytdl.getBasicInfo(id);
        scope.done();
        assert.strictEqual(info.formats.length, expectedInfo.formats.length);
        assert.notEqual(info.formats[0].url, expectedInfo.formats[0].url);
      });

      describe('Followed by ytdl.getInfo()', () => {
        it('Does not make extra requests', async() => {
          const scope = nock(id, {
            type: 'vevo',
            player: true,
          });

          let info = await ytdl.getBasicInfo(id);
          assert.strictEqual(info.formats.length, expectedInfo.formats.length);
          assert.notEqual(info.formats[0].url, expectedInfo.formats[0].url);
          let info2 = await ytdl.getInfo(id);
          scope.done();
          assert.strictEqual(info2.formats[0].url, expectedInfo.formats[0].url);
        });
      });

      describe('Use `ytdl.downloadFromInfo()`', () => {
        it('Throw error', async() => {
          const scope = nock(id, {
            type: 'vevo',
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
          player: true,
          headers: { 'X-Hello': '42' },
        });

        await ytdl.getInfo(id, {
          requestOptions: { headers: { 'X-Hello': '42' } },
        });
        scope.done();
      });
    });

    describe('Called twice', () => {
      const testId = 'pJk0p-98Xzc';

      it('Makes requests once', async() => {
        const scope = nock(testId, {
          type: 'vevo',
          player: true,
        });

        let info1 = await ytdl.getInfo(testId);
        assert.ok(info1.videoDetails.shortDescription.length);
        assert.strictEqual(info1.formats.length, expectedInfo.formats.length);
        let info2 = await ytdl.getInfo(testId);
        scope.done();
        assert.strictEqual(info2, info1);
      });
    });

    describe('Using the callback API', () => {
      it('Retrieves correct metainfo, with a warning', done => {
        const scope = nock(id, {
          type: 'vevo',
          player: true,
        });

        const warn = spy();
        muk(console, 'warn', warn);
        after(muk.restore);

        ytdl.getInfo(id, (err, info) => {
          assert.ifError(err);
          scope.done();
          assert.ok(info.videoDetails.shortDescription.length);
          assert.strictEqual(info.formats.length, expectedInfo.formats.length);
          assert.ok(warn.called);
          done();
        });
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
        get_video_info: true,
        player: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, expectedInfo.formats.length);
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

    describe('When embed page returns limited `player_response`', () => {
      it('Uses get_vide_info as backup', async() => {
        const scope = nock(id, {
          type: 'age-restricted',
          embed: [true, 200, 'player-vars'],
          get_video_info: true,
          player: true,
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info.formats.length, expectedInfo.formats.length);
      });
    });
  });

  describe('From a video that was live streamed but not currently live', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'nu5uzMXfuLc';
      const scope = nock(id, {
        type: 'streamed',
        player: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, 10);
    });
  });

  describe('From a video that is not embeddable outside of YouTube', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'GFg8BP01F5Q';
      const scope = nock(id, {
        type: 'no-embed',
        player: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, 15);
    });
  });

  describe('With cookie headers', () => {
    describe('`x-youtube-identity-token` given', () => {
      it('Does not make extra request to watch page', async() => {
        const id = '99_Y8iEy95c';
        const scope = nock(id, {
          type: 'with-cookie',
          player: true,
          dashmpd: true,
        });
        let info = await ytdl.getInfo(id, {
          requestOptions: {
            headers: {
              cookie: 'abc=1',
              'x-youtube-identity-token': '1324',
            },
          },
        });
        scope.done();
        assert.ok(info.formats.length);
      });
      describe('With bad credentials', () => {
        it('Returns an error', async() => {
          const id = '99_Y8iEy95c';
          const scope = nock(id, {
            type: 'with-cookie',
            watch: 'reload-now',
          });
          await assert.rejects(ytdl.getInfo(id, {
            requestOptions: {
              headers: {
                cookie: 'abc=1',
                'x-youtube-identity-token': '1324',
              },
            },
          }), /but unable to retrieve video metadata/);
          scope.done();
        });
      });
    });
    describe('`x-youtube-identity-token` not given', () => {
      it('Retrieves identity-token from watch page', async() => {
        const id = '99_Y8iEy95c';
        const scope = nock(id, {
          type: 'with-cookie',
          watchHtml: true,
          player: true,
          dashmpd: true,
        });
        let info = await ytdl.getInfo(id, {
          requestOptions: {
            headers: { cookie: 'abc=1' },
          },
        });
        scope.done();
        assert.ok(info.formats.length);
      });

      describe('Called from a web browser with cookies in requests', () => {
        it('Tries to get identity-token from watch page', async() => {
          const id = '99_Y8iEy95c';
          const scope = nock(id, {
            type: 'with-cookie',
            watch: 'reload-now-2',
            watchHtml: true,
            player: true,
            dashmpd: true,
          });
          const scope2 = nock(id, {
            type: 'with-cookie',
          });
          let info = await ytdl.getInfo(id, {
            requestOptions: {
              // Assume cookie header is given by the browser.
              headers: {},
            },
          });
          scope.done();
          scope2.done();
          assert.ok(info.formats.length);
        });
      });

      describe('Unable to find token', () => {
        it('Returns an error', async() => {
          const id = '99_Y8iEy95c';
          const scope = nock(id, {
            type: 'with-cookie',
            noWatchJson: true,
            watchHtml: [true, 200, 'no-identity-token'],
          });
          await assert.rejects(ytdl.getInfo(id, {
            requestOptions: {
              headers: { cookie: 'abc=1' },
            },
          }), /unable to find YouTube identity token/);
          scope.done();
        });
      });
    });
    describe('`x-youtube-identity-token` already in cache', () => {
      it('Does not make extra request to watch page', async() => {
        ytdl.cache.cookie.set('abc=1', 'token!');
        const id = '99_Y8iEy95c';
        const scope = nock(id, {
          type: 'with-cookie',
          player: true,
          dashmpd: true,
        });
        let info = await ytdl.getInfo(id, {
          requestOptions: {
            headers: {
              cookie: 'abc=1',
            },
          },
        });
        scope.done();
        assert.ok(info.formats.length);
      });
    });
  });

  describe('With a bad video ID', () => {
    it('Returns an error', () => {
      const id = 'bad';
      assert.throws(() => {
        ytdl.getInfo(id);
      }, /No video id found: bad/);
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

    it('Fails gracefully when unable to parse watch page config', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-config',
      });
      await assert.rejects(ytdl.getInfo(id), /Error parsing info:/);
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

    it('Fails gracefully when unable to parse `player_response`', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, {
        type: 'regular',
        watch: 'bad-player-response',
      });
      await assert.rejects(
        ytdl.getInfo(id),
        /Error parsing `player_response`:/,
      );
      scope.done();
    });
  });
});
