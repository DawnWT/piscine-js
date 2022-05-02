const sameAmount = (a, b, c) => {
  const d = a.matchAll(b)
  const e = a.matchAll(c)

  if (d.length === e.length) return true
  return false
}