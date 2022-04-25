const isPositive = (a) => a > 0

const abs = (a) => {
  if (typeof a === "number" && a === 0) return 0
  if (!isPositive(a)) return -a
}