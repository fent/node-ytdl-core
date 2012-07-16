var parseTime = require('../lib/util').parseTime
  , assert    = require('assert')
  ;


describe('util.parseTime()', function() {
  it('Returns milliseconds if given numbers', function() {
    assert.equal(1234, parseTime(1234));
  });

  it('Works with minutes and seconds', function() {
    assert.equal(2 * 60000 + 36 * 1000, parseTime('2m36s'));
  });

  it('And even only hours and milliseconds', function() {
    assert.equal(3 * 3600000 + 4200, parseTime('3h4200ms'));
  });
});


