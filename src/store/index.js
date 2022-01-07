import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state';

import profile from './Profile'
import auth from './Auth'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = createStore({
  modules: {
    profile,
    auth,
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
  plugins: [
    createMultiTabState({
      key: 'app',
      statesPaths: ['auth']
    }),
  ],
})

export default store(function (/* { ssrContext } */) {
  return Store
})

export {
  Store
}
