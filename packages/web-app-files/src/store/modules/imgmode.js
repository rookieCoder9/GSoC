export default {
  namespaced: true,
  state: () => ({
    active: false
  }),
  mutations: {
    TOGGLE(state) {
      state.active = !state.active
    }
  },
  actions: {
    toggle({ commit }) {
      commit('TOGGLE')
    }
  }
}
