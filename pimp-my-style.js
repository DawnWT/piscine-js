let i = 0
let unpimp = false

export const pimp = () => {
  const btn = document.querySelector('.button')

  if (!unpimp) {
    btn.classList.add(styles[i])
    i++
    if (i === styles.length - 1) {
      unpimp = true
      btn.classList.add('unpimp')
    }
  } else {
    btn.classList.remove(styles[i])
    i--
    if (i === 0) {
      unpimp = false
      btn.classList.remove('unpimp')
    }
  }
}