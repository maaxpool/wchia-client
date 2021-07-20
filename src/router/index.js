import Vue from 'vue'
import Router from 'vue-router'
import options from './config'

Vue.use(Router)

const loginIgnore = {
  names: ['404'],
  paths: ['/login'],
  includes(route) {
    return this.names.includes(route.name) || this.paths.includes(route.path)
  }
}


function initRouter() {
  return new Router(options)
}

export {loginIgnore, initRouter}
