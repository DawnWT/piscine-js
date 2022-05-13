const pick = (obj, str) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (Array.isArray(str) && str.includes(key)) {
      newObj[key] = val
      continue
    }

    if (typeof str === 'string' && key === str) {
      newObj[key] = val
    }
  }
  return newObj;
}