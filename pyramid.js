const pyramid = (a, b, baseCount = b, ret = '') => {
  // let ret = ''
  if (b === 1) {
    const spacesCount = (baseCount - 1) * a.length
    ret = getSpaces(spacesCount) + ret
    for (let i = 0; i < b; i++) {
      ret = a + ret
    }
    ret = getSpaces(spacesCount) + ret

    return ret
  } else {
    const spacesCount = (baseCount - b) * a.length
    ret = getSpaces(spacesCount) + ret
    for (let i = 0; i < b; i++) {
      ret = a + ret
    }
    ret = '\n' + getSpaces(spacesCount) + ret

    return pyramid(a, --b, baseCount, ret)
  }
}

const getSpaces = (a) => {
  let ret = ''
  for (let i = 0; i < a; i++) ret += ' '
  return ret
}