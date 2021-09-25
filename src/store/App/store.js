import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    darkMode: true,
    loading: false,
  },
  mutations,
  actions,
};
