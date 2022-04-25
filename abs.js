const isPositive = (a) => a > 0

const abs = (a) => {
  if (!isPositive(a)) return -a
}