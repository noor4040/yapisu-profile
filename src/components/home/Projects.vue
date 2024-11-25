<script lang="js" setup>
import "primeicons/primeicons.css";
</script>

<template>
  <div class="xl:px-20">
    <router-link
      class="flex items-center lg:space-x-2 space-x-1"
      to="/projects"
    >
      <h1 class="font-bold lg:text-[65px] text-2xl md:text-3xl">
        Projects and Achievements
      </h1>
      <div class="rounded-full flex items-center p-1 bg-primaryRed text-white">
        <i class="pi pi-arrow-up-right text-xl lg:text-[2.5rem]"></i>
      </div>
    </router-link>
  </div>
</template>
