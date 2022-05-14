const fusion = (...obj) => {
  const retObj = obj[0]

  for (let i = 1; i < obj.length; i++) {
    const nextObj = obj[i]

    for (const [key, val] of Object.entries(nextObj)) {
      if (retObj[key] === undefined) {
        retObj[key] = val
      } else {
        if (Array.isArray(val) && Array.isArray(retObj[key])) {
          retObj[key].push(val)
        } else if (typeof val === 'string' && typeof retObj[key] === 'string') {
          retObj[key] = retObj[key] + " " + val
        } else if (typeof val === 'number' && typeof retObj[key] === 'number') {
          retObj[key] += val
        } else if (typeof val === 'object' && typeof retObj[key] === 'object') {
          retObj[key] = fusion(retObj[key], val)
        } else {
          retObj[key] = val
        }
      }
    }
  }
  return retObj
}
