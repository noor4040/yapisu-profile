<script setup lang="js">
import infraImage from '@/assets/images/services-images/infrastructure 1.png';
import hospitalImage from '@/assets/images/services-images/hospital 1.png';
import schoolImage from '@/assets/images/services-images/school 1.png';
import hotelImage from '@/assets/images/services-images/hotel 1.png';
import workplaceImage from '@/assets/images/services-images/workplace 1.png';
import mallImage from '@/assets/images/services-images/mall 1.png';
import restaurantImage from '@/assets/images/services-images/restaurant 1.png';
import arenaImage from '@/assets/images/services-images/arena 1.png';
import mosqueImage from '@/assets/images/services-images/mosque 1.png';
import parkingImage from '@/assets/images/services-images/parking-area 1.png';
import prototypeImage from '@/assets/images/services-images/prototype 1.png';
import sanitationImage from '@/assets/images/services-images/house-water-supply 1.png';

const capitalizeTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const services = [
  { title: capitalizeTitle("INDUSTRIAL BUILDINGS"), image: infraImage },
  { title: capitalizeTitle("HOSPITALS AND MEDICAL CENTERS"), image: hospitalImage },
  { title: capitalizeTitle("SCHOOLS AND EDUCATIONAL FACILITIES"), image: schoolImage },
  { title: capitalizeTitle("HOTELS AND TOURISM FACILITIES"), image: hotelImage },
  { title: capitalizeTitle("OFFICES AND WORKPLACES"), image: workplaceImage },
  { title: capitalizeTitle("SHOPS AND SHOPPING CENTERS"), image: mallImage },
  { title: capitalizeTitle("RESTAURANTS AND ENTERTAINMENT FACILITIES"), image: restaurantImage },
  { title: capitalizeTitle("SPORTS VENUES AND FACILITIES"), image: arenaImage },
  { title: capitalizeTitle("MOSQUES AND RELIGIOUS ESTABLISHMENTS"), image: mosqueImage },
  { title: capitalizeTitle("PARKING LOTS AND PUBLIC FACILITIES"), image: parkingImage },
  { title: capitalizeTitle("ENGINEERING AND PROJECT MANAGEMENT"), image: prototypeImage },
  { title: capitalizeTitle("INSTALLATION AND REPAIR OF SANITATION SYSTEMS"), image: sanitationImage }
];
</script>

<template>
  <div class="flex flex-col lg:space-y-6 xl:px-20 space-y-4 2xl:container">
    <div class="flex flex-col space-y-2">
      <h1 class="font-bold lg:text-5xl text-3xl ">Services</h1>
      <p class="lg:text-2xl text-xl ">
        <span class="font-bold">Diverse services:</span> projects that reflect
        ambitions and meet every need
      </p>
    </div>

    <div
      class="grid lg:grid-cols-4 lg:gap-16 grid-cols-2 gap-4 w-full self-center"
    >
      <div
        v-for="service in services"
        class="flex flex-col justify-center items-center cursor-pointer transition-all ease-in-out shadow-sm hover:shadow-md p-4 rounded-lg text-center space-y-2"
      >
        <img :src="service.image" alt="" class="w-12" />
        <h1 class="md:w-40 w-32 2xl:w-full ">
          {{ service.title }}
        </h1>
      </div>
    </div>
  </div>
</template>
