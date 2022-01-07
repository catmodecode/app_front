import store from "src/store";

export default (to, from, next) => {
  if (to.meta.requiresAdmin && !store().getters["auth/isAdmin"]) {
    next(from)
  } else {
    next()
  }
}
