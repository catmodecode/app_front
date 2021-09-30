import actions from './actions'
import mutations from './mutations'
import Token from './Token';
import getters from './getters';

export default {
  namespaced: true,
  state: () => ({
    token: new Token()
  }),
  mutations,
  actions,
  getters,
};
