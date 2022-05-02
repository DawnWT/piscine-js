const check = /[a-zA-Z] [0-9][^0-9a-zA-Z]/g

const letterSpaceNumber = (str) => {
  str += ' '
  const res = str.matchAll(check)
  const ret = []

  for (const a of res) {
    ret.push(`${a[0][0]}${a[0][1]}${a[0][2]}`)
  }

  return ret
}