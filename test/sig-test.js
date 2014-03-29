var sig    = require('../lib/sig');
var assert = require('assert');
var fs     = require('fs');
var path   = require('path');

var file1 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-vfl66X2C5.js'), 'utf8');
var file2 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-vflveGye9.js'), 'utf8');
var file3 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-vflG49soT.js'), 'utf8');
var file4 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-vflcY_8N0.js'), 'utf8');
var file5 = fs.readFileSync(path.resolve(
  __dirname, 'files/html5player/html5player-en_US-vflnwMARr.js'), 'utf8');


describe('Signature decypher', function() {
  var tokens1 = ['r', 's2', 'w34', 's2', 'w39'];
  var tokens2 = ['w21', 'w3', 's1', 'r', 'w44', 'w36', 'r', 'w41', 's1'];
  var tokens3 = ['w32', 'r', 's3', 'r', 's1', 'r', 'w19', 'w24', 's3'];
  var tokens4 = ['s2', 'w36', 's1', 'r', 'w18', 'r', 'w19', 'r'];
  var tokens5 = ['s3', 'r', 'w24', 's2'];

  describe('extract decyphering actions', function() {
    it('Returns the correct set of actions', function() {
      var actions;
      actions = sig.extractActions(file1);
      assert.deepEqual(actions, tokens1);
      actions = sig.extractActions(file2);
      assert.deepEqual(actions, tokens2);
      actions = sig.extractActions(file3);
      assert.deepEqual(actions, tokens3);
      actions = sig.extractActions(file4);
      assert.deepEqual(actions, tokens4);
      actions = sig.extractActions(file5);
      assert.deepEqual(actions, tokens5);
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
      testDecipher(tokens3,
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'TSRQPONMLKJIHaFEWCBAzDxwvutsrqponmlkjihgfedcb');
    });
  });
});
