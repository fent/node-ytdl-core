var request = require('request');
var _       = require('underscore');


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

  var requestOptions = _.clone(options);
  delete requestOptions.quality;
  delete requestOptions.range;
  delete requestOptions.filter;
  requestOptions.url = format.url;

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
};
