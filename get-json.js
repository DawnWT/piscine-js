// const fakeFetch = async ({ data, error, ...opts } = {}) => ({
//   ok: !opts.status,
//   type: 'basic',
//   status: 200,
//   statusText: 'OK',
//   json: async () => ({ data, error }),
//   text: async () => JSON.stringify({ data, error }),
//   ...opts,
// })

// const error = `oops: ${Math.random()}`
// fetch = (url) => fakeFetch({ url, error })

const getJSON = async (path, params) => {
  let url = path
  const entries = Object.entries(params)
  if (entries.length > 0) url += '?'
  for (const [key, value] of entries) {
    url += `${key}=${typeof value === 'string' ? value.split(' ').join('+') : value}&`
  }
  const urlFetch = await fetch(url.slice(0, -1))
  const json = await urlFetch.json()

  if (urlFetch.statusText === 'OK' && json.data) return json.data
  throw new Error(json.error || urlFetch.statusText)
}