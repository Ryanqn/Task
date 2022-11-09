import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import taskpage1 from '../views/taskpage1.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component:taskpage1
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
