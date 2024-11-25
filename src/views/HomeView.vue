<script setup>
import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
import Efficiency from "@/components/Efficiency.vue";
</script>

<template>
  <main class="flex flex-col space-y-16">
    <Banner />
    <div class="flex flex-col space-y-16 px-24">
      <Services></Services>
      <Efficiency />
      <h1></h1>
    </div>
  </main>
</template>
