const defaultChain = { index: 0, hash: '0' }

const blockChain = function (data, prev) {
  if (!prev) prev = defaultChain
  const f = this

  const ret = {
    index: ++prev.index,
    hash: `${index}${prev.hash}${JSON.stringify(data)}`,
    data: data,
    prev: prev
  }
  ret.chain = (data2) => f(data2, ret)
  return ret
}