const arrToSet = (a) => {
  const ret = new Set()

  for (const item of a) ret.add(item)

  return ret
}

const arrToStr = (a) => a.map(w => w.toString()).join('')

const setToArr = (a) => {
  const ret = []
  a.forEach((item) => ret.push(item))
  return ret
}

const setToStr = (a) => {
  const ret = []
  a.forEach((item) => ret.push(item))
  return ret.join('')
}

const strToArr = (a) => a.split('')

const strToSet = (a) => new Set(strToArr(a))

const mapToObj = (a) => {
  const ret = {}

  a.forEach((val, key) => ret[key] = val)

  return ret
}

const objToArr = (a) => {
  const ret = []
  for (const val of Object.values(a)) ret.push(val)
  return ret
}

const objToMap = (a) => {
  const ret = new Map()
  for (const [key, val] of Object.entries(a)) ret.set(key, val)
  return ret
}

const arrToObj = (a) => {
  const ret = {}
  for (const [i, item] of a.entries()) ret[i] = item
  return ret
}

const strToObj = (a) => {
  const ret = {}
  for (const [i, item] of a.split('').entries()) ret[i] = item
  return ret
}

const superTypeOf = (a) => {
  const t = typeof a
  if (a === null) return 'null'
  if (t === 'undefined') return t
  if (t !== "object") return (t[0].toUpperCase() + t.substring(1))
  if (Array.isArray(a)) return 'Array'
  if (a instanceof Map) return 'Map'
  if (a instanceof Set) return 'Set'
  if (a instanceof Object) return 'Object'
}