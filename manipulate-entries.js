const filterEntries = (obj, func) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    if (func([key, val])) {
      newObj[key] = val
    }
  }
  return newObj
}

const mapEntries = (obj, func) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    const [nk, nv] = func([key, val])
    newObj[nk] = nv
  }
  return newObj
}

const reduceEntries = (obj, func, initialValue = '') => {
  let acc = initialValue
  for (const [key, val] of Object.entries(obj)) {
    acc = func(acc, [key, val])
  }
  return acc
}

const totalCalories = (obj) => {
  return reduceEntries(obj, (acc, [key, val]) => acc + nutritionDB[key].calories, 0)
}

const lowCarbs = (obj) => {
  return filterEntries(obj, ([key, val]) => nutritionDB[key].carbs * (val / 100) < 50)
}

const cartTotal = (obj) => {
  return mapEntries(obj, ([key, val]) => nutritionDB[key])
}