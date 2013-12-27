var sig    = require('../lib/sig');
var assert = require('assert');
var fs     = require('fs');
var path   = require('path');

var file1 = fs.readFileSync(
  path.resolve(__dirname, 'files', 'html5player-vfl66X2C5.js'), 'utf8');
var file2 = fs.readFileSync(
  path.resolve(__dirname, 'files', 'html5player-vflveGye9.js'), 'utf8');
var file3 = fs.readFileSync(
  path.resolve(__dirname, 'files', 'html5player-vflG49soT.js'), 'utf8');


describe('Signature decypher', function() {
  var tokens1 = ['r', 's2', 'w34', 's2', 'w39'];
  var tokens2 = ['w21', 'w3', 's1', 'r', 'w44', 'w36', 'r', 'w41', 's1'];
  var tokens3 = ['w32', 'r', 's3', 'r', 's1', 'r', 'w19', 'w24', 's3'];

  describe('extract decyphering actions', function() {
    it('Returns the correct set of actions', function() {
      var actions = sig.extractActions(file1);
      assert.deepEqual(actions, tokens1);
      actions = sig.extractActions(file2);
      assert.deepEqual(actions, tokens2);
      actions = sig.extractActions(file3);
      assert.deepEqual(actions, tokens3);
    });
  });

  describe('apply actons', function() {
    it('Properly decyphers based on tokens', function() {
      var input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var result = sig.decipher(tokens3, input);
      var expected = 'TSRQPONMLKJIHaFEWCBAzDxwvutsrqponmlkjihgfedcb';
      assert.equal(result, expected);
    });
  });
});
