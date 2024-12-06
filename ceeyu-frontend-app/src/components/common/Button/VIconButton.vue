<!-- Re-usable button with icon. -->
<template>
  <div>
    <!-- MARK: I'd say that 'class' property is anti-pattern here as well. -->

    <div v-if="searchButton" class="relative w-full">
      <!-- <VIcon
        name="mdiMagnify"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
      /> -->

      <input
        v-if="isAccentColor"
        type="text"
        :placeholder="placeholder ?? 'Search...'"
        :value="modelValue"
        @input="onInput"
        :class="sizeClass + ' text-white hover:brightness-105 rounded focus:outline-none transition-colors duration-200 ease-in-out w-full h-[27px]'"
      />

      <input
        v-else
        type="text"
        :placeholder="placeholder ?? 'Search...'"
        :value="modelValue"
        @input="onInput"
        :class="sizeClass + ' bg-gray-100 text-gray-800 hover:bg-gray-200 rounded focus:outline-none transition-colors duration-200 ease-in-out w-full h-[27px]'"
      />
    </div>

    <template v-else>
      <button
        v-if="isAccentColor"
        @click="handleClick"
        :disabled="disabled"
        :title="disabled ? disabledMsg : ''"
        :class="sizeClass + ' bg-accent-color text-white hover:brightness-105 rounded focus:outline-none transition-colors duration-200 ease-in-out flex items-center justify-center h-[27px]'"
      >
        <VIcon :name="icon || ''" />
      </button>

      <button
        v-else
        @click="handleClick"
        :disabled="disabled"
        :title="disabled ? disabledMsg : ''"
        :class="sizeClass + ' bg-white text-gray-800 hover:bg-gray-200 rounded focus:outline-none transition-colors duration-200 ease-in-out flex items-center justify-center h-[27px]'"
      >
        <VIcon :name="icon || ''" />
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VIcon from '../Icon/VIcon.vue';

const props = defineProps<{
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  disabledMsg?: string;
  content?: string;
  placeholder?: string;
  isLeftIcon?: boolean;
  // Anti-pattern below but it saves some time (searchButton prop)
  searchButton?: boolean;
  modelValue?: string;
  isAccentColor?: boolean; 
}>();

const emit = defineEmits(['update:modelValue', 'customClick']);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const handleClick = (event: Event) => {
  if (!props.disabled && !props.searchButton) {
    emit('customClick', event);
  }
};

// MARK: this is anti-pattern. this is nasty. Better to do it with ENUM.
const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'p-1 text-sm h-[20px]';
    case 'medium':
      return 'p-2 text-base h-[20px]';
    case 'large':
      return 'p-3 text-lg h-[20px]';
    default:
      return '';
  }
});
</script>

<style scoped>
</style>
