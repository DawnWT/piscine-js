const get = (src, path) => {
  const pathSplit = path.split('.')
  for (const obj of pathSplit) {
    src = src[obj]
    if (src === undefined) return src
  }
  return src
}