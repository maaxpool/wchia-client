export default {
  namespaced: true,
  state: {
    active: '',
    wrap: {
      list: [],
      page: 1,
      total: 0
    },
    unwrap: {
      list: [],
      page: 1,
      toatl: 0
    }
  },
  getters: {
    active: state => state.active,
    wrapList: state => state.wrap,
    unwrapList: state => state.unwrap
  },
  mutations: {
    active(store, active) {
      store.active = active
    },
    page(store, page) {
      store[store.active]['page'] = page
    },
    list(store, data) {
      store[store.active]['total'] = data.toatl
      store[store.active]['list'] = data.transactions
    }
  }
}
