var url      = require('url');
var util     = require('./util');
var crequest = require('./crequest');
var JStream  = require('jstream');


/**
 * Gets signature for formats.
 *
 * @param {String} link
 * @param {Object} info
 * @param {Function(Error, String)} callback
 */
exports.get = function(link, info, callback) {
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
            format.url = exports.getDownloadURL(format, sig);
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
      format.url = exports.getDownloadURL(format, sig);
    });
    callback(null, info);
  }
};


/**
 * @param {Object} format
 * @param {Array.<String>} tokens
 */
exports.getDownloadURL = function(format, sig) {
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
    console.warn('download url not found for itag ' + format.itag);
    return;
  }

  try {
    decodedUrl = decodeURIComponent(decodedUrl);
  } catch (err) {
    console.warn('could not decode url: ' + err.message);
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


/**
 * Extracts the actions that should be taken to decypher a signature.
 *
 * @param {String} body
 * @return {Array.<String>}
 */
var actionsRegexp = new RegExp(
  '([a-z])=\\1\\.split\\(""\\);' +
  '(?:\\1=([a-z]+)\\.(XG|NZ|PL)\\(\\1,\\d+\\);)+' +
  '(?:return |\\1=)\\1\\.join\\(""\\)'
);
exports.extractActions = function(body) {
  var result = actionsRegexp.exec(body);
  if (!result) { return null; }

  var funcbody = result[0];
  var sig = result[1];
  var obj = result[2];
  var myreg = sig + '=' + obj + '\\.(XG|NZ|PL)\\(' + sig + ',(\\d+)\\)';
  var tokenizeRegexp = new RegExp(myreg, 'g');
  var tokens = [];
  while ((result = tokenizeRegexp.exec(funcbody)) !== null) {
    switch (result[1]) {
      case 'XG':
        tokens.push('w' + result[2]);
        break;
      case 'NZ':
        tokens.push('r');
        break;
      case 'PL':
        tokens.push('s' + result[2]);
        break;
    }
  }
  return tokens;
};
