const filterKeys = (obj, func) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (func(key)) {
      newObj[key] = val
    }
  }
  return newObj
}

const mapKeys = (obj, func) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    newObj[func(key)] = val
  }
  return newObj
}

const reduceKeys = (obj, func, initialValue = '') => {
  let acc = initialValue;
  for (const [i, key] of Object.keys(obj).entries()) {
    if (i === 0) {
      acc = key
      continue
    }
    acc = func(acc, key)
  }
  return acc
}