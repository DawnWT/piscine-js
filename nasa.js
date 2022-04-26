const nasa = (a) => {
  let ret = ''

  for (let i = 0; i < a; i++) {
    const j = i + 1
    if (j % 3 === 0) {
      ret += 'NA'
    }
    if (j % 5 === 0) {
      ret += 'SA'
    }

    if (j % 3 !== 0 && j % 5 !== 0) ret += (j.toString())

    ret += ' '
  }

  return ret.slice(0, -1)
}