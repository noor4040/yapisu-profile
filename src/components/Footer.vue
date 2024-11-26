<script setup lang="js">
import Pages from './pages.vue';
</script>

<template>
  <div
    class="relative w-full lg:h-[200px] bg-cover bg-center flex flex-col md:flex-row items-center lg:px-20 md:justify-between p-4 py-10 lg:p-0 space-y-6 md:px-16 2xl:px-40 2xl:h-[400px]"
    style="background-image: url('/public/footer.png')"
  >
    <img
      src="../assets/images/white-logo.png"
      alt=""
      class="lg:w-32 w-20 2xl:w-60"
    />
    <div class="flex text-white space-x-4 lg:text-center lg:justify-center 2xl:space-x-10">
      <Pages
        baseClass="text-lg hover:text-white transition-all ease-in-out hover:underline 2xl:text-4xl"
        activeClass="text-white font-bold underline"
      />
    </div>
  </div>
</template>
