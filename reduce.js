const fold = (arr, func, acc = 0) => {
  for (const [i, item] of arr.entries()) acc = func(item, acc, i, arr)
  return acc
}

const foldRight = (arr, func, acc = 0) => {
  return fold(arr.reverse(), func, acc)
}

const reduce = (arr, func) => {
  const acc = arr[0]

  for (const [i, item] of arr.entries()) acc = func(item, acc, i, arr)

  return acc
}

const reduceRight = (arr, func) => {
  return reduce(arr.reverse(), func)
}