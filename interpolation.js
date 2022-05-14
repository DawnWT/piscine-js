const interpolation = ({ step, start, end, callback, duration }) => {
  let i = 0
  const interval = setInterval(() => {
    const point = [start + i * (end / step), start + (i + 1) * (duration / step)]
    callback(point)

    if (i++ === step - 1) clearInterval(interval)
  }, duration / step)
}