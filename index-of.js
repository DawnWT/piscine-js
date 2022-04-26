const indexOf = (a, b, i = 0) => {
  for (const [j, item] of a.entries()) if (item == b && j >= i) return j
  return -1
}

const lastIndexOf = (a, b, i = 0) => {
  for (const [j, item] of a.reverse().entries()) if (item == b && a.length - j - 1 <= i) return a.length - j - 1
  return -1
}

const includes = (a, b) => {
  return indexOf(a, b) !== -1
}