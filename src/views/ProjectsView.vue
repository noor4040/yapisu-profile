<script setup>
import { ref, computed } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/includes/db";

import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const rowsPerPage = 6;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(projects.length / rowsPerPage));
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  return projects.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo(0, 0);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo(0, 0);
  }
};

const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="flex flex-col items-center w-full space-y-6 py-6 2xl:py-12 2xl:space-y-12">
    <h1 class="font-bold lg:text-[50px] text-2xl md:text-3xl 2xl:text-[60px]">
      Projects and Achievements
    </h1>
    <div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 lg:px-20 2xl:px-60 place-items-center 2xl:gap-36	"
>
  <div v-for="project in paginatedProjects" :key="project.name" class="p-2">
    <ProjectCard :project="project" />
  </div>
</div>

    <div class="flex items-center space-x-2 py-6 rtl:space-x-reverse">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class=" 2xl:text-[40px] 2xl:px-6 px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="{
          'px-3 py-1 rounded-full hover:bg-primaryRed hover:text-white 2xl:text-[40px] 2xl:px-6': true,
          'bg-primaryRed text-white': currentPage === page,
          'bg-gray-300 text-gray-700': currentPage !== page,
        }"
      >
        {{ page }}
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="2xl:text-[40px] 2xl:px-6 px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>
