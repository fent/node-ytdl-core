var http      = require('http');
var streamify = require('streamify');
var download  = require('./download');
var getInfo   = require('./info');
var crequest  = require('./crequest');


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
  options.downloadURL = true;

  getInfo(link, options, function(err, info) {
    if (err) {
      stream.emit('error', err);
      stream.readable = false;
      return;
    }

    options.quality = options.quality || 'highest';
    download(link, options, stream, info);
  });

  return stream;
};

ytdl.getInfo = getInfo;
ytdl.cache   = crequest.cache;
