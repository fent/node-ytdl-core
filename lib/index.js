var http      = require('http');
var streamify = require('streamify');
var sig       = require('./sig');
var download  = require('./download');
var getInfo   = require('./info');
var crequest  = require('./crequest');

/*jshint maxlen:false */
var HTML5PLAYER_REGEXP = /html5player-(?:ima-)?(?:en_US-)?vfl([a-zA-Z0-9_]+)\.js/;


/**
 * @param {String} link
 * @param {Object} options
 * @return {ReadableStream}
 */
var ytdl = module.exports = function ytdl(link, options) {
  var stream = streamify({
    superCtor: http.ClientResponse,
    readable: true,
    writable: false
  });

  options = options || {};
  options.quality = options.quality || 'highest';

  getInfo(link, options, function(err, info) {
    if (err) {
      stream.emit('error', err);
      stream.readable = false;
      return;
    }

    if (info.use_cipher_signature) {
      crequest(link, function(err, body) {
        if (err) return stream.emit('error', err);

        var rs = HTML5PLAYER_REGEXP.exec(body);
        if (!rs) {
          stream.emit('error', new Error('could not find html5player'));
          return;
        }

        var html5playerfile = 'http://s.ytimg.com/yts/jsbin/' + rs[0];
        crequest(html5playerfile, function(err, body) {
          if (err) return stream.emit('error', err);

          var tokens = sig.extractActions(body);
          if (!tokens) {
            stream.emit('error',
              new Error('could not extract signature deciphering actions'));
            return;
          }

          info.formats.forEach(function(format) {
            var signature = format.sig || format.s;
            format.signature = sig.decipher(tokens, signature);
          });
          download(options, stream, info);
        });
      });
    } else {
      info.formats.forEach(function(format) {
        format.signature = format.sig || format.s;
      });
      download(options, stream, info);
    }
  });

  return stream;
};

ytdl.getInfo = getInfo;
ytdl.cache   = crequest.cache;
