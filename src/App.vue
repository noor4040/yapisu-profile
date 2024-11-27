<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="bg-[#fff] text-[#000] min-h-screen flex flex-col 2xl:container 2xl:pb-96">

    <!-- Navbar -->
    <Navbar />
    <button
  class="fixed 2xl:right-[1100px] 2xl:bottom-[740px] right-5 bottom-5 px-6 py-3 text-white font-bold rounded-full shadow-lg z-[9999]"
  :style="{
    background:
      'linear-gradient(45deg, var(--primaryRed), var(--primaryGrey))',
  }"
>
  Company Profile
</button>
    <!-- Page Content -->
    <div class="flex-grow">
      <RouterView />
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Floating Button -->
    
  </main>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap");

body {
  font-family: "Afacad", sans-serif;
}

:root {
  --primaryRed: #ac393b;
  --primaryGrey: #3d3b47;
}

</style>
