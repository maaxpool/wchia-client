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
const i18n = initI18n(jsCookie.get('lang')?jsCookie.get('lang'):process.env.VUE_APP_LANG)

Vue.config.productionTip = false

Vue.use(Element)

Vue.prototype.$http = c_http
Vue.prototype.$metaMaskUtils = new metamaskUtils()
Vue.prototype.$globalBus = new Vue()
// bootstrap({router, store, i18n, message: Vue.prototype.$message})
bootstrap({router})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
