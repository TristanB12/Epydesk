import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      requiresAutologin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/autologin',
    name: 'Autologin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AutologinPage.vue')
  },
  {
    path: '/:id',
    name: 'RoadblockDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/RoadblockDetails.vue'),
    meta: {
      requiresAuth: true,
      requiresAutologin: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
