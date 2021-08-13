import jsCookie from 'js-cookie'
export default {
    namespaced: true,
    state: {
        "conf": null,
        "user": null,
        "wxch_balance": 0,
        "xch_balance": 0,
        "balance_init": false,
        "wrap_amount": 0,
        "unwrap_amount": 0,
        "state_init": false
    },
    getters: {
        conf: state => {
            let conf_
            if (jsCookie.get('conf'))
                conf_ = JSON.parse(jsCookie.get('conf'))
            else
                conf_ = state.conf || {}
            return conf_
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
            let {wxch_balance, xch_balance, wrap_amount, unwrap_amount, state_init} = state
            // return {wxch_balance: state.wxch_balance, xch_balance: state.xch_balance}
            return {wxch_balance, xch_balance, wrap_amount, unwrap_amount, state_init}
        }
    },
    mutations: {
        conf(state, conf) {
            jsCookie.set('conf', JSON.stringify(conf), {expires: 1})
            state.conf = conf
        },     
        user (state, user) {
            jsCookie.set('user', JSON.stringify(user), {expires: 1})
            state.user = user
        },
        balance (state, {wxch_amount, xch_amount}) {
            state.wxch_balance = wxch_amount
            state.xch_balance = xch_amount
            state.balance_init = true
        },
        comulative (state, {wrap_amount, unwrap_amount}) {
            state.wrap_amount = wrap_amount
            state.unwrap_amount = unwrap_amount
            state.state_init = true
        }
    }
  }