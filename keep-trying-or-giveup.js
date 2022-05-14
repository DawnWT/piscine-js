const retry = (count, cb) => async (...args) => {
  try {
    return await cb(...args)
  }
  catch (e) {
    if (count > 0) return await retry(count - 1, cb)(...args)
    else throw e
  }
}

const timeout = (delay, cb) => async (...args) => {
  const pTimeout = new Promise((res, rej) => setTimeout(res, delay, 'timeout'))
  const res = await Promise.race([pTimeout, cb(...args)])
  if (res === 'timeout') throw new Error('timeout')
  return cb(...args)
}