const recuReplica = (obj1, obj2) => {
  if (typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 instanceof RegExp) return obj2
  if (typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 instanceof RegExp) return obj2

  for (const [key, val] of Object.entries(obj2)) {
    obj1[key] = recuReplica(obj1[key], val)
  }
  return obj1
}

const replica = (initialObj, ...objs) => {
  for (const obj of objs) {
    recuReplica(initialObj, obj)
  }
  return initialObj
}