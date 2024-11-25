<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="bg-[#fff] text-[#000]">
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap");
body {
  font-family: "Afacad", sans-serif;
}
</style>
