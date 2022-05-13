const authorized = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n', 'Backspace', 'Escape']

const randomNb = (n) => {
  const max = 10 * (n - 1)
  const nb = Math.floor(Math.random() * max)
  let str = nb.toString()
  for (let i = 0; i < n - 1; i++) if (nb < (10 * (i + 1))) str = `0${str}`
  return str
}

const trueCompose = (e) => {
  if (!authorized.includes(e.key)) return

  if (e.key === 'Backspace') {
    const lastDiv = document.querySelector('div:last-child')
    lastDiv.remove()

    return
  }

  if (e.key === 'Escape') {
    const divs = document.querySelectorAll('div')
    for (const div of divs) div.remove()

    return
  }

  const div = document.createElement('div')
  div.classList.add('note')
  div.textContent = e.key
  div.style.background = `#${randomNb(6)}`

  document.body.append(div)
}

export const compose = () => {
  document.addEventListener('keydown', trueCompose)
}