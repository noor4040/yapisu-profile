<script setup lang="js">
import Pages from './pages.vue';
</script>

<template>
  <div
    class="relative w-full lg:h-[200px] bg-cover bg-center flex flex-col md:flex-row items-center lg:px-20 md:justify-between p-4 py-10 lg:p-0 space-y-6 md:px-16"
    style="background-image: url('/public/footer.png')"
  >
    <img src="../assets/images/white-logo.png" alt="" class="w-32" />
    <div class="flex  text-white space-x-4 lg:text-center lg:justify-center">
     <Pages />
    </div>
  </div>
</template>
