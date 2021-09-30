import axios from "axios";

export default {
  test({ commit }, { val }) {
    commit("test", { val });
  },
};
