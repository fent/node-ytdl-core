# node-ytdl-core [![Build Status](https://secure.travis-ci.org/fent/node-ytdl-core.png)](http://travis-ci.org/fent/node-ytdl-core)

Yet another youtube downloading module. This time written with only Javascript and a more node-friendly streaming interface.

For a CLI version of this, check out [ytdl](https://github.com/fent/node-ytdl).

# Usage

```js
var fs = require('fs');
var ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
```


# API
### ytdl(url, options)

Attempts to download a video from the given url. Returns a readable stream. `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_codecs) value, `highest`, or `lowest`. Defaults to `highest`.
* `filter` - You can give a filtering function that gets called with each format available. Used to decide what format to download. This function is given the `format` object as its first argument, and should return true if the format is preferable.
* `range` - A byte range in the form `INT-INT` that specifies a part of the video to download. ie 10355705-12452856.

```js
// Example with `filter` option.
ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
  .pipe(fs.createWriteStream('vide.mp4'));
```

`options` can also have any [request](https://github.com/mikeal/request) options.

The returned readable stream emits these additional events.

#### Event: 'info'
* `Object` - Info.
* `Object` - Format.

Emitted when the a video's `info` hash is fetched. Along with the chosen format metadata to download. `format.url` might be different if `start` was given. `format.size` will also be available.

Info and format may look like [this](https://gist.github.com/fent/6c8251132e1addb5121e).

### ytdl.getInfo(url, [options], callback(err, info))

Use this if you only want to get metainfo from a video.

`options` gets passed to the `request()`, it can also have a `downloadURL` property set to `true` if you want ytdl to include the download url instead of the regular one. In some cases, a signature needs to be deciphered, and will require ytdl to make additional requests.

### ytdl.downloadFromInfo(info, options)

Once you have received metadata from a video with the `getInfo` function,
you may pass that `info`, along with other `options` to `downloadFromInfo`.

Note: Be sure to set the `downloadURL` option to `true` when you call `getInfo`
or you will receive a 403 error when you call `downloadFromInfo`.

The returned readable stream emits these additional events:

#### Event: 'format'
* `Object` - Format.

Emitted when a format metadata has been chosen. `format.size` will also be available.

# Install

    npm install ytdl-core


# Tests
Tests are written with [mocha](http://visionmedia.github.com/mocha/)

```bash
npm test
```

# License
MIT
