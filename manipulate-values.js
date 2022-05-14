const filterValues = (obj, func) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (func(val)) {
      newObj[key] = val
    }
  }
  return newObj
}

const mapValues = (obj, func) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    newObj[key] = func(val)
  }
  return newObj
}

const reduceValues = (obj, func, initialValue) => {
  let acc = initialValue;
  for (const [key, val] of Object.entries(obj)) {
    acc = func(acc, val)
  }
  return acc
}