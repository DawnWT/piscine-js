const replica = (initialObj, ...objs) => {
  for (const obj of objs) initialObj = { ...initialObj, ...obj }
  return initialObj
}