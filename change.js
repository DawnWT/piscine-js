Object.prototype.get = (a) => {
  return this[a] || undefined
}

Object.prototype.get = (a, b) => {
  if (!this[a]) {
    return undefined
  }
  this[a] = b
  return b
}