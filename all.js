const all = async (arr) => {
  const ret = []
  if (typeof arr === 'object' && !Array.isArray(arr)) {
    const retObj = {}
    for (const [key, val] of Object.entries(arr)) {
      ret[key] = await val
    }
    return retObj
  }
  for (const p of arr) ret.push(await p)

  return ret
}