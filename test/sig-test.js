var sig    = require('../lib/sig');
var assert = require('assert');
var fs     = require('fs');
var path   = require('path');

var file1 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-en_US-vfl0Cbn9e.js'), 'utf8');
var file2 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-en_US-vfl5aDZwb.js'), 'utf8');


describe('Signature decypher', function() {
  var tokens1 = ['w15', 'w44', 'r', 'w24', 's3', 'r', 'w2', 'w50'];
  var tokens2 = ['w15', 'w44', 'r', 'w24', 's3', 'r', 'w2', 'w50'];

  describe('extract decyphering actions', function() {
    it('Returns the correct set of actions', function() {
      var actions;
      actions = sig.extractActions(file1);
      assert.deepEqual(actions, tokens1);
      actions = sig.extractActions(file2);
      assert.deepEqual(actions, tokens2);
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
      testDecipher(tokens1,
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'bbSdefghijklmnoaqrstuvwxyzAZCDEFGHIJKLMNOPQRpTUVWc');
    });
  });
});
