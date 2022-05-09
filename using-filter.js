const filterShortStateName = (arr) => arr.filter(w => w.length < 7)

const filterStartVowel = (arr) => arr.filter(w => w.match(/^[aeiou]/gi))

const filter5Vowels = (arr) => arr.filter(w => w.match(/(.*[aeiou].*){5,}/gi))

const filter1DistinctVowel = (arr) => arr.filter(w => {
  const vowels = 'aeiouAEIOU'
  let wordVowel = ''
  // let keep = true
  for (const char of w) {
    if (wordVowel === '' && vowels.includes(char)) {
      wordVowel = char
      continue
    }

    if (!vowels.includes(char)) continue

    if (wordVowel !== char) {
      return false
    }
  }
  return true
})

const multiFilter = (arr) => arr.filter(w => w.capital.length > 8 && w.name.match(/^[^aeiou]]/gi) && w.tag.match(/[aeiou]{1,}/gi) && w.region !== 'South')