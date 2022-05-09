const adder = (arr, start = 0) => arr.reduce((acc, curr) => acc + curr, start)

const sumOrMul = (arr, start = 0) => arr.reduce((acc, curr) => curr % 2 === 0 ? acc * curr : acc + curr, start)

const funcExec = (arr, start = 0) => arr.reduce((acc, curr) => curr(acc), start)