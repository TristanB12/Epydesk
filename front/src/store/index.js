import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    autologin: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAutologin(state, autologin) {
      state.autologin = autologin;
    },
  },
  actions: {
    setUser({commit}, user) {
      commit('setUser', user)
    },
    setAutologin({commit}, autologin) {
      commit('setAutologin', autologin)
    },
  },
  modules: {
  }
})
