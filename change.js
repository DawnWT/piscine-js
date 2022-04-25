Object.prototype.get = (a) => {
  if (!this) return undefined
  return this[a] || undefined
}

Object.prototype.get = (a, b) => {
  if (!this) return undefined
  this[a] = b
  return b
}