import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/login',
    component: () => import('../App')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/login',
    component: () => import('../views/home/home'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/home/components/login')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/home/components/register')
      }, {
        path: 'forget',
        name: 'Forget',
        component: () => import('../views/home/components/forget')
      }
    ]
  },
  {
    path: '/word',
    component: () => import('../views/word/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
