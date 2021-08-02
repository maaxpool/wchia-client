import jsCookie from 'js-cookie'
export default {
    namespaced: true,
    state: {
        "user": null,
        "xch_address": null
    },
    getters: {
        xch_address: state => state.xch_address||jsCookie.get('xch_address'),
        user: state => {
            if (!state.user && jsCookie.get('user'))
                state.user = jsCookie.get('user')
            return JSON.parse(state.user)
        }
    },
    mutations: {
        xch_address (state, xch_address) {
            jsCookie.set('xch_address', xch_address, {expires: 1})
            state.xch_address = xch_address
        },
        user (state, user) {
            jsCookie.set('user', JSON.stringify(user), {expires: 1})
            state.user = user
        }
    }
  }