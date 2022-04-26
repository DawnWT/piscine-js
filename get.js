const get = (src, path) => {
  const pathSplit = path.split('.')
  if (path.length === 0) {
    return src
  } else {
    src = src[pathSplit[0]]
    if (src === undefined) return undefined
    return get(src, pathSplit.slice(1).join('.'))
  }
}