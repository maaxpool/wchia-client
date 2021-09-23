import jsCookie from 'js-cookie'
export default {
    namespaced: true,
    state: {
      provide: null,
      account: null,
      eth_sign: null,
      auth_msg: null
    },
    getters: {
      provide: state => state.provide,
      account: state => state.account||jsCookie.get('ethereum_eth_account'),
      eth_sign: state => {
        return state.eth_sign||jsCookie.get('ethereum_eth_sign')
      },
      auth_msg: state => state.auth_msg||jsCookie.get('ethereum_auth_msg')
    },
    mutations: {
      provide (state, provide) {
        state.provide = provide
      },
      account (state, account) {
        if(account)
          jsCookie.set('ethereum_eth_account', account, {expires: 1})
        state.account = account
      },
      eth_sign (state, eth_sign) {
        if(eth_sign)
          jsCookie.set('ethereum_eth_sign', eth_sign, {expires: 1})
        state.eth_sign = eth_sign
      },
      auth_msg (state, auth_msg) {
        if(auth_msg)
          jsCookie.set('ethereum_auth_msg', auth_msg, {expires: 1})
        state.auth_msg = auth_msg
      }
    }
  }