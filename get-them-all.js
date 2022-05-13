const getArchitects = () => {
  return [document.querySelectorAll('a'), document.querySelectorAll(':not(a)')]
}

const getClassical = () => {
  return [document.querySelectorAll('a.classical'), document.querySelectorAll('a:not(.classical)')]
}

const getActive = () => {
  return [document.querySelectorAll('a.classical.active'), document.querySelectorAll('a.classical:not(.active)')]
}

const getBonannoPisano = () => {
  return [document.querySelector('a#BonannoPisano'), document.querySelectorAll('a.classical.active:not(#BonannoPisano)')]
}