import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index',
    component: () => import('@/App')
  },
  {
    path: '/login',
    name: 'LoginPage',
    redirect: '/login/index',
    component: () => import('@/views/login'),
    children: [
      {
        path: 'index',
        name: 'LoginModule',
        component: () => import('../views/login/components/login')
      },
      {
        path: 'register',
        name: 'RegisterModule',
        component: () => import('../views/login/components/register')
      }, {
        path: 'forget',
        name: 'ForgetModule',
        component: () => import('../views/login/components/forget')
      }
    ]
  },
  {
    path: '/home/:type',
    component: () => import('@/views/home/index')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
