const sig = require('../lib/sig');
const assert = require('assert-diff');
const path = require('path');
const nock = require('./nock');

describe('Get functions', () => {
  const key = 'en_US-vflset-387dfd49';
  const url = 'https://www.youtube.com/s/player/387dfd49/player_ias.vflset/en_US/base.js';
  const filepath = path.resolve(__dirname, `files/html5player/${key}.js`);

  it('Returns a set of functions', async() => {
    const scope = nock.url(url).replyWithFile(200, filepath);
    let tokens = await sig.getFunctions(url, {});
    scope.done();
    assert.ok(tokens.length);
  });

  describe('Hit the same video twice', () => {
    it('Gets html5player tokens from cache', async() => {
      const scope = nock.url(url).replyWithFile(200, filepath);
      let functions = await sig.getFunctions(url, {});
      scope.done();
      assert.ok(functions.length);
      let functions2 = await sig.getFunctions(url, {});
      assert.ok(functions2.length);
    });
  });

  describe('Get a bad html5player file', () => {
    it('Gives an error', async() => {
      const testUrl = 'https://s.ytimg.com/yts/jsbin/player-en_US-bad/base.js';
      const scope = nock.url(testUrl).reply(404, 'uh oh');
      await assert.rejects(sig.getFunctions(testUrl, {}));
      scope.done();
    });
  });

  describe('Unable to find functions', () => {
    const testKey = 'mykey';
    const testUrl = `https://s.ytimg.com/yts/jsbin/player-${testKey}/base.js`;
    const contents = 'my personal contents';

    it('Gives an error', async() => {
      const scope = nock.url(testUrl).reply(200, contents);
      await assert.rejects(sig.getFunctions(testUrl, {}), /Could not extract functions/);
      scope.done();
    });
  });
});
