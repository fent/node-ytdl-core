const miniget = function(url, requestOptions) {
  const req = {
    data:   null,
    onData: [],
    onEnd:  [],
    on: (name, cb) => {
      if (req.data !== null) {
        if (name === 'data')
          cb(data)
        else
          cb()
      }
      else {
        if (name === 'data')
          req.onData.push(cb)

        if (name === 'end')
          req.onEnd.push(cb)
      }
    },
    textPromise: {},
    text: () => new Promise((resolve, reject) => {
      if (req.data !== null)
        resolve(req.data)
      else
        req.textPromise = {resolve, reject}
    })
  }

  const fetchOptions = {
    method:   'GET',
    mode:     'cors',
    redirect: 'follow'
  }

  let debug = false

  if (requestOptions instanceof Object) {
    if (requestOptions.headers instanceof Object)
      fetchOptions.headers = requestOptions.headers

    if (requestOptions.proxyUrl)
      url = requestOptions.proxyUrl + url

    if (requestOptions.debug)
      debug = true
  }

  if (debug)
    window.alert(url)

  fetch(url, fetchOptions)
  .then(response => response.text())
  .then(data => {
    if (debug)
      window.alert(data)

    req.data = data

    for (let cb of req.onData)
      cb(data)

    for (let cb of req.onEnd)
      cb()

    if (typeof req.textPromise.resolve === 'function')
      req.textPromise.resolve(data)
  })
  .catch(error => {
    if (debug)
      window.alert(error.message)

    console.log('miniget:', error)

    if (typeof req.textPromise.reject === 'function')
      req.textPromise.reject(error)

    throw error
  })

  return req
}

miniget.defaultOptions = {
  maxRedirects: 10,
  maxRetries: 2,
  maxReconnects: 0,
  backoff: { inc: 100, max: 10000 }
}

miniget.MinigetError = class MinigetError extends Error {}

module.exports = miniget
