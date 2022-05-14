const all = async (arr) => {
  let ret = []
  if (typeof arr === 'object' && !Array.isArray(arr)) return {}
  for (const p of arr) ret.push(await p())

  return ret
}