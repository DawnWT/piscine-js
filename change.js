const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

const get = (a) => sourceObject[a]

const set = (a, b) => {
  sourceObject[a] = b
  return b
}