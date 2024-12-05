<!-- Wrapper that contains header, re-usable main content and footer. -->
<script setup lang="ts">
import VHeader from '@/components/App/Header/VHeader.vue';
import VFooter from '@/components/App/Footer/VFooter.vue';
</script>
 
 <template>
    <div class="flex min-h-screen w-full">
      <!-- HEADER -->
      <VHeader />

      <!-- MAIN RE-USABLE CONTENT -->
      <main class="flex flex-grow">
         <slot></slot>
      </main>

      <!-- <VFooter /> -->

    </div>
 </template>
 
 <style scoped>
 
 </style>