<script lang="js" setup>
import "primeicons/primeicons.css";
import Superstructure from "@/assets/images/Project 9_1.jpg"
import water from "@/assets/images/Project 3_2.jpg"
import Bridge from "@/assets/images/Project 5_3.jpg"
import ProjectCard from "../ProjectCard.vue";
import { projects } from "@/includes/db";
const homeProjects = projects.slice(0, 3);
</script>

<template>
  <div class="xl:px-20 pb-12 flex flex-col space-y-10">
    <router-link
      class="flex items-center lg:space-x-2 space-x-1 rtl:space-x-reverse"
      to="/projects"
    >
      <h1
        class="font-bold lg:text-[65px] text-2xl md:text-3xl hover:text-primaryRed"
      >
        {{ $t("Projects and Achievements") }}
      </h1>
      <div
        class="rounded-full flex items-center p-1 bg-primaryRed text-white text-xl lg:text-[2.5rem]"
      >
        <i class="pi pi-arrow-up-right"></i>
      </div>
    </router-link>

    <div
      class="lg:space-x-10 lg:space-y-0 space-y-6 flex flex-col lg:flex-row justify-center content-center w-full lg:justify-between"
    >
      <div v-for="project in homeProjects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>
