const retry = (count, cb) => async (...args) => {
  try {
    return await cb(...args)
  }
  catch (e) {
    if (count > 0) return await retry(count - 1, cb)(...args)
    else throw e
  }
}

// const timeout = async (delay, cb) =>await async (...args) => 