const get = (src, path) => {
  const pathSplit = path.split('.')
  for (const obj of pathSplit) {
    src = src[obj]
  }
  return src
}