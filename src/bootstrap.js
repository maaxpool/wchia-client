import guards from '@/router/guards'

// import {loadInterceptors} from '@/utils/request'
// import interceptors from '@/utils/axios-interceptors'

/* 

 */
 function setAppOptions(options) {
    let appOptions = {}
    const {router, store, i18n} = options
    appOptions.router = router
    appOptions.store = store
    appOptions.i18n = i18n
  }

function loadGuards(guards, options) {
    const {beforeEach, afterEach} = guards
    const {router} = options
    beforeEach.forEach(guard => {
      if (guard && typeof guard === 'function') {
        router.beforeEach((to, from, next) => guard(to, from, next, options))
      }
    })
    afterEach.forEach(guard => {
      if (guard && typeof guard === 'function') {
        router.afterEach((to, from) => guard(to, from, options))
      }
    })
  }
  


/**
 * @param router 应用的路由实例
 * @param store 应用的 vuex.store 实例
 * @param i18n 应用的 vue-i18n 实例
 * @param i18n 应用的 message 实例
 */
function bootstrap({router, store, i18n, message}) {
  setAppOptions({router, store, i18n})
  // loadInterceptors(interceptors, {router, store, i18n, message})
  loadGuards(guards, {router, store, i18n, message})
}

export default bootstrap
