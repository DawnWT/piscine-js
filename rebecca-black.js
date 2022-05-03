const isFriday = (date) => {
  if (date.getDay() === 5) return true
  return false
}

const isWeekend = (date) => {
  if (date.getDay() > 5) return true
  return false
}

const isLeapYear = (date) => {
  const y = date.getFullYear()
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) return true
  return false
}

const isLastDayOfMonth = (date) => {
  const day = date.getDate()
  date.setDate(day + 1)

  if (date.getDate() === 1) return true
  return false
}