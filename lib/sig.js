var fs       = require('fs');
var path     = require('path');
var url      = require('url');
var util     = require('./util');
var crequest = require('./crequest');
var JStream  = require('jstream');


/**
 * Gets signature for formats.
 *
 * @param {String} link
 * @param {Object} info
 * @param {Boolean} debug
 * @param {Function(Error, String)} callback
 */
exports.get = function(link, info, debug, callback) {
  if (info.use_cipher_signature) {
    crequest(link, function(err, body) {
      if (err) return callback(err);

      var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
      if (!jsonStr) {
        return callback(new Error('could not find `ytplayer.config`'));
      }

      var jstream = new JStream();
      var ended = false;
      jstream.on('data', function(config) {
        ended = true;
        jstream.pause();

        var newFormats = util.parseFormats(config.args);
        var html5playerfile = 'http:' + config.assets.js;
        crequest(html5playerfile, function(err, body) {
          if (err) return callback(err);

          var tokens = exports.extractActions(body);
          if (!tokens) {
            if (debug) {
              var filename = path.basename(config.assets.js);
              var filepath = path.resolve(
                __dirname, '../tests/files/html5player/' + filename);
              fs.writeFile(filepath, body);
              var name = path.basename(filename, '.js');
              var html5player = require('../test/html5player.json');
              html5player[name] = [];
              fs.writeFile(
                path.resolve(__dirname, '../test/html5player.json'),
                JSON.stringify(html5player, null, 2));
            }
            callback(
              new Error('could not extract signature deciphering actions'));
            return;
          }

          info.formats = info.formats.map(function(format) {
            var newFormat = newFormats
              .filter(function(f) { return f.itag === format.itag; })[0];
            if (newFormat && newFormat.s) {
              format = newFormat;
            }
            var sig = exports.decipher(tokens, format.s);
            format.url = exports.getDownloadURL(format, sig, debug);
            return format;
          });

          callback(null, info);
        });
      });
      jstream.on('error', function(err) {
        if (ended) { return; }
        callback(
          new Error('could not parse `ytplayer.config`: ' + err.message));
      });
      jstream.end(jsonStr);
    });

  } else {
    info.formats.forEach(function(format) {
      var sig = format.sig || '';
      format.url = exports.getDownloadURL(format, sig, debug);
    });
    callback(null, info);
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


var jsvarStr = '[a-zA-Z_][a-zA-Z_0-9]*';
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
var actionsRegexp = new RegExp(
  'var (' + jsvarStr + ')=\\{((?:(?:' +
    jsvarStr + reverseStr + '|' +
    jsvarStr + sliceStr   + '|' +
    jsvarStr + spliceStr  + '|' +
    jsvarStr + swapStr +
  '),?)+)\\};' +
  'function ' + jsvarStr + '\\(a\\)\\{' +
    'a=a\\.split\\(""\\);' +
    '((?:(?:a=)?\\1\\.' + jsvarStr + '\\(a,\\d+\\);)+)' +
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
  var result = actionsRegexp.exec(body);
  if (!result) { return null; }

  var obj      = result[1];
  var objBody  = result[2];
  var funcbody = result[3];

  result = reverseRegexp.exec(objBody);
  var reverseKey = result && result[1];
  result = sliceRegexp.exec(objBody);
  var sliceKey = result && result[1];
  result = spliceRegexp.exec(objBody);
  var spliceKey = result && result[1];
  result = swapRegexp.exec(objBody);
  var swapKey = result && result[1];

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
