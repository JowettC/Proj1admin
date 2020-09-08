import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      localStorage.setItem("token", payload);
      state.token = payload;
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_TOKEN", localStorage.getItem("token"));
    },
    login: ({ commit }, payload) => {
      commit("SET_TOKEN", payload);
    },
    logout: () => {
      localStorage.removeItem("token");
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return state.token;
    },
  },
  modules: {},
});
