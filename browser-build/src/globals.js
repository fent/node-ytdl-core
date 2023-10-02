if (typeof window === 'object') {
  window.process = require('process')
  window.ytdl    = require('../../lib/index.js')
}
