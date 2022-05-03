const matchCron = (cron, date) => {
  cron = cron.split(' ')

  const obj = {
    minute: cronProp(cron, 0),
    hour: cronProp(cron, 1),
    dayM: cronProp(cron, 2),
    month: cronProp(cron, 3),
    dayW: cronProp(cron, 4)
  }

  if (obj.minute) {
    if (date.getMinutes() !== obj.minute) return false
  }

  if (obj.hour) {
    if (date.getHours() !== obj.hour) return false
  }

  if (obj.dayM) {
    if (date.getDate() !== obj.dayM) return false
  }

  if (obj.month) {
    if (date.getMonth() + 1 !== obj.month) return false
  }

  if (obj.dayW) {
    if (date.getDay() !== obj.dayW) return false
  }

  return true
}

const cronProp = (cron, id) => {
  return cron[id] === '*' ? null : Number(cron[id])
}