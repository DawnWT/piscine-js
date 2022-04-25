const earthData = {
  year: 1,
  days: 365.25,
  seconds: 31557600
}
const mercury = 0.2408467
const venus = 0.61519726
const mars = 1.8808158
const jupiter = 11.862615
const saturn = 29.447498
const uranus = 84.016846
const neptune = 164.79132

const dogYears = (a, b) => {
  b = (b / earthData.seconds) * 7
  let res = b

  if (a === 'earth') {
    res = b
  } else if (a === 'mercury') {
    res *= mercury
  } else if (a === 'venus') {
    res *= venus
  } else if (a === 'mars') {
    res *= mars
  } else if (a === 'jupiter') {
    res *= jupiter
  } else if (a === 'saturn') {
    res *= saturn
  } else if (a === 'uranus') {
    res *= uranus
  } else if (a === 'neptune') {
    res *= neptune
  }

  return Math.round(res * 100) / 100
}