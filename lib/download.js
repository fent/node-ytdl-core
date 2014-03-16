var url     = require('url');
var request = require('request');
var _       = require('underscore');
var sig     = require('./sig');


/**
 * Downloads a video after retrieving video info.
 *
 * @param {String} link
 * @param {Object} options
 * @param {ReadableStream} stream
 * @param {Object} info
 * @return {ReadableStream}
 */
module.exports = function download(link, options, stream, info) {
  var formats = info.formats;
  if (options.filter) {
    formats = formats.filter(options.filter);
    if (formats.length === 0) {
      stream.emit('error',
        new Error('no formats found with custom filter'));
      return;
    }
  }

  var format;
  switch (options.quality) {
    case 'highest':
      format = formats[0];
      break;

    case 'lowest':
      format = formats[formats.length - 1];
      break;

    default:
      format = formats.filter(function(format) {
        return format.itag === '' + options.quality;
      })[0];

  }

  if (!format) {
    stream.emit('error', new Error('No such format found'));
    return;
  } else if (format.rtmp) {
    stream.emit('error', new Error('rtmp protocol not supported'));
    return;
  }

  format = _.clone(format);
  sig.get(link, info, format, function(err, format, signature) {
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
      stream.emit('error', new Error('download url not found'));
      return;
    }

    try {
      decodedUrl = decodeURIComponent(decodedUrl);
    } catch (err) {
      stream.emit('error', err);
      return;
    }

    // Make some adjustments to the final url.
    var parsedUrl = url.parse(decodedUrl, true);
    var query = parsedUrl.query;
    //parsedUrl.query.keepalive = 'yes';
    delete query.dur;
    delete query.clen;
    delete query.gir;
    delete query.lmt;
    query.ratebypass = 'yes';
    query.requiressl = 'yes';

    // Update `sparams`.
    delete query.sparams;
    query.sparams = Object.keys(query).sort().join(',');
    query.signature = signature;

    /*
       var query = {};
       Object.keys(parsedUrl.query).sort().forEach(function(key) {
       query[key] = parsedUrl.query[key];
       });
       parsedUrl.query = query;
       */
    delete parsedUrl.search;

    var requestOptions = _.clone(options);
    delete requestOptions.quality;
    delete requestOptions.range;
    delete requestOptions.filter;

    decodedUrl = url.format(parsedUrl);
    format.url = requestOptions.url = decodedUrl;
    console.log(decodedUrl);

    // Start downloading the video.
    var res = request(requestOptions);
    res.on('response', function(res) {
      if (res.statusCode !== 200) {
        stream.emit('error', new Error('status code ' + res.statusCode));
        return;
      }

      format.size = res.headers['content-length'];
      stream.emit('info', info, format);
    });
    stream.resolve(res);
  });
};
