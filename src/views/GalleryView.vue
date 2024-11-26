<template>
  <div class="card  flex justify-center items-center px-10 py-10">
    <Galleria
        :value="projects"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 1200px"
        class="border-none"
    >
      <template #item="slotProps">
        <div class="relative mb-8 w-full">
          <img
              :src="slotProps.item.image"
              :alt="slotProps.item.location"
              class="w-full h-[500px] object-cover rounded-md"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-md text-white p-4">
            <div class="text-2xl font-bold mb-2">{{ slotProps.item.name }}</div>
            <p class="text-lg">{{ slotProps.item.location }}</p>
          </div>
        </div>
      </template>
      <template #thumbnail="slotProps">
        <img
            :src="slotProps.item.image"
            :alt="slotProps.item.location"
            class="block w-48 h-40 object-cover mb-8 rounded-md"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import Galleria from "primevue/galleria";
import {projects} from "@/includes/db"; // Import the projects list

const responsiveOptions = [
  {breakpoint: "1024px", numVisible: 3},
  {breakpoint: "768px", numVisible: 2},
  {breakpoint: "576px", numVisible: 1},
];
</script>

<style scoped>
.card {
  width: 100%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.42);
}

.text-white {
  color: #fff;
}
</style>


<style scoped>
.card {
  width: 100%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.7);
}

.text-white {
  color: #fff;
}

.p-galleria {
  border: none; /* Added this line to remove border */
}

</style>
