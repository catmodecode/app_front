export default {
  logged: state => state.token.logged() && !state.token.expired()
}