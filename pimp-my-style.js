let i = 0
let unpimp = false
//const styles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];

export const pimp = () => {
  const btn = document.querySelector('.button')

  if (!unpimp) {
    btn.classList.add(styles[i])
    if (i === styles.length - 1) {
      unpimp = true
      btn.classList.add('unpimp')
    } else {
      i++
    }
  } else {
    btn.classList.remove(styles[i])
    if (i === 0) {
      unpimp = false
      btn.classList.remove('unpimp')
    } else {
      i--
    }
  }
}