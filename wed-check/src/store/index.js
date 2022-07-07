import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: ["bob", "sam"],
  },
  getters: {
    people(state) {
      return state.people;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
