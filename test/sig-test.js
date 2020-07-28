const sig = require('../lib/sig');
const assert = require('assert-diff');
const fs = require('fs');
const path = require('path');
const nock = require('./nock');

const html5player = require('./html5player.json');


describe('Get tokens', () => {
  const key = 'en_US-vfljDEtYP';
  const url = 'https://s.ytimg.com/yts/jsbin/player-en_US-vfljDEtYP/base.js';
  const filepath = path.resolve(__dirname, `files/html5player/${key}.js`);

  it('Returns a set of tokens', async() => {
    const scope = nock.url(url).replyWithFile(200, filepath);
    let tokens = await sig.getTokens(url, {});
    scope.done();
    assert.ok(tokens.length);
  });

  describe('Hit the same video twice', () => {
    it('Gets html5player tokens from cache', async() => {
      const scope = nock.url(url).replyWithFile(200, filepath);
      let tokens = await sig.getTokens(url, {});
      scope.done();
      assert.ok(tokens.length);
      let tokens2 = await sig.getTokens(url, {});
      assert.ok(tokens2.length);
    });
  });

  describe('Get a bad html5player file', () => {
    it('Gives an error', async() => {
      const testUrl = 'https://s.ytimg.com/yts/jsbin/player-en_US-bad/base.js';
      const scope = nock.url(testUrl).reply(404, 'uh oh');
      await assert.rejects(sig.getTokens(testUrl, {}));
      scope.done();
    });
  });

  describe('Unable to find tokens', () => {
    const testKey = 'mykey';
    const testUrl = `https://s.ytimg.com/yts/jsbin/player-${testKey}/base.js`;
    const contents = 'my personal contents';

    it('Gives an error', async() => {
      const scope = nock.url(testUrl).reply(200, contents);
      await assert.rejects(sig.getTokens(testUrl, {}), /Could not extract signature/);
      scope.done();
    });
  });
});

describe('Signature decipher', () => {
  describe('extract deciphering actions', () => {
    it('Returns the correct set of actions', done => {
      let total = 0;
      for (let name in html5player) {
        total++;
        fs.readFile(path.resolve(__dirname, `files/html5player/${name}.js`),
          'utf8', (err, body) => {
            assert.ifError(err);
            const actions = sig.extractActions(body);
            assert.deepEqual(actions, html5player[name]);
            if (--total === 0) {
              done();
            }
          });
      }
    });
  });

  const testDecipher = (tokens, input, expected) => {
    const result = sig.decipher(tokens, input);
    assert.strictEqual(result, expected);
  };

  describe('properly apply actions based on tokens', () => {
    it('reverses', () => {
      testDecipher(['r'], 'abcdefg', 'gfedcba');
    });

    it('swaps head and position', () => {
      testDecipher(['w2'], 'abcdefg', 'cbadefg');
      testDecipher(['w3'], 'abcdefg', 'dbcaefg');
      testDecipher(['w5'], 'abcdefg', 'fbcdeag');
    });

    it('slices', () => {
      testDecipher(['s3'], 'abcdefg', 'defg');
    });

    it('real set of tokens', () => {
      testDecipher(html5player['en_US-vfl0Cbn9e'],
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'bbSdefghijklmnoaqrstuvwxyzAZCDEFGHIJKLMNOPQRpTUVWc');
    });
  });
});

describe('Set download URL', () => {
  it('Adds signature to download URL', () => {
    const format = {
      fallback_host: 'tc.v9.cache7.googlevideo.com',
      quality: 'small',
      type: 'video/x-flv',
      itag: '5',
      // eslint-disable-next-line max-len
      url: 'https://r4---sn-p5qlsnsr.googlevideo.com/videoplayback?nh=IgpwZjAxLmlhZDI2Kgw3Mi4xNC4yMDMuOTU&upn=utAH1aBebVk&source=youtube&sparams=cwbhb%2Cdur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Crequiressl%2Csource%2Cupn%2Cexpire&initcwndbps=772500&pl=16&ip=0.0.0.0&lmt=1309008098017854&key=yt6&id=o-AJj1D_OYO_EieAH08Qa2tRsP6zid9dsuPAvktizyDRlv&expire=1444687469&mm=31&mn=sn-p5qlsnsr&itag=5&mt=1444665784&mv=m&cwbhb=yes&fexp=9408208%2C9408490%2C9408710%2C9409069%2C9414764%2C9415435%2C9416126%2C9417224%2C9417380%2C9417488%2C9417707%2C9418448%2C9418494%2C9419445%2C9419802%2C9420324%2C9420348%2C9420982%2C9421013%2C9421170%2C9422341%2C9422540&ms=au&sver=3&dur=298.109&requiressl=yes&ipbits=0&mime=video%2Fx-flv&ratebypass=yes',
      container: 'flv',
      resolution: '240p',
      encoding: 'Sorenson H.283',
      profile: null,
      bitrate: '0.25',
      audioEncoding: 'mp3',
      audioBitrate: 64,
    };
    sig.setDownloadURL(format, 'mysiggy', false);
    assert.ok(format.url.indexOf('signature=mysiggy') > -1);
  });

  describe('With a badly formatted URL', () => {
    const format = {
      url: 'https://r4---sn-p5qlsnsr.googlevideo.com/videoplayback?%',
    };

    it('Does not set URL', () => {
      sig.setDownloadURL(format, 'mysiggy', false);
      assert.ok(format.url.indexOf('signature=mysiggy') === -1);
    });
  });

  describe('Without a URL', () => {
    it('Does not set URL', () => {
      const format = { bla: 'blu' };
      sig.setDownloadURL(format, 'nothing', false);
      assert.deepEqual(format, { bla: 'blu' });
    });
  });
});
