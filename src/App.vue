<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { locale } = useI18n();
const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

function downloadProfile() {
  // console.log("im in the downloadProfile functions");
  const profileUrl = "http://localhost:8000/api/download-company-profile"; // to be updated with backend domain
  window.open(profileUrl, "_blank");
}
</script>

<template>
  <main
    :dir="direction"
    class="bg-[#fff] text-[#000] min-h-screen flex flex-col 2xl:container"
  >
    <!-- Navbar -->
    <Navbar />
    <button
      class="fixed 2xl:right-28 right-5 bottom-5 px-6 py-3 text-white font-bold rounded-full shadow-lg z-[9999]"
      :style="{
        background:
          'linear-gradient(45deg, var(--primaryRed), var(--primaryGrey))',
      }"
      @click="downloadProfile()"
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
