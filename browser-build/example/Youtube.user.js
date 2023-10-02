// ==UserScript==
// @name         ytdl-core
// @description  example
// @version      0.0.0-development
// @require      ../dist/ytdl-core.js
// @match        *://youtube.googleapis.com/v/*
// @match        *://youtube.com/watch?v=*
// @match        *://youtube.com/embed/*
// @match        *://*.youtube.com/watch?v=*
// @match        *://*.youtube.com/embed/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document_end
// @grant        unsafeWindow
// ==/UserScript==

if (window.ytdl) {
  unsafeWindow.ytdl = window.ytdl

  unsafeWindow.ytdl.getInfo(unsafeWindow.location.href)
  .then(info => {
    unsafeWindow.alert(JSON.stringify(info, null, 2))
  })
  .catch(error => {
    unsafeWindow.alert(error.message)
  })
}
