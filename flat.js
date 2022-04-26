const flat = (a, b = 1) => {
  if (b === 0) {
    return a
  } else {
    const ret = []
    let fullFlat = true
    for (const item of a) {
      if (Array.isArray(item)) {
        ret.push(...item)
        fullFlat = false
      } else {
        ret.push(item)
      }
    }
    if (fullFlat) return ret
    return flat(ret, --b)
  }
}