const deepCopy = (obj) => {
  if (Array.isArray(obj)) return obj.slice()
  return Object.Assign({}, obj)
}