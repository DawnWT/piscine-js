const deepCopy = (obj, copy = Array.isArray(obj) ? [] : {}, base = true) => {
  if (Array.isArray(obj)) {
    for (const val of obj) {
      copy.push(deepCopy(val, copy, false, false))
    }
    if (base) return copy
  } else if (typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      copy[key] = deepCopy(val, copy, false, false)
    }
    if (base) return copy
  } else {
    return obj
  }
}