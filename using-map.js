const citiesOnly = (arr) => arr.map(v => v.city)

const upperCasingStates = (arr) => arr.map(v => v.split(' ').map(w => w[0].toUpperCase() + w.substring(1)).join(' '))

const fahrenheitToCelsuis = (arr) => arr.map(v => {
  const nb = Number(v.slice(0, -2))

  return (nb - 32) * 5 / 9
})

const trimTemp = (arr) => arr.map(v => v.temperature.trim())

const tempForecasts = (arr) => arr.map(v => {
  const nbTemp = Number(v.temperature.trim().slice(0, -2))

  return `${nbTemp}°Celsius in ${v.city}, ${v.state[0].toUpperCase() + v.state.substring(1)}`
})