<!-- ProductDetailsPage.vue -->
<template>
  <VPageWrapper>
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
          <p class="text-l">Created at: {{ product.details.createdAt }}</p>
          <p class="text-l">Updated at: {{ product.details.updatedAt }}</p>
          <p class="text-l">DOB: {{ product.details.dob }}</p>
        </div>
        <div class="flex flex-row items-center justify-start gap-2xl w-[400px] max-w-[400px]">
          <button
            @click="addToCard"
            class=" bg-accent-color hover:bg-accent-color-hover text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out max-h-[45px]"
          >
            Add to Cart
          </button>
          <button
            @click="goBack"
            class=" bg-accent-color hover:bg-accent-color-hover text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out max-h-[45px]"
          >
            Go back
          </button>
        </div>
      </div>
  
      <div v-else class="text-center p-8 text-gray-500">
        Product not found
      </div>
    </div>
  </VPageWrapper>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { IProduct } from '@/types/common/product';
  import products from '@/mock/mock_items.js';
  import { useCardStore } from '@/stores/shoppingCardStore';
  import { useRouter } from 'vue-router';
import VPageWrapper from '@/components/common/Wrappers/VPageWrapper.vue';
  
  const route = useRoute();
  const router = useRouter();

  // Anti-pattern below. Better to use props in this case IMHO. 
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
  
  // TODO: use toastr
  function addToCard() {
    if (product.value) {
      cardStore.addItem(product.value); 
      alert('Product has been added to your shopping cart!');
    } else {
      alert('Product not found');
    }
  }

  // this function should be saved in a folder similar to "utils"
  function goBack() {
    router.go(-1);
  }
  </script>
  
  <style scoped>
  </style>
  