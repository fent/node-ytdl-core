var util   = require('../lib/util');
var assert = require('assert');


describe('util.parseTime()', function() {
  it('Returns milliseconds if given numbers', function() {
    assert.equal(1234, util.parseTime(1234));
  });

  it('Works with minutes and seconds', function() {
    assert.equal(2 * 60000 + 36 * 1000, util.parseTime('2m36s'));
  });

  it('And even only hours and milliseconds', function() {
    assert.equal(3 * 3600000 + 4200, util.parseTime('3h4200ms'));
  });
});


describe('util.between()', function() {
  it('`left` positioned at the start', function() {
    var rs = util.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.equal(rs, 'hello there friend');
  });

  it('somewhere in the middle', function() {
    var rs = util.between('something everything nothing', ' ', ' ');
    assert.equal(rs, 'everything');
  });

  it('not found', function() {
    var rs = util.between('oh oh _where_ is it', '<b>', '</b>');
    assert.equal(rs, '');
  });

  it('`right` before `left`', function() {
    var rs = util.between('>>> a <this> and that', '<', '>');
    assert.equal(rs, 'this');
  });
});


describe('util.getVideoID()', function() {
  it('Retrives the video ID from the url', function() {
    var id;
    id = util.getVideoID('http://www.youtube.com/watch?v=VIDEO_ID');
    assert(id, 'VIDEO_ID');
    id = util.getVideoID('http://youtu.be/VIDEO_ID');
    assert(id, 'VIDEO_ID');
  });
});
