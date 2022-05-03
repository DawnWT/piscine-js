const isValid = (date) => {
  if (typeof date === 'number') date = new Date(date)
  if (date instanceof Date && date.valueOf()) return true
  return false
}

const isAfter = (date, date2) => {
  if (!isValid(date) || !isValid(date2)) return false

  const val = date.valueOf()
  const val2 = date2.valueOf()

  if (val > val2) return true
  return false
}

const isBefore = (date, date2) => {
  if (!isValid(date) || !isValid(date2)) return false

  return !isAfter(date, date2)
}

const isFuture = (date) => {
  if (!isValid(date)) return false
  const dateN = new Date().now()

  if (date.valueOf() > dateN) return true
  return false
}

const isPast = (date) => {
  if (!isValid(date)) return false

  return !isFuture(date)
}