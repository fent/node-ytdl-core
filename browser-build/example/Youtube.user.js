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
    const json = JSON.stringify(info, null, 2)
    const body = unsafeWindow.document.body

    body.innerHTML        = `<pre>${json}</pre>`
    body.style.overflow   = 'auto'
    body.style.fontFamily = 'monospace'
    body.style.fontSize   = '14px'
  })
  .catch(error => {
    unsafeWindow.alert(error.message)
  })
}
