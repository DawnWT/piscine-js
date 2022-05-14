const getJSON = async (path, ...params) => {
  const url = new URL(path)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value)
  }
  const urlFetch = await fetch(url)
  const json = await urlFetch.json()

  if (json.error) throw new Error(json.error)
  return json.data
}