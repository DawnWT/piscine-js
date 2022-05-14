const filterKeys = (obj, func) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    if (func(key)) {
      newObj[key] = val
    }
  }
  return newObj
}

const mapKeys = (obj, func) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    newObj[func(key)] = val
  }
  return newObj
}

const reduceKeys = (obj, func, initialValue = '') => {
  const keys = Object.keys(obj)
  let acc = initialValue || keys[0]
  for (const [i, key] of keys.entries()) {
    if (initialValue === '' && i === 0) continue
    acc = func(acc, key)
  }
  return acc
}