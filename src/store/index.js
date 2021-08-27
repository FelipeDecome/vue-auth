import Vue from "vue";
import Vuex from "vuex";
import { store as auth } from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
  },
  modules: {
    auth,
  },
});
