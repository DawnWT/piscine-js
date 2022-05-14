const all = async (arr) => {
  let ret = []
  if (typeof arr === 'object' && !Array.isArray(arr)) ret = {}
  else for (const p of arr) ret.push(await p())

  return ret
}