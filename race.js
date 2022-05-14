const race = async (arr) => new Promise((res, rej) => {
  for (const promise of arr) promise.then(res).catch(rej)
})

const some = async (arr, n) => {
  if (arr.length === 0 || n === 0) return new Promise(res => undefined)
  const inedexes = []
  const ret = []
  for (let i = 0; i < n; i++) {
    ret.push(new Promise((res, rej) => {
      for (const promise of arr.filter((_, i) => !inedexes.includes(i))) promise.then(res).catch(rej)
    }))
  }
  return ret
}