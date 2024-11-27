<script lang="js" setup>
import "primeicons/primeicons.css";
import Superstructure from "@/assets/images/Project 9_1.jpg"
import water from "@/assets/images/Project 3_2.jpg"
import Bridge from "@/assets/images/Project 5_3.jpg"
import ProjectCard from "../ProjectCard.vue";
const homeProjects =[
  {
    name:'Construction of Potable Water Supply in Kutlukent',
    location:'Kutlukent (Samsun) İçmesuyu İnşaati',
    date:1997,
    image:water
  },
  {
    name:'Transportation of Superstructure Materials for İzmir-Çeşme Highway',
    location:'İzmı̇ r Çeşme Otoyolu Üst Yapi Malzemelerı̇',
    date:1993,
    image :Superstructure
  },
  {
    name:'Coastal Road Bridge Crossing Construction',
    location:'Sahı̇ l Yolu Köprü Geçı̇ şı̇ İnşaati',
    date:2002,
    image:Bridge
  }
]
</script>

<template>
  <div class="xl:px-20 pb-12 flex flex-col space-y-10">
    <router-link
      class="flex items-center lg:space-x-2 space-x-1"
      to="/projects"
    >
      <h1
        class="font-bold lg:text-[65px] text-2xl md:text-3xl hover:text-primaryRed"
      >
        Projects and Achievements
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
