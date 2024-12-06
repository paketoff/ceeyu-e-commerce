<template>
    <div class="flex flex-row flex-grow py-xl pl-2xl pr-md items-center justify-center gap-xl">
        <!-- hardcoded :) -->
        <VIcon name="mdiDomain" size="small" class="max-w-[30px] max-h-[30px]"/>
         
        {{ props.name }}
    </div>
</template>

<script setup lang="ts">
import VIcon from '../Icon/VIcon.vue';
// TODO: add stars!
const props = defineProps<{
    icon: string;
    name: string;
}>();

</script>

<style scoped>

</style>