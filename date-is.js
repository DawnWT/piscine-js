const isValid = (date) => {
  if (!Number.isNaN(date.valueOf())) return true
  return false
}

const isAfter = (date, date2) => {
  const val = date.valueOf()
  const val2 = date2.valueOf()

  if (val > val2) return true
  return false
}

const isBefore = (date, date2) => !isAfter(date, date2)

const isFuture = (date) => {
  if (!isValid(date)) return false
  const dateN = Date().now()

  if (date.valueOf() > dateN) return true
  return false
}

const isPast = (date) => !isFuture(date)