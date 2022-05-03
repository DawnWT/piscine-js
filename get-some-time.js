const firstDayWeek = (w, y) => {
  const dateY = new Date(y)
  const valY = dateY.valueOf()

  const valW = valY + ((w - 1) * 7 * 24 * 60 * 60 * 1000)

  const date = new Date(valW)
  if (dateY.getMonth() !== 0 && w !== 1) {
    const a = date.getDay()
    date.setDate(date.getDate() - (a - 1))
  }
  return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getFullYear()}`
}