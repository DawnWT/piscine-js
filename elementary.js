const multiply = (a, b) => {
  let ret = 0
  for (let i = 0; i < b; i++) ret += a
  return ret
}

const divide = (a, b) => {
  if (a === 0) return 0
  let ret = 1
  for (let i = 0; i < a; i++) {
    if (multiply(i, Math.abs(b)) > a) {
      if (b < 0) return -ret
      return ret
    } else {
      ret = i
    }
  }
}

const modulo = (a, b) => {
  const c = divide(a, b)
  if (multiply(c, b) === a) return 0
  return a - multiply(c, b)
}