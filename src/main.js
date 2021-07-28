import Vue from 'vue'
import Element from 'element-ui'
import '@/style/element-variables.scss'

import {initRouter} from '@/router'
import {initI18n} from '@/utils/i18n'
import store from '@/store'

// import getLangOptions from '@/lang'


import bootstrap from '@/bootstrap'
import App from './App.vue'

const router = initRouter()
const i18n = initI18n('en')

Vue.config.productionTip = false

Vue.use(Element)

// bootstrap({router, store, i18n, message: Vue.prototype.$message})
bootstrap({router, i18n})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
