const reverse = (a) => {
  const ret = []
  for (let i = a.length - 1; a > -1; i--) ret.push(a[i])
  return ret
}