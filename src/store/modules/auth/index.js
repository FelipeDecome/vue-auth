import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

const store = {
  state,
  actions,
  mutations,
  namespaced: true,
};

export { store };
