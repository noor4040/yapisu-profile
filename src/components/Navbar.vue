<script setup lang="js">
import { ref } from 'vue';
import Pages from './pages.vue';
const isDrawerOpen = ref(false);

const toggleDrawer = (state) => {
  if (state) {
    isDrawerOpen.value = true;
  } else {
    setTimeout(() => {
      isDrawerOpen.value = false;
    }, 500);
  }
};
</script>

<template>
  <div
    class="flex w-full justify-between items-center lg:px-20 lg:py-4 px-4 py-2 md:px-16 xl:px-24"
  >
    <img src="../assets/images/Yapisu_Logo 2.svg" alt="" class="lg:w-32 w-20" />
    <div class="lg:flex space-x-12 hidden">
      <Pages 
  baseClass="text-lg hover:text-primaryRed transition-all ease-in-out hover:underline" 
  activeClass="text-primaryRed font-bold underline" 
/>
    </div>
    <button
      @click="toggleDrawer(true)"
      type="button"
      aria-controls="drawer-navigation"
      class="lg:hidden"
    >
      <i class="pi pi-bars"></i>
    </button>
  </div>
  <div
    class="lg:hidden"
    v-if="isDrawerOpen"
    id="drawer-navigation"
    :class="[
      'fixed top-0  right-0 z-50 h-screen p-4 overflow-y-auto bg-white w-64   space-y-4 shadow-md flex flex-col items-start pt-8',
    ]"
  >
    <button
      type="button"
      @click="toggleDrawer(false)"
      aria-controls="drawer-navigation"
      class="self-end"
    >
      <i class="pi pi-times"></i>
    </button>
    <Pages 
  baseClass="text-lg hover:text-primaryRed transition-all ease-in-out hover:underline" 
  activeClass="text-primaryRed font-bold underline" 
/>
  </div>
</template>

<style>
.primaryRed {
  color: red;
  font-weight: bold;
}
</style>
