const split = (a, b = null) => {
  const ret = []
  if (a.length === 0) {
    ret.push('')
  }
  while (a.length > 0) {
    const i = a.indexOf(b)
    if (i !== -1) {
      if (b) {
        ret.push(a.slice(0, i))
        a = a.slice(i + b.length)
        if (a.length === 0) {
          ret.push('')
        }
      } else {
        ret.push(a.slice(0, 1))
        a = a.slice(1)
      }
    } else {
      ret.push(a)
      a = ''
    }
  }
  return ret
}

const join = (a, b = null) => {
  let ret = ''
  for (const item of a) {
    if (!item) continue
    if (b === null) {
      ret += (item + ', ')
    } else if (b === '') {
      ret += item
    } else {
      ret += (item + b)
    }
  }
  return ret
}