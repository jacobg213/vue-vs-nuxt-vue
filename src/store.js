import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {},
  },
  mutations: {
    setBook(store, data) {
      store.book = data; // eslint-disable-line no-param-reassign
    },
  },
  actions: {
    async getBook({ commit }) {
      const data = await fetch('https://www.booknomads.com/api/v0/isbn/9789000035526');
      commit('setBook', await data.json());
    },
  },
});
