const sign = (a) => a > 0 ? 1 : (a < 0 ? -1 : 0)

const sameSign = (a, b) => sign(a) === sign(b)