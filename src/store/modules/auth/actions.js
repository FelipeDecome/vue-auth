import { config } from "../../../config/localstorage";

import { api } from "../../../services/api";
import { mutationsTypes } from "./mutations";

const actions = {
  async login({ commit }, { email, password }) {
    const { data } = await api.post("sessions", { email, password });
    const { user, token } = data;

    localStorage.setItem(config.paths.auth.user, JSON.stringify(user));
    localStorage.setItem(config.paths.auth.token, JSON.stringify(token));

    commit(mutationsTypes.SET_USER, user);
    commit(mutationsTypes.SET_TOKEN, token);
  },
  logout({ commit }) {
    localStorage.removeItem(config.paths.auth.user);
    localStorage.removeItem(config.paths.auth.token);

    commit(mutationsTypes.SET_USER, {});
    commit(mutationsTypes.SET_TOKEN, null);
  },
};

export { actions };
