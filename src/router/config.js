import HomeView from '@/layouts/HomeView'
import InnerView from '@/layouts/InnerView'

// 路由配置
const options = {
  // mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),

    },
    {
      path: '/',
      component: HomeView,
      redirect: '/home',
      children:[{
        name: 'home',
        path: 'home',
        component: () => import('@/pages/home')
      }]
    },
    {
      path: '/pages',
      component: InnerView,
      redirect: '/404',
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
        path: 'transDetail/:id',
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
