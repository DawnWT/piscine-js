const defaultChain = { index: 0, hash: '0' }

const blockChain = function (data, prev) {
  // console.log(data, prev);
  if (!prev) prev = defaultChain
  const f = this
  // console.log(data, prev);

  const ret = {
    index: ++prev.index,
    hash: `${this.index}${prev.hash}${JSON.stringify(data)}`,
    data: data,
    prev: prev
  }
  ret.chain = (data2) => f(data2, ret)
  return ret
}