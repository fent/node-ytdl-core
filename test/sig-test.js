var sig    = require('../lib/sig');
var assert = require('assert');
var fs     = require('fs');
var path   = require('path');

var html5playerfiles = {
  vfl0Cbn9e: ['w15', 'w44', 'r', 'w24', 's3', 'r', 'w2', 'w50'],
  vfl5aDZwb: ['w15', 'w44', 'r', 'w24', 's3', 'r', 'w2', 'w50'],
  vflqZIm5b: ['w1', 'w32', 's1', 'r', 's3', 'r', 's3', 'r'],
  vfl9FYC6l: ['w28', 'r', 'p1', 'w26', 'w40', 'r', 'p1'],
};


describe('Signature decypher', function() {
  describe('extract decyphering actions', function() {
    it('Returns the correct set of actions', function() {
      for (var name in html5playerfiles) {
        var filepath = path.resolve(
          __dirname, 'files/html5player/html5player-en_US-' + name + '.js');
        var body = fs.readFileSync(filepath, 'utf8');
        var actions = sig.extractActions(body);
        assert.deepEqual(actions, html5playerfiles[name]);
      }
    });
  });

  function testDecipher(tokens, input, expected) {
    var result = sig.decipher(tokens, input);
    assert.equal(result, expected);
  }

  describe('properly apply actions based on tokens', function() {
    it('reverses', function() {
      testDecipher(['r'], 'abcdefg', 'gfedcba');
    });

    it('swaps head and position', function() {
      testDecipher(['w2'], 'abcdefg', 'cbadefg');
      testDecipher(['w3'], 'abcdefg', 'dbcaefg');
      testDecipher(['w5'], 'abcdefg', 'fbcdeag');
    });

    it('slices', function() {
      testDecipher(['s3'], 'abcdefg', 'defg');
    });

    it('real set of tokens', function() {
      testDecipher(html5playerfiles.vfl0Cbn9e,
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'bbSdefghijklmnoaqrstuvwxyzAZCDEFGHIJKLMNOPQRpTUVWc');
    });
  });
});
