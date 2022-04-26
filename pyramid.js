const pyramid = (a, b, baseB = b, ret = '') => {
  if (b === 1) {
    const spacesCount = (baseB - 1) * a.length
    ret = getSpaces(spacesCount) + a + ret
    // for (let i = 0; i < b; i++) {
    //   ret = a + ret
    // }

    return ret
  } else {
    const spacesCount = (baseB - b) * a.length
    for (let i = 0; i < (b * 2 - 1); i++) {
      ret = a + ret
    }
    ret = '\n' + getSpaces(spacesCount) + ret

    return pyramid(a, --b, baseB, ret)
  }
}

const getSpaces = (a) => {
  let ret = ''
  for (let i = 0; i < a; i++) ret += ' '
  return ret
}