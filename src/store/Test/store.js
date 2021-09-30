import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: () => ({
    sstate: 0,
  }),
  mutations,
  actions,
};
