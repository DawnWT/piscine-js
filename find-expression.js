const findExpression = (nb, total = 1, str = '') => {
  if (total === nb) {
    return '1' + str
  } else {
    if (total > nb) return undefined
    const res2 = findExpression(nb, total * 2, str + (' ' + mul2))
    if (res2) return res2
    const res1 = findExpression(nb, total + 4, str + (' ' + add4))
    if (res1) return res1
    return undefined
  }
}