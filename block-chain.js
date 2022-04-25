const defaultChain = { index: 0, hash: '0' }

const blockChain = function (data, prev) {
  // console.log(data, prev);
  if (!prev) prev = defaultChain
  const f = this
  // console.log(data, prev);

  const ret = {
    index: prev.index + 1,
    data: data,
    prev: prev
  }
  ret.hash = hashCode(`${ret.index}${prev.hash}${JSON.stringify(data)}`)
  ret.chain = (data2) => f(data2, ret)
  return ret
}