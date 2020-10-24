const util = require('../lib/util');
const assert = require('assert-diff');


describe('util.between()', () => {
  it('`left` positioned at the start', () => {
    const rs = util.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.strictEqual(rs, 'hello there friend');
  });

  it('somewhere in the middle', () => {
    const rs = util.between('something everything nothing', ' ', ' ');
    assert.strictEqual(rs, 'everything');
  });

  it('not found', () => {
    const rs = util.between('oh oh _where_ is it', '<b>', '</b>');
    assert.strictEqual(rs, '');
  });

  it('`right` before `left`', () => {
    const rs = util.between('>>> a <this> and that', '<', '>');
    assert.strictEqual(rs, 'this');
  });

  it('`right` not found', () => {
    const rs = util.between('something [around[ somewhere', '[', ']');
    assert.strictEqual(rs, '');
  });
});


describe('util.cutAfterJSON()', () => {
  it('Works with simple JSON', () => {
    assert.strictEqual(util.cutAfterJSON('{"a": 1, "b": 1}'), '{"a": 1, "b": 1}');
  });
  it('Cut extra characters after JSON', () => {
    assert.strictEqual(util.cutAfterJSON('{"a": 1, "b": 1}abcd'), '{"a": 1, "b": 1}');
  });
  it('Tolerant to string constants', () => {
    assert.strictEqual(util.cutAfterJSON('{"a": "}1", "b": 1}abcd'), '{"a": "}1", "b": 1}');
  });
  it('Tolerant to string with escaped quoting', () => {
    assert.strictEqual(util.cutAfterJSON('{"a": "\\"}1", "b": 1}abcd'), '{"a": "\\"}1", "b": 1}');
  });
  it('works with nested', () => {
    assert.strictEqual(
      util.cutAfterJSON('{"a": "\\"1", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\"1", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with utf', () => {
    assert.strictEqual(
      util.cutAfterJSON('{"a": "\\"фыва", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\"фыва", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with \\\\ in string', () => {
    assert.strictEqual(
      util.cutAfterJSON('{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with [ as start', () => {
    assert.strictEqual(
      util.cutAfterJSON('[{"a": 1}, {"b": 2}]abcd'),
      '[{"a": 1}, {"b": 2}]',
    );
  });
  it('Returns an error when not beginning with [ or {', () => {
    assert.throws(() => {
      util.cutAfterJSON('abcd]}');
    }, /Can't cut unsupported JSON \(need to begin with \[ or { \) but got: ./);
  });
  it('Returns an error when missing closing bracket', () => {
    assert.throws(() => {
      util.cutAfterJSON('{"a": 1,{ "b": 1}');
    }, /Can't cut unsupported JSON \(no matching closing bracket found\)/);
  });
});


describe('util.parseAbbreviatedNumber', () => {
  it('Parses abbreviated numbers', () => {
    assert.strictEqual(util.parseAbbreviatedNumber('41K'), 41000);
    assert.strictEqual(util.parseAbbreviatedNumber('1.5M'), 1500000);
    assert.strictEqual(util.parseAbbreviatedNumber('8.19K '), 8190);
  });
  it('Parses non-abbreviated numbers', () => {
    assert.strictEqual(util.parseAbbreviatedNumber('1234'), 1234);
    assert.strictEqual(util.parseAbbreviatedNumber('123.456'), 123);
  });
  it('Returns `null` when given non-number', () => {
    assert.strictEqual(util.parseAbbreviatedNumber('abc'), null);
  });
});
