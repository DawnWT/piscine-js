const authorized = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n', 'Backspace', 'Escape']

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

  document.body.append(div)
}

export const compose = () => {
  document.addEventListener('keypress', trueCompose)
}