const isWinner = async (country) => {
  let resWinner
  try {
    resWinner = await db.getWinner(country)
  } catch (error) {
    return `${country} never was a winner`
  }

  if (resWinner.continent !== 'Europe') return `${country} is not what we are looking for because of the continent`

  let resMatches

  try {
    resMatches = await db.getResults(resWinner.id)
  } catch (error) {
    return `${country} never was a winner`
  }

  if (resMatches.length < 3) return `${country} is not what we are looking for because of the number of times it was champion`

  return `${country} won the FIFA World Cup in ${resMatches.map(el => el.year).join(', ')} winning by ${resMatches.map(el => el.score).join(', ')}`
}