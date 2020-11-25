const ytdl = require('..');
const assert = require('assert-diff');
const nock = require('./nock');
const sinon = require('sinon');
const miniget = require('miniget');


describe('ytdl.getInfo()', () => {
  let minigetDefaults = miniget.defaultOptions;
  before(() => miniget.defaultOptions = Object.assign({}, minigetDefaults, { maxRetries: 0 }));
  after(() => miniget.defaultOptions = minigetDefaults);

  describe('From a regular video', () => {
    it('Retrieves correct metainfo', async() => {
      const expected = require('./files/videos/regular/expected-info.json');
      const id = '_HSylqgVYQI';
      const scope = nock(id, 'regular');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.videoDetails.shortDescription.length);
      assert.strictEqual(info.formats.length, expected.formats.length);
    });

    describe('Use ytdl.getBasicInfo()', () => {
      const id = '5qap5aO4i9A';
      it('Retrieves just enough metainfo', async() => {
        const expected = require('./files/videos/live-now/expected-info.json');
        const scope = nock(id, 'live-now', {
          watchHtml: false,
          player: false,
          dashmpd: false,
          m3u8: false,
        });
        let info = await ytdl.getBasicInfo(id);
        scope.done();
        assert.notStrictEqual(info.formats.length, expected.formats.length);
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

        const expected = require('./files/videos/regular/expected-info.json');
        const stream = ytdl.downloadFromInfo(expected);
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
        const expected = require('./files/videos/regular/expected-info.json');
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular');
        let info1 = await ytdl.getInfo(id);
        assert.ok(info1.videoDetails.shortDescription.length);
        assert.strictEqual(info1.formats.length, expected.formats.length);
        let info2 = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info2, info1);
      });
    });
  });

  describe('From an age restricted video', () => {
    it('Returns correct video metainfo', async() => {
      const expected = require('./files/videos/age-restricted/expected-info.json');
      const id = 'LuZu9N53Vd0';
      const scope = nock(id, 'age-restricted');
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.strictEqual(info.formats.length, expected.formats.length);
      assert.ok(info.videoDetails.age_restricted);
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

  describe('From videos without formats', () => {
    describe('Rental video', () => {
      it('Gets video details', async() => {
        const id = 'SyKPsFRP_Oc';
        const scope = nock(id, 'rental');
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info);
        assert.ok(info.videoDetails);
        assert.ok(info.videoDetails.title);
      });
    });
    describe('Not yet broadcasted', () => {
      it('Gets video details', async() => {
        const id = 'VIBFo3Ti5vQ';
        const scope = nock(id, 'live-future');
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info);
        assert.ok(info.videoDetails);
        assert.ok(info.videoDetails.title);
      });
    });
  });

  describe('With cookie headers', () => {
    const id = '_HSylqgVYQI';
    describe('`x-youtube-identity-token` given', () => {
      it('Does not make extra request to watch.html page', async() => {
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
      it('Retrieves identity-token from watch.html page', async() => {
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
        it('Tries to get identity-token from watch.html page', async() => {
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
      it('Does not make extra request to watch.html page', async() => {
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

  describe('When there is a recoverable error', () => {
    describe('Unable to find config', () => {
      it('Uses backup get_video_info and watch.html page', async() => {
        const expected = require('./files/videos/age-restricted/expected-info.json');
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'no-config'],
          watchHtml: [true, 200, 'backup'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info.formats.length, expected.formats.length);
      });
    });

    describe('When embed page returns limited `player_response`', () => {
      it('Uses backup get_video_info page', async() => {
        const expected = require('./files/videos/age-restricted/expected-info.json');
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'player-vars'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.strictEqual(info.formats.length, expected.formats.length);
      });
    });
    describe('From a video that does not have `player_response` object', () => {
      it('Uses backup `playerResponse` from watch.json page', async() => {
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

    describe('Unable to parse watch.json page config', () => {
      it('Uses backup watch.html page', async() => {
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          watchJson: [true, 200, 'bad-config'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info.html5player);
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });
    });

    describe('Unable to parse embed config', () => {
      it('Uses backup get_video_info page', async() => {
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          embed: [true, 200, 'bad-config'],
          watchHtml: [true, 200, 'backup'],
        });
        let info = await ytdl.getInfo(id);
        scope.done();
        assert.ok(info.html5player);
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });
    });

    describe('When watch.json page gives back `{"reload":"now"}`', () => {
      it('Retries the request', async() => {
        const id = '_HSylqgVYQI';
        const scope1 = nock(id, 'regular', {
          watchJson: [true, 200, 'reload-now'],
        });
        const scope2 = nock(id, 'regular', {
          watchHtml: false,
          player: false,
        });
        let info = await ytdl.getInfo(id, { requestOptions: { maxRetries: 1 } });
        scope1.done();
        scope2.done();
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });

      describe('Too many times', () => {
        it('Uses backup embed.html page', async() => {
          const id = 'LuZu9N53Vd0';
          const scope = nock(id, 'age-restricted', {
            watchJson: [true, 200, 'reload-now'],
          });
          const scope2 = nock(id, 'age-restricted', {
            watchJson: [true, 200, 'reload-now'],
            embed: false,
            get_video_info: false,
            player: false,
          });
          let info = await ytdl.getInfo(id, {
            requestOptions: {
              maxRetries: 1,
              backoff: { inc: 0 },
            },
          });
          scope.done();
          scope2.done();
          assert.ok(info.html5player);
          assert.ok(info.formats.length);
          assert.ok(info.formats[0].url);
          assert.ok(!info.videoDetails.age_restricted);
        });
      });
    });

    describe('When watch.json page gives back an empty response', () => {
      it('Retries the request', async() => {
        const id = '_HSylqgVYQI';
        const scope1 = nock(id, 'regular', {
          watchJson: [true, 200, 'empty'],
        });
        const scope2 = nock(id, 'regular', {
          watchHtml: false,
          player: false,
        });
        let info = await ytdl.getInfo(id, { requestOptions: { maxRetries: 1 } });
        scope1.done();
        scope2.done();
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });
    });

    describe('When an endpoint gives back a 500 server error', () => {
      it('Retries the request', async() => {
        const id = '_HSylqgVYQI';
        const scope1 = nock(id, 'regular', {
          watchJson: [true, 502],
        });
        const scope2 = nock(id, 'regular', {
          watchHtml: false,
          player: false,
        });
        let info = await ytdl.getInfo(id, { requestOptions: { maxRetries: 1 } });
        scope1.done();
        scope2.done();
        assert.ok(info.formats.length);
        assert.ok(info.formats[0].url);
      });

      describe('Too many times', () => {
        it('Uses the next endpoint as backup', async() => {
          const id = 'LuZu9N53Vd0';
          const scope = nock(id, 'age-restricted', {
            watchJson: [true, 502],
          });
          let info = await ytdl.getInfo(id);
          scope.done();
          assert.ok(info.html5player);
          assert.ok(info.formats.length);
          assert.ok(info.formats[0].url);
          assert.ok(!info.videoDetails.age_restricted);
        });
      });
    });
  });

  describe('When there is an unrecoverable error', () => {
    describe('With a private video', () => {
      it('Fails gracefully', async() => {
        const id = 'z2jeHsa0UG0';
        const scope = nock(id, 'private');
        await assert.rejects(ytdl.getInfo(id, { requestOptions: { maxRetries: 1 } }), /private video/);
        scope.done();
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

    describe('With a bad video ID', () => {
      it('Returns an error', () => {
        const id = 'bad';
        assert.throws(() => {
          ytdl.getInfo(id);
        }, /No video id found: bad/);
      });
    });

    describe('Unable to find html5player anywhere', () => {
      it('Fails gracefully', async() => {
        const id = '_HSylqgVYQI';
        const scope = nock(id, 'regular', {
          watchHtml: [true, 200, 'no-html5player-2'],
          player: false,
        });
        await assert.rejects(ytdl.getInfo(id), /Unable to find html5player file/);
        scope.done();
      });
    });

    describe('No endpoint works', () => {
      it('Fails gracefully', async() => {
        const id = 'LuZu9N53Vd0';
        const scope = nock(id, 'age-restricted', {
          watchJson: [true, 500],
          embed: [true, 500],
          get_video_info: [true, 500],
          player: false,
        });
        await assert.rejects(ytdl.getInfo(id, {
          requestOptions: { maxRetries: 0 },
        }), /Status code: 500/);
        scope.done();
      });
    });
  });
});
