const vowels = /[aeiouAEIOU]/g

const vowelDots = (str) => {
  let ret = ''

  const res = str.matchAll(vowels)

  for (const a of res) {
    const sub = str.substring(0, a.index + 1)
    str = str.slice(a.index + 1)
    ret += (sub + '.')
  }

  return ret
}