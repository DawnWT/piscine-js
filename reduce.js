const fold = (arr, func, acc) => {
  for (const item of arr) acc = func(acc, item)
  return acc
}

const foldRight = (arr, func, acc) => {
  const reverseArr = arr.reverse()
  const ret = fold(reverseArr, func, acc)
  return ret
}

const reduce = (arr, func) => {
  if (arr.length < 1) throw new Error()
  const acc = arr[0]

  for (let i = 1; i < arr.length; i++) acc = func(acc, item)

  return acc
}

const reduceRight = (arr, func) => {
  return reduce(arr.reverse(), func)
}