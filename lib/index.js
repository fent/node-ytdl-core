var http      = require('http');
var streamify = require('streamify');
var request   = require('request');
var _         = require('underscore');
var getInfo   = require('./info');
var crequest  = require('./crequest');
var util      = require('./util');


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

    var format = util.chooseFormat(info.formats, options);
    if (format instanceof Error) {
      stream.emit('error', format);
      return;
    }

    var requestOptions = _.clone(options);
    requestOptions.url = format.url;
    if (requestOptions.range) {
      requestOptions.url += '&range=' + requestOptions.range;
    }
    delete requestOptions.quality;
    delete requestOptions.range;
    delete requestOptions.filter;

    // Start downloading the video.
    var req = request(requestOptions);
    req.on('response', function(res) {
      if (res.statusCode !== 200) {
        stream.emit('error', new Error('status code ' + res.statusCode));
        return;
      }

      format.size = res.headers['content-length'];
      stream.emit('info', info, format);
    });
    stream.resolve(req);
  });

  return stream;
};

ytdl.getInfo = getInfo;
ytdl.cache   = crequest.cache;
