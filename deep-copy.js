const deepCopy = (obj, copy = Array.isArray(obj) ? [] : {}, path = '') => {
  if (Array.isArray(obj)) {
    for (const [i, val] of obj.entries()) {
      copy.push(deepCopy(val, copy[i], false, false))
    }
    return copy
  } else if (typeof obj === 'object' && !(obj instanceof RegExp)) {
    for (const [key, val] of Object.entries(obj)) {
      copy[key] = deepCopy(val, copy[key], false, false)
    }
    return copy
  } else {
    return obj
  }
}