import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ()=> import("../views/HomePage.vue")
    },
    {
      path: '/index',
      name: 'index',
      component: ()=> import("../views/Index.vue")
    },
  ]
})

export default router
