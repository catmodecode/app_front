export default {
  setDarkMode(state) {
    state.darkMode = true;
  },
  setLightMode(state) {
    state.darkMode = false;
  },
  toggleMode(state) {
    state.darkMode = !state.darkMode;
  },
  wait(state) {
    state.loading = true;
  },
  resume(state) {
    state.loading = false;
  },
};
