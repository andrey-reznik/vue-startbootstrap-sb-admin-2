import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/Buttons.vue'),
    meta: {
      layout: 'main-layout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
