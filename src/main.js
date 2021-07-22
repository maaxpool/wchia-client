import Vue from 'vue'
import Element from 'element-ui'
import '@/style/element-variables.scss'

import {initRouter} from '@/router'
import {initI18n} from '@/utils/i18n'
import store from '@/store'

// import bootstrap from '@/bootstrap'
import App from './App.vue'

const router = initRouter()
const i18n = initI18n()

Vue.config.productionTip = false

Vue.use(Element)

// bootstrap({router, store, i18n, message: Vue.prototype.$message})

// console.log(router)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
