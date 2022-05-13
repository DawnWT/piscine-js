export const generateLetters = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const fSize = 10
  for (let i = 0; i < 120; i++) {
    const div = document.createElement('div')
    const randomLetter = letters[Math.floor(Math.random() * letters.length)]

    div.style.fontSize = `${++fSize}px`

    if (i < 40) {
      div.style.fontWeight = '300'
    } else if (i < 80) {
      div.style.fontWeight = '400'
    } else {
      div.style.fontWeight = '600'
    }

    div.append(randomLetter)

    document.body.append(div)
  }
}