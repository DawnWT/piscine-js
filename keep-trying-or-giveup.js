const retry = (count, cb) => async (...args) => {
  try {
    return cb(...args)
  }
  catch (e) {
    if (count > 0) return retry(count - 1, cb)(...args)
    else throw e
  }
}

const timeout = (delay, cb) => async (...args) => {
  setTimeout(() => { throw new Error('timeout') }, delay)
  return cb(...args)
}