<!-- ProductCard.vue -->
<template>
    <div class="border rounded shadow p-4 flex flex-col items-start cursor-pointer">
      <div class="w-full h-40 mb-4 overflow-hidden flex justify-center items-center bg-gray-100">
        <img
          v-if="productImage"
          :src="productImage"
          :alt="product.name"
          class="object-contain h-full"
        />
        <div v-else class="text-gray-500 italic">No Image</div>
      </div>
  
      <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-700 mb-2" v-if="product.details.description">
        {{ truncatedDescription }}
      </p>  
      <div class="flex items-center justify-between w-full mt-auto">
        <span class="font-bold text-blue-600">{{ product.details.price.toFixed(2) }}$</span>
        <span class="text-sm text-gray-500">{{ product.details.company }}</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  import { IProduct } from '@/types/common/product';
  
  const props = defineProps<{ product: IProduct }>();
  
  const productImage = computed(() => {
    return null;
  });
  
  const truncatedDescription = computed(() => {
    const desc = props.product.details.description || '';
    return desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
  });
  </script>
  
  <style scoped>
  </style>
  