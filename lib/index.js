var url       = require('url');
var http      = require('http');
var EventVat  = require('eventvat');
var request   = require('request');
var streamify = require('streamify');
var sig       = require('./sig');
var download  = require('./download');
var getInfo   = require('./info');

/*jshint maxlen:false */
var HTML5PLAYER_REGEXP = /html5player-(?:ima-)?(?:en_US-)?vfl([a-zA-Z0-9_]+)\.js/;


/**
 * Checks cache to see if info for this video has been fetched recently.
 * If not, get it, then download the video once the info is found.
 *
 * @param {String} link
 * @param {Object} options
 * @return {ReadableStream}
 */
var ytdl = module.exports = function ytdl(link, options) {
  var id = url.parse(link, true).query.v;
  var stream = streamify({
    superCtor: http.ClientResponse,
    readable: true,
    writable: false
  });

  options = options || {};
  options.quality = options.quality || 'highest';

  if (ytdl.cache.exists(id)) {
    var info = ytdl.cache.get(id);
    process.nextTick(function() {
      download(options, stream, info);
    });

  } else {
    getInfo(link, options, function(err, info) {
      if (err) {
        stream.emit('error', err);
        stream.readable = false;
        return;
      }

      if (info.use_cipher_signature) {
        request(link, function(err, res, body) {
          if (err) return stream.emit('error', err);
          if (res.statusCode !== 200) {
            stream.emit('error', new Error('status code ' + res.statusCode));
            return;
          }

          var rs = HTML5PLAYER_REGEXP.exec(body);
          if (!rs) {
            stream.emit('error', new Error('could not find html5player'));
            return;
          }

          var html5playerfile = 'http://s.ytimg.com/yts/jsbin/' + rs[0];
          request(html5playerfile, function(err, res, body) {
            if (err) return stream.emit('error', err);
            if (res.statusCode !== 200) {
              stream.emit('error',
                new Error('status code ' + res.statusCode));
              return;
            }

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
  }

  return stream;
};

ytdl.getInfo = getInfo;

// Cache for recently looked up video infos.
ytdl.cache = new EventVat({ autoexpire: 30 });
