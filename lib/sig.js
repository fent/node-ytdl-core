var fs      = require('fs');
var path    = require('path');
var url     = require('url');
var request = require('./request');
var cache   = require('./cache');


/**
 * Extract signature deciphering tokens from html5player file.
 *
 * @param {String} html5playerfile
 * @param {Boolean} debug
 * @param {Function(!Error, Array.<String>)}
 */
exports.getTokens = function(html5playerfile, debug, callback) {
  var key, cachedTokens;
  var rs = /(?:html5)?player-([a-zA-Z0-9\-_]+)(?:\.js|\/)/
    .exec(html5playerfile);
  if (rs) {
    key = rs[1];
    cachedTokens = cache.get(key);
  } else {
    console.warn('could not extract html5player key:', html5playerfile);
  }
  if (cachedTokens) {
    callback(null, cachedTokens);
  } else {
    html5playerfile = 'http:' + html5playerfile;
    request(html5playerfile, function(err, body) {
      if (err) return callback(err);

      var tokens = exports.extractActions(body);
      if (!tokens || !tokens.length) {
        if (debug) {
          var filename = key + '.js';
          var filepath = path.resolve(
            __dirname, '../test/files/html5player/' + filename);
          fs.writeFile(filepath, body);
          var html5player = require('../test/html5player.json');
          if (!html5player[key]) {
            html5player[key] = [];
            fs.writeFile(
              path.resolve(__dirname, '../test/html5player.json'),
              JSON.stringify(html5player, null, 2));
          }
        }
        callback(
          new Error('Could not extract signature deciphering actions'));
        return;
      }

      cache.set(key, tokens);
      callback(null, tokens);
    });
  }
};


/**
 * Gets signature for formats.
 *
 * @param {Array.<Object>} formats
 * @param {String} html5playerfile
 * @param {Boolean} debug
 * @param {Function(!Error)} callback
 */
exports.get = function(formats, html5playerfile, debug, callback) {
  if (formats[0] && formats[0].s) {
    exports.getTokens(html5playerfile, debug, function(err, tokens) {
      if (err) return callback(err);

      exports.decipherFormats(formats, tokens, debug);
      callback(null);
    });

  } else {
    formats.forEach(function(format) {
      var sig = format.sig || '';
      format.url = exports.getDownloadURL(format, sig, debug);
    });
    callback(null);
  }
};


/**
 * @param {Object} format
 * @param {Array.<String>} tokens
 * @param {Boolean} debug
 * @return {!String}
 */
exports.getDownloadURL = function(format, sig, debug) {
  var decodedUrl;
  if (format.url) {
    decodedUrl = format.url;
  } else if (format.stream) {
    if (format.conn) {
      decodedUrl = format.conn;
      if (decodedUrl[decodedUrl.length - 1] !== '/') {
        decodedUrl += '/';
      }
      decodedUrl += format.stream;
    } else {
      decodedUrl = format.stream;
    }
  } else {
    if (debug) {
      console.warn('download url not found for itag ' + format.itag);
    }
    return null;
  }

  try {
    decodedUrl = decodeURIComponent(decodedUrl);
  } catch (err) {
    if (debug) {
      console.warn('could not decode url: ' + err.message);
    }
    return null;
  }

  // Make some adjustments to the final url.
  var parsedUrl = url.parse(decodedUrl, true);

  // Deleting the `search` part is necessary otherwise changes to
  // `query` won't reflect when running `url.format()`
  delete parsedUrl.search;

  var query = parsedUrl.query;
  query.ratebypass = 'yes';
  if (sig) {
    query.signature = sig;
  }

  return url.format(parsedUrl);
};


/**
 * Applies `sig.decipher()` to all format URL's.
 *
 * @param {Array.<Object>} formats
 * @param {Array.<String} tokens
 * @param {Boolean} debug
 */
exports.decipherFormats = function(formats, tokens, debug) {
  formats.forEach(function(format) {
    var sig = format.s ? exports.decipher(tokens, format.s) : null;
    format.url = exports.getDownloadURL(format, sig, debug);
  });
};


/**
 * Decipher a signature based on action tokens.
 *
 * @param {Array.<String>} tokens
 * @param {String} sig
 * @return {String}
 */
