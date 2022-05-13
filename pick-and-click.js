let hslToCopy = ''

const truePick = (e) => {
  const hslDiv = document.querySelector('.hsl'),
    hueDiv = document.querySelector('.hue'),
    lumiDiv = document.querySelector('.luminosity'),
    lineX = document.querySelector('#axisX'),
    lineY = document.querySelector('#axisY')

  const mouseX = e.offsetX,
    mouseY = e.offsetY

  const wX = window.innerWidth,
    wY = window.innerHeight

  const xPer = Math.round((mouseX / wX) * 100),
    yPer = Math.round((mouseY / wY) * 100)

  const hslStr = `hsl(${Math.round(xPer * 3.6)}, 50%, ${yPer}%)`

  hslToCopy = hslStr
  document.body.style.background = hslStr
  hslDiv.textContent = hslStr
  hueDiv.textContent = (Math.round(xPer * 3.6)).toString()
  lumiDiv.textContent = yPer.toString()
  lineX.setAttribute('x1', mouseX)
  lineX.setAttribute('x2', mouseX)
  lineY.setAttribute('y1', mouseY)
  lineY.setAttribute('y2', mouseY)
}

export const pick = () => {
  // TODO create static elements
  const hsl = document.createElement('div')
  hsl.classList.add('hsl')
  document.body.append(hsl)

  const hue = document.createElement('div')
  hue.classList.add('hue')
  document.body.append(hue)


  const luminosity = document.createElement('div')
  luminosity.classList.add('luminosity')
  document.body.append(luminosity)

  const svg = document.createElement('svg')
  svg.style.zIndex = '1000'

  const lineX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  lineX.id = 'axisX'
  lineX.setAttribute('y1', '0')
  lineX.setAttribute('y2', '100%')
  svg.append(lineX)

  const lineY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  lineY.id = 'axisY'
  lineY.setAttribute('x1', '0')
  lineY.setAttribute('x2', '100%')
  svg.append(lineY)

  document.body.append(svg)

  document.addEventListener('mousemove', truePick)
  document.addEventListener('click', () => navigator.clipboard.writeText(hslToCopy))
}