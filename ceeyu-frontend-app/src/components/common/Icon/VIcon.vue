<!-- Dynamic component that extracs a SVG-icon from MaterialUI by the icon-name -->
<template>
    <svg
      :class="computedClass"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
    >
      <path :d="iconPath" />
    </svg>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import * as mdi from '@mdi/js';
  
  const props = defineProps<{
    name: string; 
    size?: number | string; 
    class?: string; 
  }>();
  
  const iconPath = computed(() => {
    return mdi[props.name] || '';
  });
  
  const size = computed(() => props.size || 24);
  
  const computedClass = computed(() => props.class || '');
  </script>
  
  <style scoped>
  </style>
  