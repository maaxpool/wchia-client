// import {hasAuthority} from '@/utils/authority-utils'
import {isAuthed} from '@/router/index'
// import {authorizationCheck} from '@/utils/request'
import NProgress from 'nprogress'
import { authorizationCheck } from '../utils/authUtils'

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
  if (isAuthed.includes(to) && authorizationCheck()) {
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
