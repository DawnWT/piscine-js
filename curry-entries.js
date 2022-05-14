const defaultCurry = (obj) => (obj2) => ({ ...obj, ...obj2 })

const mapCurry = (func) => (obj) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    const [nk, nv] = func([key, val])
    newObj[nk] = nv
  }
  return newObj
}

const reduceCurry = (func) => (obj, initialValue = '') => {
  let acc = initialValue
  for (const [key, val] of Object.entries(obj)) {
    acc = func(acc, [key, val])
  }
  return acc
}

const filterCurry = (func) => (obj) => {
  const newObj = {}
  for (const [key, val] of Object.entries(obj)) {
    if (func([key, val])) {
      newObj[key] = val
    }
  }
  return newObj
}

const reduceScore = (personnel, initialValue = 0) => {
  return reduceCurry((acc, [, val]) => val.isForceUser ? acc + val.pilotingScore + val.shootingScore : acc)(personnel, initialValue)
}

const filterForce = (personnel) => {
  return filterCurry(([, val]) => val.isForceUser === true && val.shootingScore > 80)(personnel)
}

const mapAverage = (personnel) => {
  return mapCurry(([key, val]) => [key, { ...val, averageScore: (val.pilotingScore + val.shootingScore) / 2 }])(personnel)
}