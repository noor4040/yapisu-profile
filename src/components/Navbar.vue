<script setup lang="js">
import { ref } from 'vue';
const pages = [
  {
    name: 'Home',
    route: "/"
  },
  {
    name: 'About Us',
    route: "/about"
  },
  {
    name: 'Projects',
    route: "/projects"
  },
  {
    name: 'Library',
    route: "/library"
  },
  {
    name: 'Company profile',
    route: "/company-profile"
  },
];
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
const navigateToPage = (path) => {
  router.push(path); // Navigate to the selected page
  toggleDrawer(false); // Close the drawer
};
</script>

<template>
  <div
    class="flex w-full justify-between items-center lg:px-20 lg:py-4 px-4 py-2 md:px-16 xl:px-24"
  >
    <img src="../assets/images/Yapisu_Logo 2.svg" alt="" class="lg:w-32 w-20" />
    <div class="lg:flex space-x-12 hidden">
      <router-link
        v-for="page in pages"
        :key="page.name"
        :to="page.route"
        class="text-lg hover:text-primaryRed hover:font-bold hover:underline"
        active-class="text-primaryRed font-bold underline"
      >
        {{ page.name }}
      </router-link>
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
      'fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto bg-white w-64  flex flex-col space-y-4 shadow-md',
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
    <router-link
      v-for="page in pages"
      :key="page.name"
      :to="page.route"
      class="text-lg hover:text-primaryRed hover:font-bold hover:underline text-black"
      active-class="text-primaryRed font-bold underline"
    >
      {{ page.name }}
    </router-link>
  </div>
</template>

<style>
.primaryRed {
  color: red;
  font-weight: bold;
}
</style>
