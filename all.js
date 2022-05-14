const all = async (arr) => {
  const ret = []
  if (typeof arr === 'object' && !Array.isArray(arr)) arr = Object.values(arr)
  for (const p of arr.entries()) ret.push(await p())

  return ret
}