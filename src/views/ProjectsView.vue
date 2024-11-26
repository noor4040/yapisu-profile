<script setup lang="js">
import {projects} from '@/includes/db'
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <div
    class="lg:space-x-10 lg:space-y-0 space-y-6 flex flex-col lg:flex-row justify-center content-center w-full lg:justify-between"
  >
    <div v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>
