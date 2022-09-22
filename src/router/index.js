import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index',
    name: 'App',
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
    path: '/home/:tag',
    component: () => import('@/views/home/index'),
    name: 'HomePage'
  },
  {
    path: '/center',
    redirect: '/center/user',
    component: () => import('@/views/userCenter/index'),
    name: 'UserCenter',
    children: [
      {
        path: 'user',
        component: () => import('@/views/userCenter/components/user'),
        name: 'User'
      }, {
        path: 'setting',
        component: () => import('@/views/userCenter/components/setting'),
        name: 'Setting'
      }, {
        path: 'posts',
        component: () => import('@/views/userCenter/components/posts'),
        name: 'Posts'
      }, {
        path: 'message',
        component: () => import('@/views/userCenter/components/message'),
        name: 'Message'
      }, {
        path: 'others',
        component: () => import('@/views/userCenter/components/others'),
        name: 'Others'
      }
    ]
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active-page',
  routes
})

export default router
