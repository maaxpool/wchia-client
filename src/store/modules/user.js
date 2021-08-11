import jsCookie from 'js-cookie'
export default {
    namespaced: true,
    state: {
        "conf": null,
        "user": null,
        "wxch_balance": 0,
        "xch_balance": 0,
    },
    getters: {
        conf: state => {
            console.log(JSON.parse(jsCookie.get('conf')))
            return state.conf || JSON.parse(jsCookie.get('conf'))
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
        },
        balance: state => {
            return {wxch_balance: state.wxch_balance, xch_balance: state.xch_balance}
        }
    },
    mutations: {
        conf(state, conf) {
            jsCookie.set('conf', JSON.stringify(conf))
            state.conf = conf
        },     
        user (state, user) {
            jsCookie.set('user', JSON.stringify(user), {expires: 1})
            state.user = user
        },
        balance (state, {wrap_amount, unwrap_amount}) {
            state.wxch_balance = wrap_amount
            state.xch_balance = unwrap_amount
        }
    }
  }