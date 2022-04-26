const reverse = (a) => {
  const ret = []
  for (let i = a.length - 1; i > -1; i--) ret.push(a[i])
  if (typeof a === 'string') return ret.join('')
  return ret
}