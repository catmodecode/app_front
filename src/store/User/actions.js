import ActionError from "src/classes/ActionError";

export default {
  setUser({ commit }, user) {
    if (!user.verify()) {
      throw new ActionError('Что-то пошло не так с получением пользователя');
    }
    commit('setUser', user)
  }
}