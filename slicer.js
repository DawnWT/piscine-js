const slice = (arr, start = 0, end = arr.length) => {
  const ret = []
  for (let i = start; i < end; i++) ret.push(arr[i])

  if (typeof arr === 'string') return ret.join('')
  return ret
}