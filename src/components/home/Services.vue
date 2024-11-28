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
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const capitalizeTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const services = [
  { title: "industrialBuildings", image: infraImage },
  { title: "hospitals", image: hospitalImage },
  { title: "schools", image: schoolImage },
  { title: "hotels", image: hotelImage },
  { title: "offices", image: workplaceImage },
  { title: "shops", image: mallImage },
  { title: "restaurants", image: restaurantImage },
  { title: "sportsVenues", image: arenaImage },
  { title: "mosques", image: mosqueImage },
  { title: "parkingLots", image: parkingImage },
  { title: "engineering", image: prototypeImage },
  { title: "sanitation", image: sanitationImage }
];
</script>

<template>
  <div class="flex flex-col lg:space-y-6 xl:px-20 space-y-4 2xl:container">
    <div class="flex flex-col space-y-2">
      <h1 class="font-bold lg:text-5xl text-3xl">{{ $t("Services") }}</h1>
      <p class="lg:text-2xl text-xl">
        <span class="font-bold">{{ $t("Diverse services") }}</span>
        {{ $t("projects that reflect ambitions and meet every need") }}
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
        <h1 class="md:w-40 w-32 2xl:w-full">
          {{ $t(service.title) }}
        </h1>
      </div>
    </div>
  </div>
</template>
