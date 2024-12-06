src/views/MainPage.vue
<template>
    <div class="flex flex-col min-h-screen min-w-full">
      
      <section class="flex flex-col md:flex-row items-center justify-center flex-grow bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div class="md:w-1/2 pl-xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Ceeyu test</h1>
          <p class="text-lg md:text-xl mb-6">
            Discover out my "perfect" code
          </p>
          <router-link
            to="/products"
            class="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Products
          </router-link>
        </div>
        
        <!-- <div class="md:w-1/2 p-8">
          <img
            src="https://via.placeholder.com/500"
            alt="Ceeyu Products"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div> -->
      </section>
      
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  </style>
  