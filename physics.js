const getAcceleration = (a) => {
  if (a && a.f && a.m) {
    return a.f / a.m
  }
  return 'impossible'
}