<script setup lang="ts">
import VIconButton from '@/components/common/Button/VIconButton.vue';
import VLeftLogo from '@/components/common/Logo/VLeftLogo.vue';
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/searchStore';

const router = useRouter();
const searchStore = useSearchStore(); 

const goToCart = () => {

    // Router-name should be created in a different .js file that contains a big map-object with "ROUTE.BUCKET" : "/bucket" view, so we could use it like 'router.push(ROUTE.BUCKET)' and use incapsulation.
    router.push('/shopping-card');
}

</script>

<template>
    <div class="flex flex-row items-center justify-between h-[50px] max-h-[50px] w-full border-b border-bg-main-color">
        <div>
            <VLeftLogo icon="random" name="Ceeyu"/>
        </div>
        <div class="flex flex-row items-center justify-end flex-grow gap-xl pr-xl">
            <VIconButton search-button v-model="searchStore.searchQuery" size="small" />
            <VIconButton icon="mdiCart" @customClick="goToCart" size="large" />
            <VIconButton icon="mdiAccount" size="large" />           
        </div>
    </div>
</template>

<style scoped>

</style>