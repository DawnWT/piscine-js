const slice = (arr, start = 0, end = arr.length) => {
  const ret = []
  if (start < 0) start = arr.length + start
  if (end < 0) end = arr.length + end
  for (let i = start; i < end; i++) ret.push(arr[i])

  if (typeof arr === 'string') return ret.join('')
  return ret
}