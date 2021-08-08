import { Store } from "vuex";

export default {
  getAuthStatus() {
    return Store?.auth === null;
  },
};
