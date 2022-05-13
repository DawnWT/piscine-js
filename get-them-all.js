export const getArchitects = () => {
  return [document.querySelectorAll('a'), document.querySelectorAll(':not(a)')]
}

export const getClassical = () => {
  return [document.querySelectorAll('a.classical'), document.querySelectorAll('a:not(.classical)')]
}

export const getActive = () => {
  return [document.querySelectorAll('a.classical.active'), document.querySelectorAll('a.classical:not(.active)')]
}

export const getBonannoPisano = () => {
  return [document.querySelector('a#BonannoPisano'), document.querySelectorAll('a.classical.active:not(#BonannoPisano)')]
}