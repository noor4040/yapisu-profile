<script setup lang="js">
// import CompanyProfile from "/public/company-profile.pdf"

// function downloadProfile() {
//   const link = document.createElement('a');
//   link.href = CompanyProfile;
//   link.download = 'CompanyProfile.pdf';
//   link.click();
// }

import { defineProps } from "vue";

defineProps({
  baseClass: {
    type: String,
    default: "text-lg hover:text-primaryRed transition-all ease-in-out hover:underline",
  },
  activeClass: {
    type: String,
    default: "text-primaryRed font-bold underline",
  },
});

const pages = [
  {
    name: "Home",
    route: "/",
    click: null,
  },
  {
    name: "About Us",
    route: "/about",
    click: null,
  },
  {
    name: "Projects",
    route: "/projects",
    click: null,
  },
  {
    name: "Gallery",
    route: "/gallery",
    click: null,
  },
];
</script>

<template>
  <router-link
    v-for="page in pages"
    :key="page.name"
    :to="page.route"
    :class="baseClass"
    :active-class="activeClass"
  >
    {{ page.name }}
  </router-link>
  
</template>