export const generateClasses = () => {
  const styleTag = document.createElement('style')

  for (const color of colors) {
    styleTag.innerHTML += `.${color} {\n background-color: ${color};\n}\n`
  }

  document.head.append(styleTag)
}

export const generateColdShades = () => {
  for (const color of colors) {
    const div = document.createElement('div')
    div.classList.add(color)
    div.textContent = color
    document.body.append(div)
  }
}

export const choseShade = (shade) => {
  const divs = document.querySelectorAll('div')

  for (const el of divs) {
    el.classList.value = shade
  }
}