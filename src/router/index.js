import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Inicio.vue'
import LoginView from '../views/InicioLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: localStorage.token != undefined ? HomeView : LoginView
    }
  ]
})

export default router
