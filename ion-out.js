const wordReg = /[^, ]*tion[^, ]*/g
const reg = /ion/

const ionOut = (str) => {
  const res = str.matchAll(wordReg)
  const ret = []

  for (const a of res) {
    ret.push(a[0].replace('ion', ''))
  }

  return ret
}