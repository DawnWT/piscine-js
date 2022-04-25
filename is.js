is.num = (a) => typeof a === 'number'
is.nan = (a) => Number.isNaN(a)
is.str = (a) => typeof a === 'string'
is.bool = (a) => typeof a === 'boolean'
is.undef = (a) => typeof a === 'undefined'
is.def = (a) => typeof a !== 'undefined'
is.arr = (a) => Array.isArray(a)
is.obj = (a) => true
is.fun = (a) => typeof a === 'function'
is.truthy = (a) => Boolean(a)
is.falsy = (a) => !Boolean(a)