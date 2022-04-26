const flat = (a, b = 1) => {
  if (a === 0) {
    return a
  } else {
    const ret = []
    let fullFlat = true
    for (const item of a) {
      if (Array.isArray(item)) {
        ret.push(...item)
        fullFlat = false
      }
      ret.push(item)
    }
    if (fullFlat) return ret
    return flat(ret, --b)
  }
}