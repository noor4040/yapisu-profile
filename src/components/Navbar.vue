<script setup lang="js">
import { ref } from "vue";
import Pages from "./pages.vue";

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

const handleLinkClick = () => {
  isDrawerOpen.value = false;
};
</script>

<template>
  <header class="w-full border-b border-gray-200 bg-white 2xl:container">
    <div
      class="flex w-full justify-between items-center lg:px-20 lg:py-4 px-4 py-2 md:px-16 xl:px-24 2xl:px-20"
    >
      <!-- Logo -->
      <img
        src="../assets/images/Yapisu_Logo 2.svg"
        alt="Logo"
        class="lg:w-32 w-20 2xl:w-25"
      />

      <!-- Desktop Navigation -->
      <nav class="lg:flex space-x-12 hidden 2xl:mr-20">
        <Pages
          baseClass="text-lg hover:text-primaryRed transition-all ease-in-out hover:underline 2xl:text-2xl "
          activeClass="text-primaryRed font-bold underline"
        />
      </nav>

      <button
        @click="toggleDrawer(true)"
        type="button"
        aria-controls="drawer-navigation"
        class="lg:hidden"
      >
        <i class="pi pi-bars text-2xl"></i>
      </button>
    </div>

    <div
      v-if="isDrawerOpen"
      id="drawer-navigation"
      :class="[
        'fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto bg-white w-64 shadow-md flex flex-col items-start pt-8',
      ]"
    >
      <button
        type="button"
        @click="toggleDrawer(false)"
        aria-controls="drawer-navigation"
        class="self-end"
      >
        <i class="pi pi-times text-xl"></i>
      </button>
      <Pages
        baseClass="text-lg hover:text-primaryRed transition-all ease-in-out hover:underline"
        activeClass="text-primaryRed font-bold underline"
        @link-click="handleLinkClick"
      />
    </div>
  </header>
</template>