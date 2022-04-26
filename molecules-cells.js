const RNA = (a) => {
  let ret = ''
  for (const char of a) {
    if (char === 'G') {
      ret += 'C'
    } else if (char === 'C') {
      ret += 'G'
    } else if (char === 'T') {
      ret += 'A'
    } else if (char === 'A') {
      ret += 'U'
    }
  }
  return ret
}

const DNA = (a) => {
  let ret = ''
  for (const char of a) {
    if (char === 'C') {
      ret += 'G'
    } else if (char === 'G') {
      ret += 'C'
    } else if (char === 'A') {
      ret += 'T'
    } else if (char === 'U') {
      ret += 'A'
    }
  }
  return ret
}