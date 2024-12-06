<!-- src/views/CartPage.vue -->
<template>
  <VPageWrapper>
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Your Shopping Cart</h1>
  
      <!-- Проверяем, есть ли товары в корзине -->
      <div v-if="cartItems.length" class="space-y-4">
        <!-- Список товаров -->
        <div 
          v-for="item in cartItems" 
          :key="item.id" 
          class="flex items-center justify-between bg-white p-4 border rounded shadow"
        >
         <div class="flex flex-col"> 
          <div class="flex flex-col">
            <span class="font-semibold">{{ item.name }}</span>
            <span class="text-sm text-gray-500">{{ item.details.company }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-lg font-bold text-blue-600">{{ item.details.price.toFixed(2) }}$</span>
            <button 
              @click="removeFromCart(item.id)"
              class="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
        </div>
  
        <!-- Total (anti-pattern - I coul'd just extract those buttons below in an isolated component but it'll be kinda quicker for me to write it directly here)-->
        <div class="flex items-center justify-between mt-4 p-4 bg-gray-100 border rounded shadow">
          <span class="font-semibold">Total:</span>
          <span class="text-lg font-bold text-blue-600">{{ totalPrice.toFixed(2) }}$</span>
        </div>
  
        <div class="flex items-center justify-between gap-xl mt-4">
          <button
            @click="goBack"
            class="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded transition-colors max-h-[45px]"
          >
            Back
          </button>
          <button
            @click="confirmOrder"
            class="bg-accent-color hover:bg-accent-color-hover text-white font-semibold py-2 px-4 rounded transition-colors max-h-[45px]"
          >
            Confirm order
          </button>
        </div>
      </div>
      <div v-else class="text-center text-gray-500 italic">
        Your cart is empty.
      </div>
      
      <!-- MODAL -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-black bg-opacity-80"></div>
  
        <div class="relative bg-white text-black p-8 rounded shadow z-10 max-w-sm w-full text-center">
          <p class="text-xl font-bold mb-4">Sorry guys, I'm already too tired of doing this so no order form :)</p>
          <button
            @click="closeModal"
            class="mt-4 bg-accent-color hover:bg-accent-color-hover text-white font-semibold py-2 px-4 rounded max-h-[45px] mb-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </VPageWrapper>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useCardStore } from '@/stores/shoppingCardStore';
  import { useRouter } from 'vue-router';
import VPageWrapper from '@/components/common/Wrappers/VPageWrapper.vue';
  
  const cartStore = useCardStore();
  const router = useRouter();
  
  const showModal = ref(false);
  
  const cartItems = computed(() => cartStore.items);
  // Potential incorrect use-case of the reactivity (creating reacting wrapper on already reactive object from the store)
  // const cartState = reactive({
  //   items: cartStore.items,
  //   total: 0
  // });

  const totalPrice = computed(() => {
    let total = 0;
    for (const product of cartItems.value) {
      total += product.details.price;
    }
    return total;
  });
  
  function removeFromCart(productId: string) {
    cartStore.removeItem(productId);
    // Potential wrong case of using reactivity here if I would use syntax something like cartStore.items.filter(...), explicitly. It violates the agreement of use pinia with vue.
  }
  
  function goBack() {
    router.go(-1);
  }
  
  function confirmOrder() {
    showModal.value = true;
  }
  
  function closeModal() {
    showModal.value = false;
  }
  </script>
  
  <style scoped>
  /* Можно добавить дополнительные стили, если необходимо */
  </style>
  