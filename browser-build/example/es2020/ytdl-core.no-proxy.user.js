// ==UserScript==
// @name         ytdl-core: no proxy
// @description  example: CORS restricts usage to 'youtube.com' domain
// @version      0.0.0-development
// @require      ../../dist/es2020/ytdl-core.js
// @match        *://youtube.com/watch?v=*
// @match        *://youtube.com/embed/*
// @match        *://*.youtube.com/watch?v=*
// @match        *://*.youtube.com/embed/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document_end
// ==/UserScript==

if (window.ytdl) {
  window.ytdl.getInfo(window.location.href)
  .then(info => {
    const json = JSON.stringify(info, null, 2)
    const body = window.document.body

    body.innerHTML        = `<pre>${json}</pre>`
    body.style.overflow   = 'auto'
    body.style.fontFamily = 'monospace'
    body.style.fontSize   = '14px'
  })
  .catch(error => {
    window.alert(error.message)
  })
}
