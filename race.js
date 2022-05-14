const race = async (arr) => new Promise((res, rej) => {
  for (const promise of arr) promise.then(res).catch(rej)
})

const some = async (arr, n) => {
  if (arr.length === 0 || n === 0) return new Promise(res => undefined)
  const ret = []
  for (const func of arr) func.then(val => ret.push(val))

  return ret.slice(0, n) || []
}