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
  b = b / earthData.seconds

  if (a === 'earth') {
    return b
  } else if (a === 'mercury') {
    return b * mercury
  } else if (a === 'venus') {
    return b * venus
  } else if (a === 'mars') {
    return b * mars
  } else if (a === 'jupiter') {
    return b * jupiter
  } else if (a === 'saturn') {
    return b * saturn
  } else if (a === 'uranus') {
    return b * uranus
  } else if (a === 'neptune') {
    return b * neptune
  }
  return b
}