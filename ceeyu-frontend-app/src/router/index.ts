import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import VItemsPage from '@/views/ItemsPage/VItemsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainComponent
    },
    {
      path: '/items',
      name: 'items',
      component: VItemsPage
    }
    
  ]
})

export default router
