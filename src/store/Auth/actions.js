import axios from "axios";
import ActionError from "src/classes/ActionError";

export default {
  authentificate({ commit }, { email, password }) {
    axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then((data) => {
        commit("setTokens", {
          accessToken: data.data.access,
          refreshToken: data.data.refresh,
          accessExpired: data.data.access_expired,
        });
      })
      .catch((e) => {
        throw new ActionError("Неправильные логин или пароль", e);
      });
  },
  refresh({ commit }) {
    if (this.refreshToken === null) {
      throw new ActionError("Необходимо авторизоваться");
    }
    axios
      .post("/api/auth/refresh", {
        token: this.refreshToken,
      })
      .then((data) => {
        commit("setTokens", {
          accessToken: data.data.access,
          refreshToken: data.data.refresh,
          accessExpired: data.data.access_expired,
        });
      })
      .catch((e) => {
        throw new ActionError("Необходимо авторизоваться");
      });
  },
  tryAuth({ commit }) {
    if (this.refreshToken === null) {
      return
    }
    axios
      .post("/api/auth/refresh", {
        token: this.refreshToken,
      })
      .then((data) => {
        commit("setTokens", {
          accessToken: data.data.access,
          refreshToken: data.data.refresh,
          access_expired: data.data.access_expired,
        });
      })
      .catch((e) => {
        commit("clearTokens");
      });
  },
};
