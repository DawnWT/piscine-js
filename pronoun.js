const pronouns = ['i', 'you', 'he', 'she', 'we', 'they', 'it']

const pronoun = (str) => {
  const ret = {}
  const splitted = str.toLowerCase().split(/[ \n,:.]/)

  for (const [i, word] of splitted.entries()) {
    if (pronouns.includes(word)) {
      if (ret[word] === undefined) ret[word] = { word: [], count: 0 }

      ret[word].count += 1
      if (i < splitted.length - 1 && !pronouns.includes(splitted[i + 1])) ret[word].word.push(splitted[i + 1])
    }
  }

  return ret
}