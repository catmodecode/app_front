export default (to, from, next) => {
  if (to.meta.requiresAuth && !store().getters["auth/logged"]) {
    next(from)
  } else {
    next()
  }
}
