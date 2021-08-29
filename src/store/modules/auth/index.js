import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const store = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};

export { store };
