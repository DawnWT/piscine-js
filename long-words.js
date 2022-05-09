const longWords = (arr) => arr.length === arr.filter(w => w.length > 4).length ? true : false

const oneLongWord = (arr) => arr.filter(w => w.length > 9).length > 0 ? true : false

const noLongWords = (arr) => arr.filter(w => w.length > 6).length === 0 ? true : false