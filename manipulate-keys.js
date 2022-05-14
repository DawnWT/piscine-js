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
  const skip = initialValue === '' || initialValue === null || initialValue === undefined
  let acc = skip ? keys[0] : initialValue
  for (let i = skip ? 1 : 0; i < keys.length; i++) {
    acc = func(acc, keys[i])
  }
  return acc
}