import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import user from "./User";
import menu from "./Menu";
import app from "./App";
import auth from "./Auth"


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      menu,
      app,
      auth,
    },
    strict: process.env.DEBUGGING,
  });

  
  return Store
})
