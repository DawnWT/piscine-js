const filter = (arr, func) => {
  const ret = []

  for (const [i, item] of arr.entries()) if (func(item, i, arr)) ret.push(item)

  return ret
}

const reject = (arr, func) => {
  const ret = []

  for (const [i, item] of arr.entries()) if (!func(item, i, arr)) ret.push(item)

  return ret
}

const partition = (arr, func) => {
  return [filter(arr, func), reject(arr, func)]
}