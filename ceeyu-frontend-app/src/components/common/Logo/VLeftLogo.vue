<template>
    <div class="flex flex-row flex-grow py-xl pl-2xl pr-md">
        {{ props.icon }}
        {{ props.name }}
    </div>
</template>

<script setup lang="ts">
import { IAppName } from '@/types/App/appName';
// TODO: add stars!
const props = defineProps<{
    icon: string;
    name: string;
}>();

</script>

<style scoped>

</style>