import jsCookie from 'js-cookie'
export default {
    namespaced: true,
    state: {
        "user": null,
        "xch_address": null
    },
    getters: {
        xch_address: state => {
            let xch_address_ = state.xch_address||jsCookie.get('xch_address')
            let usr_ = state.user
            if (jsCookie.get('user')) {
                usr_ = JSON.parse(jsCookie.get('user'))
            }

            if(xch_address_) {
                return xch_address_
            } else if (usr_) {
                return usr_['chia_address']
            }
        },
        user: state => {
            if (!state.user && jsCookie.get('user'))
                state.user = JSON.parse(jsCookie.get('user'))
            
            if (typeof state.user == 'string') {
                return JSON.parse(state.user)
            } else {
                return state.user
            }
            // return typeof state.user == 'string'?JSON.parse(state.user):state.user
        }
    },
    mutations: {
        xch_address (state, xch_address) {
            jsCookie.set('xch_address', xch_address, {expires: 1})
            state.xch_address = xch_address
        },
        user (state, user) {
            jsCookie.set('user', JSON.stringify(user), {expires: 1})
            if (user['chia_address']) {
                jsCookie.set('xch_address', user['chia_address'], {expires: 1})
                state.xch_address = user['chia_address']
            }

            state.user = user
        }
    }
  }