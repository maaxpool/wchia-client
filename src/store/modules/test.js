export default {
  namespaced: true,
  state: {
    test: undefined,
  },
  getters: {
    test: state => {
      return state.user
    },
  },
  mutations: {
    setTest (state, user) {
      state.user = user
      localStorage.setItem(process.env.VUE_APP_USER_KEY, JSON.stringify(user))
    },
  }
}
