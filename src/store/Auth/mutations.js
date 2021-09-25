export default {
  setTokens(state, { accessToken, refreshToken, accessExpired }) {
    console.log(new Date(accessExpired).toLocaleDateString(), accessExpired);
    state.token.setTokens(accessToken, refreshToken, accessExpired);
  },
  clearTokens(state) {
    state.token.clear();
  },
};
