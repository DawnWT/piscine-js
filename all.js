const all = async (arr) => {
  const ret = []
  for (const p of arr) ret.push(await p())

  return ret
}