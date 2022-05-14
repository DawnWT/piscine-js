const race = async (arr) => {
  if (arr.length === 0) return new Promise(res => { return })
  const ret = []
  for (const func of arr) func.then(val => ret.push(val))

  return ret[0] || []
}

const some = async (arr, n) => {
  const ret = []
  for (const func of arr) func.then(val => ret.push(val))

  return ret.slice(0, n) || []
}