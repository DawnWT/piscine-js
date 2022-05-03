const countLeapYears = (date) => {
  const y = date.getFullYear()

  return Math.floor(y * 0.2425)
}