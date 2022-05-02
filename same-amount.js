const sameAmount = (a, b, c) => {

  const d = new RegExp(b.source, b.flags + 'g')
  const e = new RegExp(c.source, c.flags + 'g')

  const f = a.matchAll(d)
  const g = a.matchAll(e)

  if (f.length === g.length) return true
  return false
}