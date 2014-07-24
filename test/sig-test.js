var sig    = require('../lib/sig');
var assert = require('assert');
var fs     = require('fs');
var path   = require('path');

var html5player = require('./html5player.json');


describe('Signature decypher', function() {
  describe('extract decyphering actions', function() {
    it('Returns the correct set of actions', function() {
      for (var name in html5player) {
        var filepath = path.resolve(
          __dirname, 'files/html5player/html5player-' + name + '.js');
        var body = fs.readFileSync(filepath, 'utf8');
        var actions = sig.extractActions(body);
        assert.deepEqual(actions, html5player[name]);
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
      testDecipher(html5player['en_US-vfl0Cbn9e'],
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'bbSdefghijklmnoaqrstuvwxyzAZCDEFGHIJKLMNOPQRpTUVWc');
    });
  });
});
