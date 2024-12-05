<script setup lang="ts">
import VIconButton from '@/components/common/Button/VIconButton.vue';
import VLeftLogo from '@/components/common/Logo/VLeftLogo.vue';
import {ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/searchStore';

const router = useRouter();
// const showSearch = ref(false);
const searchStore = useSearchStore(); 

// const toggleSearch = () => {
//     showSearch.value = !showSearch.value;
// }

const goToCart = () => {

    // Router-name should be created in a different .js file that contains a big map-object with "ROUTE.BUCKET" : "/bucket" view, so we could use it like 'router.push(ROUTE.BUCKET)' and use incapsulation.
    router.push('/bucket');
}

</script>

<template>
    <div class="flex w-full items-stretch flex-grow border-b border-main-bg-color">
        <div>
            <VLeftLogo icon="random" name="Ceeyu"/>
        </div>
        <div class="flex items-stretch">
            <VIconButton search-button  v-model="searchStore.searchQuery" size="medium" />
            <VIconButton icon="mdiCart" @customClick="goToCart" size="medium" />
            <VIconButton icon="mdiAccount" size="medium" />           
        </div>
    </div>
</template>

<style scoped>

</style>