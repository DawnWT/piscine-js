const getJSON = async (path, params) => {
  const url = path
  const entries = Object.entries(params)
  if (entries.length > 0) url += '?'
  for (const [key, value] of entries) {
    url += `${key}=${value}&`
  }
  const urlFetch = await fetch(url.slice(0, -1))
  const json = await urlFetch.json()

  if (json.error) throw new Error(json.error)
  return json.data
}