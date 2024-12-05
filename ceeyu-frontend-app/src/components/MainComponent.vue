<!-- Main component that contains all other components -->
<script setup lang="ts">
import VItemsPage from '@/views/ItemsPage/VItemsPage.vue';
import VPageWrapper from './common/Wrappers/VPageWrapper.vue';
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <div>
         <VPageWrapper>
            <router-view />
         </VPageWrapper>
    </div>
</template>



<style scoped>

</style>