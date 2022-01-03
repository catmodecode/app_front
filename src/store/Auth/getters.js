export function logged (state) {
  return !!state.token
}

export function isAdmin (state) {
  return state.groups.findIndex((v) => v === 1) >= 0
}