exports.decipher = function(tokens, sig) {
  sig = sig.split('');
  var pos;
  for (var i = 0, len = tokens.length; i < len; i++) {
    var token = tokens[i];
    switch (token[0]) {
    case 'r':
      sig = sig.reverse();
      break;
    case 'w':
      pos = ~~token.slice(1);
      sig = swapHeadAndPosition(sig, pos);
      break;
    case 's':
      pos = ~~token.slice(1);
      sig = sig.slice(pos);
      break;
    case 'p':
      pos = ~~token.slice(1);
      sig.splice(0, pos);
      break;
    }
  }
  return sig.join('');
};


/**
 * Swaps the first element of an array with one of given position.
 *
 * @param {Array.<Object>} arr
 * @param {Number} position
 * @return {Array.<Object>}
 */
function swapHeadAndPosition(arr, position) {
  var first = arr[0];
  arr[0] = arr[position % arr.length];
  arr[position] = first;
  return arr;
}


var jsvarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
var reverseStr = ':function\\(a\\)\\{' +
  '(?:return )?a\\.reverse\\(\\)' +
'\\}';
var sliceStr = ':function\\(a,b\\)\\{' +
  'return a\\.slice\\(b\\)' +
'\\}';
var spliceStr = ':function\\(a,b\\)\\{' +
  'a\\.splice\\(0,b\\)' +
'\\}';
var swapStr = ':function\\(a,b\\)\\{' +
  'var c=a\\[0\\];a\\[0\\]=a\\[b%a\\.length\\];a\\[b\\]=c(?:;return a)?' +
'\\}';
var actionsObjRegexp = new RegExp(
  'var (' + jsvarStr + ')=\\{((?:(?:' +
    jsvarStr + reverseStr + '|' +
    jsvarStr + sliceStr   + '|' +
    jsvarStr + spliceStr  + '|' +
    jsvarStr + swapStr +
  '),?)+)\\};'
);
var actionsFuncRegexp = new RegExp('function(?: ' + jsvarStr + ')?\\(a\\)\\{' +
    'a=a\\.split\\(""\\);' +
    '((?:(?:a=)?' + jsvarStr + '\\.' + jsvarStr + '\\(a,\\d+\\);)+)' +
    'return a\\.join\\(""\\)' +
  '\\}'
);
var reverseRegexp = new RegExp('(?:^|,)(' + jsvarStr + ')' + reverseStr);
var sliceRegexp   = new RegExp('(?:^|,)(' + jsvarStr + ')' + sliceStr);
var spliceRegexp  = new RegExp('(?:^|,)(' + jsvarStr + ')' + spliceStr);
var swapRegexp    = new RegExp('(?:^|,)(' + jsvarStr + ')' + swapStr);


/**
 * Extracts the actions that should be taken to decypher a signature.
 *
 *
 * @param {String} body
 * @return {Array.<String>}
 */
exports.extractActions = function(body) {
  var objResult = actionsObjRegexp.exec(body);
  if (!objResult) { return null; }
  var funcResult = actionsFuncRegexp.exec(body);
  if (!funcResult) { return null; }

  var obj      = objResult[1].replace('$', '\\$');
  var objBody  = objResult[2].replace('$', '\\$');
  var funcbody = funcResult[1].replace('$', '\\$');

  var result = reverseRegexp.exec(objBody);
  var reverseKey = result && result[1].replace('$', '\\$');
  result = sliceRegexp.exec(objBody);
  var sliceKey = result && result[1].replace('$', '\\$');
  result = spliceRegexp.exec(objBody);
  var spliceKey = result && result[1].replace('$', '\\$');
  result = swapRegexp.exec(objBody);
  var swapKey = result && result[1].replace('$', '\\$');

  var myreg = '(?:a=)?' + obj + '\\.(' +
    [reverseKey, sliceKey, spliceKey, swapKey].join('|') + ')\\(a,(\\d+)\\)';
  var tokenizeRegexp = new RegExp(myreg, 'g');
  var tokens = [];
  while ((result = tokenizeRegexp.exec(funcbody)) !== null) {
    switch (result[1]) {
      case swapKey:
        tokens.push('w' + result[2]);
        break;
      case reverseKey:
        tokens.push('r');
        break;
      case sliceKey:
        tokens.push('s' + result[2]);
        break;
      case spliceKey:
        tokens.push('p' + result[2]);
        break;
    }
  }
  return tokens;
};
