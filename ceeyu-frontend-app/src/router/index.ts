import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import VItemsPage from '@/views/ItemsPage/VItemsPage.vue'
import VItemDetailsPage from '@/views/ItemsPage/VItemDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainComponent
    },
    {
      path: '/products',
      name: 'items',
      component: VItemsPage
    },
    {
      path: '/products/details/:product_id',
      name: 'ProductDetails',
      component: VItemDetailsPage,
    }

    
  ]
})

export default router
