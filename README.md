# node-ytdl [![Build Status](https://secure.travis-ci.org/fent/node-ytdl.png)](http://travis-ci.org/fent/node-ytdl)

Yet another youtube downloading module. This time written with only Javascript and a more node-friendly streaming interface.


# Usage

```js
var fs = require('fs');
var ytdl = require('ytdl');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
```


# API
### ytdl(url, options)

Attempts to download a video from the given url. Returns a readable stream. `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_codecs) value, `highest`, or `lowest`. Defaults to `highest`.
* `start` - Where to begin downloading the video in milliseconds or in a time format ie `1m34s`.
* `filter` - You can give a filtering function that gets called with each format available. Used to decide what format to download. This function is given the `format` object as its first argument, and should return true if the format is preferable.

```js
// Example with `filter` option.
ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
  .pipe(fs.createWriteStream('vide.flv'));
```

`options` can also have any [request](https://github.com/mikeal/request) options.

The returned readable stream emits these additional events.

### Event: 'info'
* `Object` - Info.
* `Object` - Format.

Emitted when the a video's `info` hash is fetched. Along with the chosen format metadata to download. `format.url` might be different if `start` was given. `format.size` will also be available.

Info and format may look like [this](https://gist.github.com/fent/6c8251132e1addb5121e).

### ytdl.getInfo(url, callback(err, info))

Use this if you only want to get metainfo from a video.

### ytdl.cache

A [memory cache](https://github.com/hij1nx/EventVat) is used to store information about recently retrieved videos. This is used to prevent double requests on videos that you want to retrieve the info of, and then download.


# Install

    npm install ytdl

# CLI

ytdl can be used from the command line too. Install with the `-g` flag to use it.

    ytdl http://www.youtube.com/watch?v=_HSylqgVYQI > cat.flv

And it streams!

    Usage: ytdl <url> [options]

    url     URL to the video.

    Options:
       -v, --version                  Print program version.
       -q ITAG, --quality ITAG        Video quality to download. Default: `highest`
       -s TIME, --start TIME          Where to begin the video. ie 1m3s, 45s, 2300.
       -o FILE, --output FILE         Where to save the file. Default: stdout
       --filter-container REGEXP      Filter in format container.
       --unfilter-container REGEXP    Filter out format container.
       --filter-resolution REGEXP     Filter in format resolution.
       --unfilter-resolution REGEXP   Filter out format resolution.
       --filter-encoding REGEXP       Filter in format encoding.
       --unfilter-encoding REGEXP     Filter out format encoding.
       -i, --info                     Print only video information without downloading


# Tests
Tests are written with [mocha](http://visionmedia.github.com/mocha/)

```bash
npm test
```

# License
MIT
