const vowels = /[aeiouAEIOU]/g

const vowelDots = (str) => {
  let ret = ''

  const res = str.matchAll(vowels)

  let lastIndex = 0

  for (const a of res) {
    const strSub = str.slice(lastIndex, a.index + 1)
    const sub = strSub.substring(0, a.index + 1)
    ret += (sub + '.')
    lastIndex = a.index + 1
  }

  const strSub = str.slice(lastIndex, a.index + 1)
  const sub = strSub.substring(0, a.index + 1)
  ret += (sub + '.')

  return ret
}