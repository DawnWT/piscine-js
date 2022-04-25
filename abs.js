const isPositive = (a) => a > 0

const abs = (a) => isPositive(a) ? a : (a == 0 ? 0 : -a)