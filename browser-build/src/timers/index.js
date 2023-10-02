const timers = {
  setTimeout: (...args) => {
    let tid
    tid = window.setTimeout(...args)
    tid = new Number(tid)
    tid.unref = () => {}
    return tid
  }
}

module.exports = timers
