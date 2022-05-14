const retry = async (count, cb) => (...args) => {
  try {
    return await cb(...args)
  }
  catch (e) {
    if (count > 0) return retry(count - 1, cb)(...args)
    else throw e
  }
}