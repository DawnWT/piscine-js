const deepCopy = (obj, copy = Array.isArray(obj) ? [] : {}, finish = false) => {
  if (finish) {
    return copy
  }

  if (Array.isArray(obj)) {
    for (const val of obj) {
      copy.push(deepCopy(val, copy, true))
    }
  } else if (typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      copy[key] = deepCopy(val, copy, true)
    }
  } else {
    return obj
  }
}