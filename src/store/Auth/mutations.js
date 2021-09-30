export default {
  setTokens(state, { accessToken, refreshToken, accessExpired }) {
    state.token.setTokens(accessToken, refreshToken, accessExpired);
  },
  clearTokens(state) {
    state.token.clear();
  },
};
