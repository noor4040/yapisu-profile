<script setup lang="js">
import infraImage from '../assets/images/services-images/infrastructure 1.png';
import hospitalImage from '../assets/images/services-images/hospital 1.png';
import schoolImage from '../assets/images/services-images/school 1.png';
import hotelImage from '../assets/images/services-images/hotel 1.png';
import workplaceImage from '../assets/images/services-images/workplace 1.png';
import mallImage from '../assets/images/services-images/mall 1.png';
import restaurantImage from '../assets/images/services-images/restaurant 1.png';
import arenaImage from '../assets/images/services-images/arena 1.png';
import mosqueImage from '../assets/images/services-images/mosque 1.png';
import parkingImage from '../assets/images/services-images/parking-area 1.png';
import prototypeImage from '../assets/images/services-images/prototype 1.png';
import sanitationImage from '../assets/images/services-images/house-water-supply 1.png';

const services = [
  { title: "INDUSTRIAL BUILDINGS", image: infraImage },
  { title: "HOSPITALS AND MEDICAL CENTERS", image: hospitalImage },
  { title: "SCHOOLS AND EDUCATIONAL FACILITIES", image: schoolImage },
  { title: "HOTELS AND TOURISM FACILITIES", image: hotelImage },
  { title: "OFFICES AND WORKPLACES", image: workplaceImage },
  { title: "SHOPS AND SHOPPING CENTERS", image: mallImage },
  { title: "RESTAURANTS AND ENTERTAINMENT FACILITIES", image: restaurantImage },
  { title: "SPORTS VENUES AND FACILITIES", image: arenaImage },
  { title: "MOSQUES AND RELIGIOUS ESTABLISHMENTS", image: mosqueImage },
  { title: "PARKING LOTS AND PUBLIC FACILITIES", image: parkingImage },
  { title: "ENGINEERING AND PROJECT MANAGEMENT", image: prototypeImage },
  { title: "INSTALLATION AND REPAIR OF SANITATION SYSTEMS", image: sanitationImage }
];
</script>

<template>
  <div class="flex flex-col space-y-4 lg:px-20">
    <h1 class="font-bold text-4xl">Services</h1>
    <p class="text-3xl">
      Diverse services: projects that reflect ambitions and meet every need
    </p>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="service in services" class="flex flex-col justify-center items-center shadow-lg p-4">
        <img :src="service.image" alt="" class="w-12" />
        <h1>{{ service.title }}</h1>
      </div>
    </div>
  </div>
</template>
