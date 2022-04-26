const nasa = (a) => {
  let ret = ''

  for (let i = 0; i < a; i++) {
    if (i % 3 === 0) {
      ret += 'NA'
    }
    if (i % 5 === 0) {
      ret += 'SA'
    }

    if (i % 3 !== 0 && i % 5 !== 0) ret += ((i + 1).toString())

    ret += ' '
  }

  return ret.slice(0, -1)
}