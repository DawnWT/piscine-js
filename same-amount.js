const sameAmount = (a, b, c) => {

  const d = new RegExp(b.source, b.flags + 'g')
  const e = new RegExp(c.source, c.flags + 'g')

  const f = a.matchAll(d)
  const g = a.matchAll(e)

  let flen = 0
  let glen = 0
  for (const a of f) flen += 1
  for (const a of g) glen += 1

  if (flen === glen) return true
  return false
}