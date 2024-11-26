<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="bg-[#fff] text-[#000] relative min-h-screen">
    <Navbar />
    <RouterView />
    <Footer />
    
    <!-- Floating Button -->
    <button
      class="fixed right-5 bottom-5 px-6 py-3 text-white font-bold rounded-full shadow-lg"
      :style="{
        background: 'linear-gradient(45deg, var(--primaryRed), var(--primaryGrey))',
      }"
    >
      Company Profile
    </button>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap");

body {
  font-family: "Afacad", sans-serif;
}

:root {
  --primaryRed: #ac393b; /* Replace with your exact primaryRed color */
  --primaryGrey: #3D3B47; /* Replace with your exact primaryGrey color */
}
</style>