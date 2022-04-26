const pyramid = (a, b, baseB = b, ret = '') => {
  // let ret = ''
  if (b === 1) {
    const spacesCount = (baseB - 1) * a.length
    ret = getSpaces(spacesCount) + ret
    for (let i = 0; i < b; i++) {
      ret = a + ret
    }
    ret = getSpaces(spacesCount) + ret

    return ret
  } else {
    const spacesCount = (baseB - b) * a.length
    ret = getSpaces(spacesCount) + ret
    for (let i = 0; i < (b * 2 + 1 - ((baseB - b) * 2)); i++) {
      ret = a + ret
    }
    ret = '\n' + ret

    return pyramid(a, --b, baseB, ret)
  }
}

const getSpaces = (a) => {
  let ret = ''
  for (let i = 0; i < a; i++) ret += ' '
  return ret
}