const dayOfTheYear = (date) => {
  const y = date.getFullYear()
  const dayY = new Date(y < 10 ? '000' + y : (y < 100 ? '00' + y : (y < 1000 ? '0' + y : y)))

  const mili = date.valueOf() - dayY.valueOf()

  return Math.floor(mili / 1000 / 60 / 60 / 24)
}