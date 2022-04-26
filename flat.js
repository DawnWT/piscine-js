const flat = (a, b) => {
  if (a === 0) {
    return a
  } else {
    const ret = []
    for (const item of a) Array.isArray(item) ? ret.push(...item) : item
    return flat(ret, --b)
  }
}