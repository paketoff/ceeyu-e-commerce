<!-- Wrapper that contains header, re-usable main content and footer. -->
<script setup lang="ts">
import VHeader from '@/components/App/Header/VHeader.vue';
import VFooter from '@/components/App/Footer/VFooter.vue';



</script>
 
 <template>
    <div class="flex flex-col items-center justify-center min-h-screen w-full bg-main-bg-color">
      <!-- HEADER -->
      <VHeader />

      <!-- MAIN RE-USABLE CONTENT -->
      <h2 class="flex flex-col items-center justify-center mt-2">Our ✨Products✨</h2>

      <main class="flex flex-grow">
         <slot></slot>
      </main>

      <!-- <VFooter /> -->

    </div>
 </template>
 
 <style scoped>
 
 </style>