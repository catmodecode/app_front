import actions from './actions'
import mutations from './mutations'
import Token from 'src/classes/Token';

export default {
  namespaced: true,
  state: {
    token: new Token()
  },
  mutations,
  actions,
};
