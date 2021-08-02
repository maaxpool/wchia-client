// import {hasAuthority} from '@/utils/authority-utils'
import {isAuthed} from '@/router/index'
// import {checkAuthorization} from '@/utils/request'
import NProgress from 'nprogress'
import { checkAuthorization } from '../utils/authUtils'

NProgress.configure({ showSpinner: false })

/**
 * page proogress start
 * @param to
 * @param form
 * @param next
 */
const progressStart = (to, from, next) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  next()
}

/**
 * login guard
 * @param to
 * @param form
 * @param next
 * @param options
 */
const loginGuard = (to, from, next, options) => {
  // const {message} = options
  // if (!loginIgnore.includes(to) && !checkAuthorization()) {

  /* if (!loginIgnore.includes(to)) { //
    // message.warning('Auth was lost, please sign in again')
    next({name: 'register'})
  } else {
    next()
  } */
  if (isAuthed.includes(to) && checkAuthorization()) {
      try {
        next('/home')
      } catch (err) {
        console.log(err)
      }
      return false
  }

  next()
}


/**
 * page proogress end
 * @param to
 * @param form
 * @param options
 */
const progressDone = () => {
  NProgress.done()
}

export default {
  beforeEach: [progressStart, loginGuard],
  afterEach: [progressDone]
}
