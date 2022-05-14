const all = async (arr) => {
  const ret = []
  for (const [i, p] of arr.entries()) ret.push(await p())

  return ret
}