import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import user from "./User";
import menu from "./Menu";
import app from "./App";


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      menu,
      app,
    },
    strict: process.env.DEBUGGING,
  });

  return Store
})
