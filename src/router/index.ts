import { BuildingView, HomeView } from '@/views'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buildings/:id',
      name: 'building',
      component: BuildingView
    }
  ],
})

export default router
