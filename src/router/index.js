import Vue from 'vue'
import Router from 'vue-router'
import options from './config'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const loginIgnore = {
  names: ['404'],
  // paths: ['/login'],
  includes(route) {
    // return this.names.includes(route.name) || this.paths.includes(route.path)
    return this.names.includes(route.name)
  }
}

const isAuthed = {
  names: ['register'],
  includes(route) {
    return this.names.includes(route.name)
  }

}

function initRouter() {
  return new Router(options)
}

export {loginIgnore, isAuthed, initRouter}
