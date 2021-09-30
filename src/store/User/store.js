import User from './User';
import actions from './actions'
import mutations from './mutations'

export default {
    namespaced: true,
    state: {
        user: new User(null, null, null)
    },
    mutations,
    actions
};
