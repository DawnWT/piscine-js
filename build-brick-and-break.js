export const build = (n) => {
  let i = 0
  const interval = setInterval(() => {
    const brick = document.createElement('div')
    brick.id = `brick-${i + 1}`

    if (i % 3 === 1) brick.dataset.foundation = true

    document.body.append(brick)

    if (i === n - 1) clearInterval(interval)

    i++
  }, 100)
}

export const repair = (...ids) => {
  for (const id of ids) {
    const brick = document.querySelector(`#brick-${id}`)
    brick.setAttribute('repaired', id % 3 === 2 ? 'in progress' : true)
  }
}

export const destroy = () => {
  const lastBrick = document.querySelector('div:last-child')

  lastBrick.remove()
}