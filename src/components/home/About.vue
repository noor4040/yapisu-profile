<script setup>
import router from "@/router/index.js"

const AboutPage = () => {
  router.push('/about')
};
</script>

<template>
  <div class="pb-12">
    <div class="flex flex-col  space-y-6 lg:px-20">
      <h1 class="font-bold lg:text-5xl text-3xl">About <span class="font-bold  text-primaryRed">Yapisu</span></h1>
      <p class="text-2xl text-justify">

        At <span class="font-bold  text-primaryRed">Yapisu </span>, we believe construction is not just about building
        structures but about transforming ideas into
        architectural experiences that inspire and endure. Our goal is to be true partners in shaping the future,
        creating
        vibrant buildings that enhance well-being and fulfill community aspirations. We apply cutting-edge technologies
        to
        exceed expectations, contributing to resilient communities equipped for the challenges of tomorrow. With a focus
        on diversity and inclusivity, our projects, from industrial buildings to mosques, drive progress and economic
        efficiency
      </p>
      <button @click="AboutPage"
          class="rounded-full hover:bg-primaryGrey transition-all ease-in-out  text-white w-fit py-4 px-10 bg-primaryRed">
        Read more
      </button>

    </div>
  </div>

</template>

<style scoped>

</style>