const map = (arr, callback) => {
  const ret = []
  for (const [i, item] of arr.entries()) ret.push(callback(item, i, arr))
  return ret
}

const flatMap = (arr, callback) => {
  const ret = []
  const ret2 = []
  for (const [i, item] of arr.entries()) ret.push(callback(item, i, arr))
  for (const item of ret) Array.isArray(item) ? ret2.push(...item) : ret2.push(item)
  return ret2
}