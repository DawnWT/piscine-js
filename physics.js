const getAcceleration = (a) => {
  if (!a) return 'impossible'
  if (a.f && a.m) return a.f / a.m
  if (a.Δv && a.Δt) return a.Δv / a.Δt
  if (a.d && a.t) return (2 * a.d) / (a.t * a.t)
  return 'impossible'
}