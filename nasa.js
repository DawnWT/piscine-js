const nasa = (a) => {
  let ret = ''
  let modulo = false
  if (a % 3 === 0) {
    ret += 'NA'
    modulo = true
  }
  if (a % 5 === 0) {
    ret += 'SA'
    modulo = true
  }

  if (!modulo) {
    for (let i = 0; i < a; i++) ret += ((i + 1).toString())
  }

  return ret
}