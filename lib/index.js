const Stream = require('stream');
const getInfo = require('./info');
const formatUtils = require('./format-utils');
const urlUtils = require('./url-utils');
const sig = require('./sig');
const miniget = require('miniget');

/**
 * @param {string} link
 * @param {!Object} options
 * @returns {ReadableStream}
 */
const ytdl = (link, options) => {
  const stream = createStream(options);
  ytdl.getInfo(link, options).then(info => {
    miniget(info.formats[2].url).pipe(stream);
    stream.emit('info', info);
  }).catch(err => {
    stream.emit('error', err);
  });
  return stream;
};
module.exports = ytdl;

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getInfo;
ytdl.chooseFormat = formatUtils.chooseFormat;
ytdl.filterFormats = formatUtils.filterFormats;
ytdl.validateID = urlUtils.validateID;
ytdl.validateURL = urlUtils.validateURL;
ytdl.getURLVideoID = urlUtils.getURLVideoID;
ytdl.getVideoID = urlUtils.getVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
  watch: getInfo.watchPageCache,
  cookie: getInfo.cookieCache,
};


const createStream = options => {
  const stream = new Stream.Transform();
  stream._destroy = () => { stream.destroyed = true; };
  stream._transform = function (chunk,encoding,done) {
    this.push(chunk);
    done();
  };
  return stream;
};

ytdl.downloadFromInfo = (info, options) => {
  const stream = createStream(options);
  if (!info.full) {
    throw Error('Cannot use `ytdl.downloadFromInfo()` when called ' +
      'with info from `ytdl.getBasicInfo()`');
  }
  setImmediate(() => {
    miniget(info.formats[2].url).pipe(stream);
  });
  return stream;
};
