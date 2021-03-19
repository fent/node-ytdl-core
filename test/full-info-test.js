const ytdl = require('..');
const assert = require('assert-diff');
const nock = require('./nock');
const miniget = require('miniget');


describe('ytdl.getInfo()', () => {
  let minigetDefaults = miniget.defaultOptions;
  before(() => miniget.defaultOptions = Object.assign({}, minigetDefaults, { maxRetries: 0 }));
  after(() => miniget.defaultOptions = minigetDefaults);

  describe('After calling ytdl.getBasicInfo()', () => {
    it('Does not make extra requests', async() => {
      const id = '5qap5aO4i9A';
      const scope = nock(id, 'live-now');
      let info = Object.assign({}, await ytdl.getBasicInfo(id));
      let info2 = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.html5player);
      assert.notStrictEqual(info.formats.length, info2.formats.length);
      assert.notStrictEqual(info.formats[0].url, info2.formats[0].url);
    });
  });

  describe('Use `ytdl.downloadFromInfo()`', () => {
    it('Retrieves video file', done => {
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

  describe('When unable to find html5player', () => {
    it('Uses backup endpoint', async() => {
      const id = 'LuZu9N53Vd0';
      const scope = nock(id, 'use-backups', {
        watchHtml: [true, 200, body => body.replace(/"(player_ias\/base|jsUrl)"/g, '""')],
        watchJson: false,
        get_video_info: false,
        player: true,
      });
      let info = await ytdl.getInfo(id);
      scope.done();
      assert.ok(info.html5player);
      assert.ok(info.formats.length);
      assert.ok(info.formats[0].url);
    });
  });

  describe('Unable to find html5player anywhere', () => {
    it('Fails gracefully', async() => {
      const id = 'LuZu9N53Vd0';
      const scope = nock(id, 'use-backups', {
        watchHtml: [true, 200, body => body.replace(/"(player_ias\/base|jsUrl)"/g, '""')],
        embed: [true, 200, body => body.replace(/"(player_ias\/base|jsUrl)"/g, '""')],
        watchJson: false,
        get_video_info: false,
        player: false,
      });
      await assert.rejects(ytdl.getInfo(id), /Unable to find html5player file/);
      scope.done();
    });
  });
});
