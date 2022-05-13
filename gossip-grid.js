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

const renderGossip = (gossip) => {
  const div = document.createElement('div')
  div.classList.add('gossip')
  div.textContent = gossip

  document.body.append(div)
}

export const grid = () => {
  const style = document.querySelector('style')

  const rangesDiv = document.createElement('div')
  rangesDiv.classList.add('ranges')

  const rangeW = document.createElement('input')
  rangeW.type = 'range'
  rangeW.id = 'width'
  rangeW.min = '200'
  rangeW.max = '800'

  rangeW.addEventListener('input', (e) => {
    style.innerHTML += `\n.gossip { width: ${e.target.value}px; }\n`
  })

  const rangeFS = document.createElement('input')
  rangeFS.type = 'range'
  rangeFS.id = 'fontSize'
  rangeFS.min = '20'
  rangeFS.max = '40'

  rangeFS.addEventListener('input', (e) => {
    style.innerHTML += `\n.gossip { font-size: ${e.target.value}px; }\n`
  })

  const rangeBG = document.createElement('input')
  rangeBG.type = 'range'
  rangeBG.id = 'background'
  rangeBG.min = '20'
  rangeBG.max = '75'

  rangeBG.addEventListener('input', (e) => {
    style.innerHTML += `\n.gossip { background: hsl(280, 50%, ${e.target.value}%); }\n`
  })

  rangesDiv.append(rangeW, rangeFS, rangeBG)

  const gossipForm = document.createElement('form')
  gossipForm.classList.add('gossip')

  const formTA = document.createElement('textarea')
  formTA.value = 'Share gossip!'

  const formSubmit = document.createElement('input')
  formSubmit.type = 'submit'
  formSubmit.value = 'Share gossip!'

  gossipForm.append(formTA, formSubmit)

  gossipForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newGossip = e.target.children[0].value
    gossips.push(newGossip)
    e.target.children[0].value = ''
    renderGossip(newGossip)
  })

  document.body.append(rangesDiv, gossipForm)

  for (const gossip of gossips) {
    renderGossip(gossip)
  }
  gossips.unshift('Share gossip!')
}