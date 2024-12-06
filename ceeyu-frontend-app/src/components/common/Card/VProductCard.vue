<template>
    <div class="border rounded shadow p-4 overflow-hidden cursor-pointer">
      <div class="transform transition-transform duration-200 hover:scale-105 flex flex-col items-start">
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
        
        <div class="flex flex-row items-center justify-between w-[400px] max-w-[400px]">
            <button
                @click="goToDetails"
                class="mt-4 inline-block bg-accent-color hover:bg-accent-color-hover text-white font-semibold py-1 px-3 rounded transition-colors duration-200 ease-in-out"
            >
                View Details
            </button>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { IProduct } from '@/types/common/product';
import { useRouter } from 'vue-router';

const props = defineProps<{ product: IProduct }>();
const router = useRouter();

const productImage = computed(() => null);
const truncatedDescription = computed(() => {
  const desc = props.product.details.description || '';
  return desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
});

function goToDetails() {
  router.push({ name: 'ProductDetails', params: { product_id: props.product.id } });
}
</script>


