import payload from '~/static/m2-payload-navbar.json'

export default {
  actions: {
    async fetchNav({ commit }) {
      commit('setNav', payload.section_navbar)
    }
  },
  mutations: {
    setNav(state, items) {
      state.navbar = items
    },
  },
  getters:{
    getNav(state) {
      return state.navbar || {}
    }
  },
  state: {
    navbawr: {}
  }
}
