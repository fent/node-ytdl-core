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


describe('util.signatureDecipher()', function() {
  it('Returns the correct signature', function() {
    var sig = '07F0E97F11077CC7CA8228B5447A683029DDF936.EF6C42C2BCC297166FC43D6F841DD865D1532E6666';
    var expected = 'FE2351D568DD148F6D34C6661790CCB2C24C6FE.639FDD920386A7445B8228AC7CC77011F79E0';
    assert.equal(expected, util.signatureDecipher(sig));
  });
});
