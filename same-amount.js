const sameAmount = (a, b, c) => {

  let d = a.match(b)
  let e = a.match(c)
  let dCount = 0
  let eCount = 0
  while (d !== null && e !== null) {

    if (d) {
      dCount += 1
      d = a.match(b)
    }
    if (e) {

      eCount += 1
      e = a.match(c)
    }
  }

  if (d.length === e.length) return true
  return false
}