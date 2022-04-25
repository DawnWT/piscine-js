const first = (a) => {
  if (a.length && a.length > 0) {
    return a[0]
  }
  return undefined
}

const last = (a) => {
  if (a.length && a.length > 0) {
    return a[a.length - 1]
  }
  return undefined
}

const kiss = (a) => {
  return [last(a), first(a)]
}