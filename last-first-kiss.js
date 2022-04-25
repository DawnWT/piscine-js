const first = (a) => {
  if (a.length && a.length > 0) {
    return a[0]
  }
  return null
}

const last = (a) => {
  if (a.length && a.length > 0) {
    return a[a.length - 1]
  }
  return null
}

const kiss = (a) => {
  return [first(a), last(a)]
}