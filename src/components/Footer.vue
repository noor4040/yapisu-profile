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
  <div
    class="relative w-full h-[400px] bg-cover bg-center flex items-center px-20 justify-between"
    style="background-image: url('/public/footer.png')"
  >
    <img src="../assets/images/white-logo.png" alt="" class="w-32" />
    <div class="flex text-white space-x-4 text-center justify-center">
      <router-link v-for="page in pages" :to="page.route">
        {{ page.name }}
      </router-link>
    </div>
  </div>
</template>
