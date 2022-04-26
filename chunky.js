const chunk = (a, b) => {
  const ret = []

  while (a.length > 0) {
    if (a.length > b) {
      ret.push(a.splice(0, b))
    } else {
      ret.push(a)
      a = []
    }
  }

  return ret
}