<script setup lang="js">
import Pages from './pages.vue';
</script>

<template>
  <div
    class="relative w-full lg:h-[200px] bg-cover bg-center flex flex-col md:flex-row items-center lg:px-20 md:justify-between p-4 py-10 lg:p-0 space-y-6 md:px-16"
    style="background-image: url('/public/footer.png')"
  >
    <img src="../assets/images/white-logo.png" alt="" class="lg:w-32 w-20" />
    <div
      class="flex text-white space-x-4 rtl:space-x-reverse lg:text-center lg:justify-center 2xl:px-20"
    >
      <Pages
        baseClass="text-lg hover:text-white transition-all ease-in-out hover:underline"
        activeClass="text-white font-bold underline"
      />
    </div>
  </div>
</template>
