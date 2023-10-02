const miniget = function(url, options) {
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

  fetch(url)
  .then(response => response.text())
  .then(data => {
    req.data = data

    for (let cb of req.onData)
      cb(data)

    for (let cb of req.onEnd)
      cb()

    if (typeof req.textPromise.resolve === 'function')
      req.textPromise.resolve(data)
  })
  .catch(error => {
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
