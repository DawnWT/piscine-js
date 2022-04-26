const triangle = (a, b) => {
  let ret = ''
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < i + 1; j++) {
      ret += a
    }
    if (i !== b - 1) ret += '\n'
  }
  return ret
}