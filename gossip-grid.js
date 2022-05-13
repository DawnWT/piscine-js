const gossips = [
  `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
  `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
  `WE PAY FOR JUICY INFO!`,
  `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
  `Ed Sheeran comes out of music retirement to write brand new song`,
  `Kylie Jenner & Travis Scott’s breakup timeline`,
  `Quiet on the set: temper tantrums stars hope you forget`,
  `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
  `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
  `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
  `No bite in the big apple? Celine Dion looks scary skinny in New York`,
  `Jennifer Aniston and Brad Pitt relationship timeline`,
  `They shouldn’t have said that: 10 celebrity rants heard around the world`,
  `The most intense celebrity fights on set`,
  `The 18 most bitter real housewives feuds`,
  `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
  `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
]

const renderGossips = () => {
  const oldGossips = document.querySelectorAll('div.gossip')

  for (const oldG of oldGossips) oldG.remove()

  for (const [i, gossip] of gossips.entries()) {
    const div = document.createElement('div')
    div.classList.add('gossip')
    if (i === 0) div.classList.add('fade-in')
    div.textContent = gossip

    document.body.append(div)
  }
}

export const grid = () => {
  // const styleW = document.createElement('style')
  // const styleFS = document.createElement('style')
  // const styleBG = document.createElement('style')

  // document.head.append(styleW, styleFS, styleBG)
  // nsm la facon dont ait obligé de faire est deguelasse

  const rangesDiv = document.createElement('div')
  rangesDiv.classList.add('ranges')

  const rangeW = document.createElement('input')
  rangeW.type = 'range'
  rangeW.id = 'width'
  rangeW.min = '200'
  rangeW.max = '800'

  rangeW.addEventListener('input', (e) => {
    // styleW.innerHTML = `.gossip { width: ${e.target.value}px; }`
    const gos = document.querySelectorAll('div.gossip')
    for (const g of gos) g.style.width = `${e.target.value}px`
  })

  const rangeFS = document.createElement('input')
  rangeFS.type = 'range'
  rangeFS.id = 'fontSize'
  rangeFS.min = '20'
  rangeFS.max = '40'

  rangeFS.addEventListener('input', (e) => {
    // styleFS.innerHTML = `.gossip { font-size: ${e.target.value}px; }`
    const gos = document.querySelectorAll('div.gossip')
    for (const g of gos) g.style.width = `font-size: ${e.target.value}px`
  })

  const rangeBG = document.createElement('input')
  rangeBG.type = 'range'
  rangeBG.id = 'background'
  rangeBG.min = '20'
  rangeBG.max = '75'

  rangeBG.addEventListener('input', (e) => {
    // styleBG.innerHTML = `.gossip { background: hsl(280, 50%, ${e.target.value}%); }`
    const gos = document.querySelectorAll('div.gossip')
    for (const g of gos) g.style.width = `background: hsl(280, 50%, ${e.target.value}%)`
  })

  rangesDiv.append(rangeW, rangeFS, rangeBG)

  const gossipForm = document.createElement('form')
  gossipForm.classList.add('gossip')

  const formTA = document.createElement('textarea')

  const formSubmit = document.createElement('button')
  formSubmit.type = 'submit'
  formSubmit.textContent = 'Share gossip!'

  gossipForm.append(formTA, formSubmit)

  gossipForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newGossip = e.target.children[0].value
    gossips.unshift(newGossip)
    e.target.children[0].value = ''
    renderGossips()
  })

  document.body.append(rangesDiv, gossipForm)

  renderGossips()
}