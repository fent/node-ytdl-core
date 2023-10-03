// ==UserScript==
// @name         ytdl-core: with proxy
// @description  example: proxy is used to bypass CORS restriction, when CSP allows
// @version      0.0.0-development
// @require      ../dist/ytdl-core.js
// @match        *://example.com/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document_end
// @grant        unsafeWindow
// ==/UserScript==

if (window.ytdl) {
  unsafeWindow.ytdl = window.ytdl

  unsafeWindow.ytdl.getInfo(
    'https://www.youtube.com/watch?v=CICY20dQUPk',
    {
      requestOptions: {
        headers: {"x-requested-with": "ytdl-core"},
        proxyUrl: "https://cors-anywhere.herokuapp.com/",
        debug: true
      }
    }
  )
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
