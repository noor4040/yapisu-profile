<script setup lang="js">
// import CompanyProfile from "/public/company-profile.pdf"

// function downloadProfile() {
//   const link = document.createElement('a');
//   link.href = CompanyProfile; 
//   link.download = 'CompanyProfile.pdf'; 
//   link.click();
// }

const pages = [
  {
    name: 'Home',
    route: "/",
    click:null
  },
  {
    name: 'About Us',
    route: "/about",
    click:null
  },
  {
    name: 'Projects',
    route: "/projects",
    click:null
  },
  {
    name: 'Gallery',
    route: "/gallery",
    click:null
  },
];
</script>

<template>
 <router-link
        v-for="page in pages"
        :key="page.name"
        :to="page.route"
        class="text-lg hover:text-primaryRed hover:font-bold hover:underline"
        active-class="text-primaryRed font-bold underline"
      >
        {{ page.name }}
      </router-link>
      <button
        class="text-lg hover:text-primaryRed hover:font-bold hover:underline"
        
      >
        Company Profile
      </button>
</template>