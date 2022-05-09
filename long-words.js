const longWords = (arr) => arr.every(w => w.length > 4)

const oneLongWord = (arr) => arr.some(w => w.length > 9)

const noLongWords = (arr) => !arr.some(w => w.length > 6)