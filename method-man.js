const words = (a) => a.split(' ')

const sentence = (a) => a.join(' ')

const yell = (a) => a.toUpperCase()

const whisper = (a) => `*${a.toLowerCase()}*`

const capitalize = (a) => {
  const b = a.toLowerCase()

  const arr = b.split(' ')
  arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1)

  return arr.join(' ')
}