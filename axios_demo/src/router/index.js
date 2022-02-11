import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2-2',
    name: 'axios请求方法',
    component: () => import(/* webpackChunkName: "axios请求方法" */ '../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: 'axios并发请求',
    component: () => import(/* webpackChunkName: "axios并发请求" */ '../views/2-3.vue')
  },
  {
    path: '/demoList',
    name: '联系人列表样例',
    component: () => import(/* webpackChunkName: "联系人列表样例" */ '../views/DemoContact.vue')
  },
  {
    path: '/contactList',
    name: '联系人列表',
    component: () => import(/* webpackChunkName: "联系人列表" */ '../views/ContactList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
