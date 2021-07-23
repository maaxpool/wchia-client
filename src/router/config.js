import HomeView from '@/layouts/HomeView'
import InnerView from '@/layouts/InnerView'

// 路由配置
const options = {
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      redirect: '/home',
      children:[{
        path: 'home',
        component: () => import('@/pages/home')
      }]
    },
    {
      path: '/pages',
      // name: 'SignUp',
      component: InnerView,
      children: [{
        path: 'signup',
        name: 'register',
        component: () => import('@/pages/register'),
        meta: {
          bg: '#FAFAFA'
        }
      }, {
        path: 'account',
        name: 'account',
        component: () => import('@/pages/account'),
        meta: {
          bg: '#FAFAFA'
        }
      }, {
        path: 'transDetail',
        name: 'transDetail',
        component: () => import('@/pages/transDetail'),
        meta: {
          bg: '#FAFAFA'
        }
      }]
    },
  ]
}

export default options
