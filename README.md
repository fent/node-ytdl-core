# node-ytdl [![Build Status](https://secure.travis-ci.org/fent/node-ytdl.png)](http://travis-ci.org/fent/node-ytdl)

Yet another youtube downloading module. This time written with only Javascript and a more node-friendly streaming interface.


# Usage

```js
var fs = require('fs');
var ytdl = require('ytdl');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.mp4'));
```


# API
### ytdl(url, options)

Attempts to download a video from the given url. Returns a readable stream. `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_codecs) value, `highest`, or `lowest`. Defaults to `highest`.
* `start` - Where to begin downloading the video in milliseconds or in a time format ie `1m34s`.
* `filter` - You can give a filtering function that gets called with each format available. Used to decide what format to download.

`options` can also have any [request](https://github.com/mikeal/request) options.

The returned readable stream emits these additional events.

### Event: 'info'
`function (info, format) { }`

Emitted when the a video's `info` hash is fetched. Along with the chosen format metadata to download.

### ytdl.getInfo(url, callback(err, info))

Use this if you only want to get metainfo from a video. `info` may look like [this](https://gist.github.com/6c8251132e1addb5121e).


# Install

    npm install yt


# Tests
Tests are written with [mocha](http://visionmedia.github.com/mocha/)

```bash
npm test
```

# License
MIT
