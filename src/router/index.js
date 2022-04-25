import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login/index',
    component: () => import('../App')
  },
  {
    path: '/login',
    name: 'LoginPage',
    redirect: '/login/index',
    component: () => import('../views/login'),
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
  }
]

const router = new VueRouter({
  routes
})

export default router
