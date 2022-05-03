const dayOfTheYear = (date) => {
  const y = date.getFullYear()
  const dayY = new Date(y.toString())

  const mili = date.valueOf() - dayY.valueOf()

  return Math.floor(mili / 1000 / 60 / 60 / 24)
}