const findExpression = (nb, total = 1, str = '') => {
  if (total === nb) {
    return str
  } else {
    findExpression(nb, total + 4, str += add4)
    findExpression(nb, total * 2, str += mul2)
  }
}