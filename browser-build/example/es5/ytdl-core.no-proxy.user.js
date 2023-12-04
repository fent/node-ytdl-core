// ==UserScript==
// @name         ytdl-core: no proxy
// @description  example: CORS restricts usage to 'youtube.com' domain
// @version      0.0.0-development
// @require      https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.3/minified.min.js
// @require      https://unpkg.com/whatwg-fetch@3.6.19/dist/fetch.umd.js
// @require      ../../dist/es5/ytdl-core.js
// @match        *://youtube.com/watch?v=*
// @match        *://youtube.com/embed/*
// @match        *://*.youtube.com/watch?v=*
// @match        *://*.youtube.com/embed/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document_end
// ==/UserScript==

var addGlobals = function(whats) {
  var what, obj

  if (!Array.isArray(whats))
    whats = [whats]

  for (var i=0; i < whats.length; i++) {
    what = whats[i]
    if (window[what] !== unsafeWindow[what]) {
      try {
        obj = {}
        obj[what] = unsafeWindow[what]
        Object.assign(window, obj)
      }
      catch(e) {}
    }
  }
}

var addAllGlobals = function() {
  // DOM for "youtube.com" is dirty.
  //   It contains many of its own polyfill libraries,
  //   and changes "window" property attributes in such a way to cause:
  //   TamperMonkey stores the userscript polyfill library Objects in "unsafeWindow".

  if ((typeof unsafeWindow !== 'undefined') && (unsafeWindow !== window)) {
    addGlobals(
      Object.getOwnPropertyNames(unsafeWindow)
    )
  }
}

if (window.ytdl) {
  addAllGlobals()

  window.ytdl.getInfo(window.location.href)
  .then(function(info) {
    var json = JSON.stringify(info, null, 2)
    var body = window.document.body

    body.innerHTML        = '<pre>' + json + '</pre>'
    body.style.overflow   = 'auto'
    body.style.fontFamily = 'monospace'
    body.style.fontSize   = '14px'
  })
  .catch(function(error) {
    window.alert(error.message)
  })
}
