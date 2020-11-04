const ytdl = require('..');
const assert = require('assert-diff');
const nock = require('./nock');
const sinon = require('sinon');
const miniget = require('miniget');


describe('ytdl.getInfo()', () => {
  let expectedInfo;
  before(() => expectedInfo = require('./files/videos/regular/expected-info.json'));
  let minigetDefaults = miniget.Defaults;
  before(() => miniget.Defaults = Object.assign({}, minigetDefaults, { maxRetries: 0 }));
  after(() => miniget.Defaults = minigetDefaults);

  describe('From a regular video', () => {
    it('Retrieves correct metainfo', async() => {
      const id = '_HSylqgVYQI';
      const scope = nock(id, 'regular');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.videoDetails.shortDescription.length);
      assert.strictEqual(info.formats.length, expectedInfo.formats.length);
    });

    describe('Use ytdl.getBasicInfo()', () => {
      const id = '5qap5aO4i9A';
      it('Retrieves just enough metainfo', async() => {
        const expectedInfo2 = require('./files/videos/live-now/expected-info.json');
        const scope = nock(id, 'live-now', {
          watchHtml: false,
          player: false,
          dashmpd: false,
          m3u8: false,
        });
        let info = await ytdl.getBasicInfo(id);
        scope.done();
        assert.notStrictEqual(info.formats.length, expectedInfo2.formats.length);
      });

      describe('Followed by ytdl.getInfo()', () => {
        it('Does not make extra requests', async() => {
          const scope = nock(id, 'live-now');
          let info = Object.assign({}, await ytdl.getBasicInfo(id));
          let info2 = await ytdl.getInfo(id);
          scope.done();
          assert.notStrictEqual(info.formats.length, info2.formats.length);
          assert.notStrictEqual(info.formats[0].url, info2.formats[0].url);
        });
      });

      describe('Use `ytdl.downloadFromInfo()`', () => {
        it('Throw error', async() => {
          const scope = nock(id, 'regular', {
            watchHtml: false,
            player: false,
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
        afterEach(() => { clock.restore(); });

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
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          headers: { 'X-Hello': '42' },
        });

        await ytdl.getInfo(id, {
          requestOptions: { headers: { 'X-Hello': '42' } },
        });
        scope.done();
      });
    });

    describe('Called twice', () => {
      it('Makes requests once', async() => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular');
        let info1 = await ytdl.getInfo(id);
        assert.ok(info1.videoDetails.shortDescription.length);
        assert.strictEqual(info1.formats.length, expectedInfo.formats.length);
        let info2 = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info2, info1);
      });
    });
  });

  describe('From a non-existant video', () => {
    const id = '99999999999';

    it('Should give an error', async() => {
      const scope = nock(id, 'non-existent');
      await assert.rejects(ytdl.getInfo(id), /Video unavailable/);
      scope.done();
    });
  });

  describe('From an age restricted video', () => {
    const id = 'LuZu9N53Vd0';
    let expected;
    before(() => expected = require('./files/videos/age-restricted/expected-info.json'));

    it('Returns correct video metainfo', async() => {
      const scope = nock(id, 'age-restricted');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, expected.formats.length);
      assert.ok(info.videoDetails.age_restricted);
    });

    describe('Unable to find config', () => {
      it('Fails gracefully', async() => {
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'no-config'],
          player: false,
          get_video_info: false,
        });
        await assert.rejects(ytdl.getInfo(id), /Could not find player config/);
        scope.done();
      });
    });

    describe('When embed page returns limited `player_response`', () => {
      it('Uses backup `get_vide_info`', async() => {
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'player-vars'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info.formats.length, expected.formats.length);
      });
    });
  });

  describe('From a video that was live streamed but not currently live', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'nu5uzMXfuLc';
      const scope = nock(id, 'live-past');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, 10);
    });
  });

  describe('From a video that is not embeddable outside of YouTube', () => {
    it('Returns correct video metainfo', async() => {
      const id = 'GFg8BP01F5Q';
      const scope = nock(id, 'no-embed');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, 15);
    });
  });

  describe('From a video that includes subtitles in DASH playlist', () => {
    it('Does not include subtitle formats in formats list', async() => {
      const id = '21X5lGlDOfg';
      const scope = nock(id, 'live-with-cc');
      let info = await ytdl.getInfo(id);
      scope.done();
      for (let format of info.formats) {
        assert.strictEqual(typeof format.itag, 'number');
      }
    });
  });

  describe('With cookie headers', () => {
    const id = '_HSylqgVYQI';
    describe('`x-youtube-identity-token` given', () => {
      it('Does not make extra request to watch page', async() => {
        const scope = nock(id, 'regular');
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
    });
    describe('`x-youtube-identity-token` not given', () => {
      it('Retrieves identity-token from watch page', async() => {
        const scope = nock(id, 'regular', {
          watchHtml: [true, 200, 'with-cookie'],
        });
        let info = await ytdl.getInfo(id, {
          requestOptions: {
            headers: { cookie: 'abc=1' },
          },
        });
        scope.done();
        assert.ok(info.formats.length);
      });

      describe('Unable to find token', () => {
        it('Returns an error', async() => {
          const scope = nock(id, 'regular', {
            watchJson: false,
            player: false,
          });
          await assert.rejects(ytdl.getInfo(id, {
            requestOptions: {
              headers: { cookie: 'abc=1' },
            },
          }), /unable to find YouTube identity token/);
          scope.done();
        });
      });

      describe('Called from a web browser with cookies in requests', () => {
        it('Tries to get identity-token from watch page', async() => {
          const scope = nock(id, 'regular', {
            watchJson: [true, 200, 'reload-now-2'],
            player: false,
          });
          const scope2 = nock(id, 'regular', {
            watchHtml: false,
          });
          let info = await ytdl.getInfo(id, {
            requestOptions: {
              // Assume cookie header is given by the browser.
              headers: {},
              maxRetries: 1,
              backoff: { inc: 0 },
            },
          });
          scope.done();
          scope2.done();
          assert.ok(info.formats.length);
        });
      });
    });
    describe('`x-youtube-identity-token` already in cache', () => {
      it('Does not make extra request to watch page', async() => {
        ytdl.cache.cookie.set('abc=1', 'token!');
        const scope = nock(id, 'regular', {
          watchHtml: false,
          player: false,
        });
        let info = await ytdl.getBasicInfo(id, {
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

  describe('From a video with a cipher', () => {
    it('Retrieves deciphered video formats', async() => {
      const id = 'B3eAMGXFw1o';
      const scope = nock(id, 'cipher');
      let info = await ytdl.getBasicInfo(id);
      assert.ok(info);
      assert.ok(info.formats && info.formats.length);
      assert.ok(info.formats.some(format => format.signatureCipher));
      info = await ytdl.getInfo(id);
      assert.ok(info.formats.every(format => !format.signatureCipher));
      assert.ok(info.formats.every(format => format.url));
      scope.done();
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

  describe('When there is a recoverable error', () => {
    describe('From a video that does not have `player_response` object', () => {
      it('Uses backup `playerResponse`', async() => {
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          watchJson: [true, 200, 'no-player-response'],
          get_video_info: [true, 200, 'no-player-response'],
          player: false,
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info.videoDetails.title);
      });
    });

    describe('When unable to find html5player', () => {
      it('Uses backup html5player', async() => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchHtml: [true, 200, 'no-html5player'],
          player: true,
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info.html5player);
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });
    });
  });

  describe('When there is an error', () => {
    describe('With a private video', () => {
      it('Fails gracefully', async() => {
        const id = 'z2jeHsa0UG0';
        const scope = nock(id, 'private');
        await assert.rejects(ytdl.getInfo(id), /private video/);
        scope.done();
      });
    });

    describe('Unable to parse watch page config', () => {
      it('Fails gracefully', async() => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: [true, 200, 'bad-config'],
          watchHtml: false,
          player: false,
        });
        await assert.rejects(ytdl.getInfo(id), /Error parsing watch\.json:/);
        scope.done();
      });
    });

    describe('Unable to parse embed config', () => {
      it('Fails gracefully', async() => {
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'bad-config'],
          get_video_info: false,
          player: false,
        });
        await assert.rejects(ytdl.getInfo(id), /Error parsing embed config:/);
        scope.done();
      });
    });

    describe('When watch page gives back `{"reload":"now"}`', () => {
      it('Retries the request before error', async() => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchJson: [true, 200, 'reload-now'],
          watchHtml: false,
          player: false,
        });
        const scope2 = nock(id, 'regular', {
          watchJson: [true, 200, 'reload-now'],
          player: false,
        });
        await assert.rejects(ytdl.getInfo(id, {
          requestOptions: {
            maxRetries: 1,
            backoff: { inc: 0 },
          },
        }), /Error: Unable to retrieve video metadata/);
        scope.done();
        scope2.done();
      });
    });
  });
});
