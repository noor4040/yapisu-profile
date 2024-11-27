<script setup lang="js">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="card p-3 bg-gray-50 h-[500px]  rounded-box transition-transform transform hover:scale-105 2xl:h-[900px] 2xl:w-[600px]"
  >
    <figure class="relative">
      <img
        class="rounded-3xl cursor-pointer p-2 w-full h-80 2xl:h-[600px] object-cover"
        :src="project.image"
        alt="related project"
        @error="isLoading = false"
      />
    </figure>
    <div class="card-body w-full text-black flex flex-col 2xl:space-y-6">
      <h2 class="card-title text-lg font-bold 2xl:text-[35px] 2xl:leading-10">
        {{ project.name || "Untitled" }}
      </h2>
      <div class="text-sm 2xl:text-[30px]">
        {{ project.location || "Not available" }}
      </div>

      <div class="flex space-x-2">
        <div class="text-sm font-semibold 2xl:text-[30px]">Starting Date:</div>
        <div class="text-sm 2xl:text-[30px]">
          {{ project.date || "Not available" }}
        </div>
      </div>
    </div>
  </div>
</template>
