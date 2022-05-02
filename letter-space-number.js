const check = /[a-zA-Z] [[:digit:]][^[:digit:]a-zA-Z]/g

const letterSpaceNumber = (str) => {
  str += ' '
  const ret = str.matchAll(check)

  ret.map(v => {
    return [v[0], v[1], v[2]]
  })
}