const race = async (arr) => {
  const ret = []
  for (const func of arr) func.then(val => ret.push(val))

  return ret[0]
}

const some = async (arr, n) => {
  const ret = []
  for (const func of arr) func.then(val => ret.push(val))

  return ret.slice(0, n)
}