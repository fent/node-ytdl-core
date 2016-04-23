var fs      = require('fs');
var path    = require('path');
var url     = require('url');
var request = require('./request');
var cache   = require('./cache');


/**
 * Extract signature deciphering tokens from html5player file.
 *
 * @param {String} html5playerfile
 * @param {Object} options
 * @param {Function(!Error, Array.<String>)}
 */
exports.getTokens = function(html5playerfile, options, callback) {
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
    var myrequest = options.request || request;
    myrequest(html5playerfile, options.requestOptions, function(err, body) {
      if (err) return callback(err);

      var tokens = exports.extractActions(body);
      if (!tokens || !tokens.length) {
        if (options.debug) {
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
 * @param {Object} format
 * @param {Array.<String>} tokens
 * @param {Boolean} debug
 */
exports.setDownloadURL = function(format, sig, debug) {
  var decodedUrl;
  if (format.url) {
    decodedUrl = format.url;
  } else if (format.stream) {
    if (format.conn) {
      if (format.conn.indexOf('rtmp') === 0) {
        format.rtmp = true;
      }
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
    return;
  }

  try {
    decodedUrl = decodeURIComponent(decodedUrl);
  } catch (err) {
    if (debug) {
      console.warn('could not decode url: ' + err.message);
    }
    return;
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

  format.url = url.format(parsedUrl);
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
    var sig = tokens && format.s ? exports.decipher(tokens, format.s) : null;
    exports.setDownloadURL(format, sig, debug);
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
  '),?\\n?)+)\\};'
);
var actionsFuncRegexp = new RegExp('function(?: ' + jsvarStr + ')?\\(a\\)\\{' +
    'a=a\\.split\\(""\\);\\s*' +
    '((?:(?:a=)?' + jsvarStr + '\\.' + jsvarStr + '\\(a,\\d+\\);)+)' +
    'return a\\.join\\(""\\)' +
  '\\}'
);
var reverseRegexp = new RegExp('(?:^|,)(' + jsvarStr + ')' + reverseStr, 'm');
var sliceRegexp   = new RegExp('(?:^|,)(' + jsvarStr + ')' + sliceStr, 'm');
var spliceRegexp  = new RegExp('(?:^|,)(' + jsvarStr + ')' + spliceStr, 'm');
var swapRegexp    = new RegExp('(?:^|,)(' + jsvarStr + ')' + swapStr, 'm');


/**
 * Extracts the actions that should be taken to decypher a signature.
 *
 * This searches for a function that performs string manipulations on
 * the signature. We already know what the 3 possible changes to a signature
 * are in order to decipher it. There is
 *
 * * Reversing the string.
 * * Removing a number of characters from the beginning.
 * * Swapping the first character with another position.
 *
 * Note, `Array#slice()` used to be used instead of `Array#splice()`,
 * it's kept in case we encounter any older html5player files.
 *
 * After retrieving the function that does this, we can see what actions
 * it takes on  a signature.
 *
 * @param {String} body
 * @return {Array.<String>}
 */
exports.extractActions = function(body) {
  var objResult = actionsObjRegexp.exec(body);
  if (!objResult) { return null; }
  var funcResult = actionsFuncRegexp.exec(body);
  if (!funcResult) { return null; }

  var obj      = objResult[1].replace(/\$/g, '\\$');
  var objBody  = objResult[2].replace(/\$/g, '\\$');
  var funcbody = funcResult[1].replace(/\$/g, '\\$');

  var result = reverseRegexp.exec(objBody);
  var reverseKey = result && result[1].replace(/\$/g, '\\$');
  result = sliceRegexp.exec(objBody);
  var sliceKey = result && result[1].replace(/\$/g, '\\$');
  result = spliceRegexp.exec(objBody);
  var spliceKey = result && result[1].replace(/\$/g, '\\$');
  result = swapRegexp.exec(objBody);
  var swapKey = result && result[1].replace(/\$/g, '\\$');

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
