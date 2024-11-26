<template>
  <div class="card">
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
      </template>
      <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import Galleria from 'primevue/galleria';
import { ref } from "vue";
import project1 from "@/assets/images/Project 1 & 2_1.jpg"
import project2 from "@/assets/images/Project 20_2.jpg"
// Define the list of images directly in this component
const images = ref([
  {
    itemImageSrc: project1,
    thumbnailImageSrc: project1,
    alt: "Description for Image 1",
    title: "Title 1",
  },
  {
    itemImageSrc: project1,
    thumbnailImageSrc: project1,
    alt: "Description for Image 2",
    title: "Title 2",
  },
  {
    itemImageSrc: project2,
    thumbnailImageSrc: project2,
    alt: "Description for Image 3",
    title: "Title 3",
  },
  {
    itemImageSrc: project2,
    thumbnailImageSrc: project2,
    alt: "Description for Image 3",
    title: "Title 3",
  },
  {
    itemImageSrc: project1,
    thumbnailImageSrc: project1,
    alt: "Description for Image 3",
    title: "Title 3",
  },
  // Add more items here as needed
]);

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
