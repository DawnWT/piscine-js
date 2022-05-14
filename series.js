const series = async (arr) => {
  const ret = []
  // if (typeof arr === 'object' && !Array.isArray(arr)) {
  //   const retObj = {}
  //   for (const [key, val] of Object.entries(arr)) {
  //     retObj[key] = val
  //   }
  //   return retObj
  // }
  for (const p of arr) ret.push(await p())

  return ret
}