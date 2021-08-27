const mutationsTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
};

const mutations = {
  [mutationsTypes.SET_USER](state, payload) {
    state.user = payload;
  },

  [mutationsTypes.SET_TOKEN](state, payload) {
    state.token = payload;
  },
};

export { mutations, mutationsTypes };
