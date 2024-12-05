<!-- ProductDetailsPage.vue -->
<template>
    <div class="max-w-3xl mx-auto p-4">
      <div v-if="product" class="flex flex-col space-y-4">
        <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        
        <div class="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img 
            v-if="productImage"
            :src="productImage"
            :alt="product.name"
            class="object-contain h-full"
          />
          <div v-else class="text-gray-500 italic">No Image</div>
        </div>
  
        <p class="text-gray-700">
          {{ product.details.description }}
        </p>
  
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold text-blue-600">
            {{ product.details.price.toFixed(2) }}$
          </div>
          <div class="text-sm text-gray-500">{{ product.details.company }}</div>
        </div>
        
        <div class="flex flex-col space-y-2">
          <p class="text-sm text-gray-400">Created at: {{ product.details.createdAt }}</p>
          <p class="text-sm text-gray-400">Updated at: {{ product.details.updatedAt }}</p>
          <p class="text-sm text-gray-400">DOB: {{ product.details.dob }}</p>
        </div>
  
        <button
          @click="addToCard"
          class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
  
      <div v-else class="text-center p-8 text-gray-500">
        Product not found
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { IProduct } from '@/types/common/product';
  import products from '@/mock/mock_items.js';
  import { useCardStore } from '@/stores/shoppingCardStore'; // Импортируем хранилище корзины
  
  const route = useRoute();
  const productId = route.params.product_id as string | undefined;
  
  const product = computed<IProduct | null>(() => {
    if (!productId) return null;
    const found = (products as IProduct[]).find(p => p.id === productId);
    return found || null;
  });
  
  const productImage = computed(() => {
    return null;
  });
  
  const cardStore = useCardStore(); 
  
  function addToCard() {
    if (product.value) {
      cardStore.addItem(product.value); 
      alert('Product has been added to your shopping cart!');
    } else {
      alert('Product not found');
    }
  }
  </script>
  
  <style scoped>
  </style>
  