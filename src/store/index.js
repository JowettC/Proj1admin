import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      localStorage.setItem("token", JSON.stringify(payload));
      state.token = payload;
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_TOKEN", JSON.parse(localStorage.getItem("token")));
    },
    login: ({ commit }, payload) => {
      commit("SET_TOKEN", payload);
    },
    logout: ({ commit }) => {
      commit("SET_TOKEN", null);
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return state.token;
    },
  },
  modules: {},
});