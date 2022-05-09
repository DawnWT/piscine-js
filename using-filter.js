const filterShortStateName = (arr) => arr.filter(w => w.length < 7)

const filterStartVowel = (arr) => arr.filter(w => w.match(/^[aeiouAEIOU]/gi))

const filter5Vowels = (arr) => arr.filter(w => w.match(/[aeiouAEIOU]{5,}/gi))

const filter1DistinctVowel = (arr) => arr.filter(w => w.match(/[aeiouAEIOU]{1,}/gi))

const multiFilter = (arr) => arr.filter(w => w.capital.length > 8 && w.name.match(/^[^aeiouAEIOU]]/gi) && w.tag.match(/[aeiouAEIOU]{1,}/gi) && w.region !== 'South')