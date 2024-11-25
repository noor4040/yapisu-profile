<script setup lang="js">
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
</script>

<template>
  <div class="flex w-full justify-between items-center lg:px-20 lg:py-4">
    <img src="../assets/images/Yapisu_Logo 2.svg" alt="" class="w-32" />
    <div class="flex space-x-12">
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
  </div>
</template>

<style>
.primaryRed {
  color: red;
  font-weight: bold;
}
</style>
