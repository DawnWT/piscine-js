const invert = (obj) => {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    newObj[val] = key;
  }
  return newObj;
}