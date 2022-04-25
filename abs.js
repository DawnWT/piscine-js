const isPositive = (a) => a > 0

const abs = (a) => {
  if (a === 0) return 0
  if (!isPositive(a)) return -a
}