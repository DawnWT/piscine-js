const defaultChain = { index: 0, hash: '0' }

const blockChain = function (data, prev) {
  if (!prev) prev = defaultChain
  const f = blockChain

  const retIndex = prev.index + 1
  const ret = {
    index: retIndex,
    data: data,
    prev: prev,
    hash: hashCode(`${retIndex}${prev.hash}${JSON.stringify(data)}`)
  }
  ret.chain = (data2) => f(data2, ret)
  return ret
}