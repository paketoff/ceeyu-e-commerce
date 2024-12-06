import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import VItemsPage from '@/views/ItemsPage/VItemsPage.vue'
import VItemDetailsPage from '@/views/ItemsPage/VItemDetailsPage.vue'
import VShoppingCart from '@/views/VShoppingCart/VShoppingCart.vue'
import VMainPage from '@/views/MainPage/VMainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VMainPage
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
    },
    {
      path: '/shopping-card',
      name: 'ShoppingCard',
      component: VShoppingCart
    }

    
  ]
})

export default router
