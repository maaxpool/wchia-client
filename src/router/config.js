import BlankView from '@/layouts/BlankView'

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
      component: BlankView,
      // redirect: '/explorer/blocks',
    },
    {
      path: '/auth',
      name: '登录页',
      component: () => import('@/pages/login'),
      
    },
  ]
}

export default options
