<template>
   <VPageWrapper>
      <div class="flex items-center justify-center w-full h-full py-[5%]">
        <div class="w-1/2 h-1/2 grid grid-cols-3 gap-4 overflow-auto">
          <VProductCard
            v-for="item in items"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>
    </VPageWrapper>
  </template>

<script setup lang="ts">
import VProductCard from '@/components/common/Card/VProductCard.vue';
import products from '@/mock/mock_items.js'
import { IProduct, IProductDetails } from '@/types/common/product';
import { useSearchStore } from '@/stores/searchStore';
import { computed, onMounted, ref } from 'vue';
import VPageWrapper from '@/components/common/Wrappers/VPageWrapper.vue';

const items = ref<IProduct[]>(products);


onMounted(() => {
    // get items-list from our mock file. In reality I'd use http-client here (axios?)
})


</script>

<style scoped>

</style>