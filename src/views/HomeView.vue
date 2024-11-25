<script setup>
import Banner from "@/components/home/Banner.vue";
import Services from "@/components/home/Services.vue";
import Efficiency from "@/components/home/Efficiency.vue";
import Projects from "@/components/home/Projects.vue";
</script>

<template>
  <main class="flex flex-col space-y-16">
    <Banner />
    <div class="flex flex-col space-y-16 px-24">
      <Services></Services>
      <Efficiency />
      <Projects />

      <h1></h1>
    </div>
  </main>
</template>
