<!-- Re-usable button with icon. -->
 <template>
    <div>
        <!-- MARK: I'd say that 'class' property is anti-pattern here as well. -->
        <div v-if="searchButton" class="relative">
            <VIcon name="search" />
            <input
            type="text"
            :placeholder="placeholder ?? 'Search...'"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :class="sizeClass"
            />
        </div>

        <button
        v-else
        @click="handleClick"
        :disabled="disabled"
        :title="disabled ? disabledMsg : ''"
        :class="sizeClass"
        >
            <VIcon :name="props.icon || ''"/>
        </button>
    </div>
 </template>
 
 <script setup lang="ts">
 import { computed } from 'vue';
 import VIcon from '../Icon/VIcon.vue';

 const props = defineProps<{
    icon?: string;
    size?: string;
    disabled?: boolean;
    disabledMsg?: string;
    content?: string;
    placeholder?: string;
    isLeftIcon?: boolean;
    // Anti-pattern below but it saves some time
    searchButton?: boolean;
    modelValue?: string;
 }>();
 
// MARK: this is anti-pattern. Better to do it with ENUM. 
 const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'p-1 text-sm';
    case 'medium':
      return 'p-2 text-base';
    case 'large':
      return 'p-3 text-lg';
    default:
      return '';
  }
});


 const emit = defineEmits(['update:modelValue', 'customClick']);


 const handleClick = (event: Event) => {
  if (!props.disabled && !props.searchButton) {
    emit('customClick', event);
  }
};


 </script>
 
 <style scoped>
 
 </style>