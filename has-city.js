const hasCity = (country, arr) => {
  return (a) => {
    if (arr.indexOf(a) !== -1) return `${a} is a city from ${country}`
    return `${a} is not a city from ${country}`
  }
} 