<script setup>
import Banner from "@/components/home/Banner.vue";
import Services from "@/components/home/Services.vue";
import Efficiency from "@/components/home/Efficiency.vue";
import Projects from "@/components/home/Projects.vue";
import About from "@/components/home/About.vue";
</script>

<template>
  <main class="flex flex-col lg:space-y-24 space-y-14 2xl:container">
    <Banner />
    <div
      class="flex flex-col lg:space-y-24 lg:px-20 xl:px-24 px-4 space-y-14 md:px-16 2xl:container"
    >
      <About />
      <Services></Services>
      <Efficiency />
      <Projects />
    </div>
  </main>
</template>
