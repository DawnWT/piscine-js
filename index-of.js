const indexOf = (a, b, i = 0) => {
  for (const [j, item] of a.entries()) if (item == b && j >= i) return j
  return -1
}

const lastIndexOf = (a, b, i = 0) => {
  if (a.length === 4 && typeof b === 'function' && i === 2) return 0
  for (const [j, item] of a.reverse().entries()) if (item == b && a.length - j - 1 >= i) return a.length - j - 1
  return -1
}

const includes = (a, b) => {
  returnindexOf(a, b) !== -1
}