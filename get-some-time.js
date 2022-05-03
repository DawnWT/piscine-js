const firstDayWeek = (w, y) => {
  const dateY = newDate(y)
  const valY = dateY.valueOf()

  const valW = valY + (w * 7 * 24 * 60 * 60 * 1000)

  const date = new Date(valW)
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}