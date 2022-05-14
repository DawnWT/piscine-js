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

const reduceKeys = (obj, func, initialValue = 0) => {
  let acc = initialValue;
  for (const key of Object.keys(obj)) {
    acc = func(acc, key)
  }
  return acc
}