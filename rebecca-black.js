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
  date.setDate(day + 1)
  const dayy = date.getDate()

  if (dayy === 1) return true
  return false
}