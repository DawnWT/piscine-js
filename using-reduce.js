const adder = (arr) => arr.reduce((acc, curr) => acc + curr)

const sumOrMul = (arr) => arr.reduce((acc, curr) => curr % 2 === 0 ? acc * curr : acc + curr)

const funcExec = (arr) => arr.reduce((acc, curr) => curr())