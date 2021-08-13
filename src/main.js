import Vue from 'vue'
import Element from 'element-ui'
import jsCookie from 'js-cookie'
import '@/style/element-variables.scss'

import {initRouter} from '@/router'
import {initI18n} from '@/utils/i18n'
import store from '@/store'
import c_http from '@/utils/http'
// import getLangOptions from '@/lang'
import metamaskUtils from '@/utils/metaMaskUtils'


import bootstrap from '@/bootstrap'
import App from './App.vue'

const router = initRouter()
const i18n = initI18n(jsCookie.get('lang')?jsCookie.get('lang'):'en')

Vue.config.productionTip = false

console.log(123)
console.log(process.env.VUE_APP_URL)
console.log(process.env.VUE_APP_TEST)

Vue.use(Element)

Vue.prototype.$http = c_http
Vue.prototype.$metaMaskUtils = new metamaskUtils()
// bootstrap({router, store, i18n, message: Vue.prototype.$message})
bootstrap({router})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
