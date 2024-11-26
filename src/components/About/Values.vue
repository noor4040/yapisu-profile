<script setup lang="js">


const values = [
  {
    title: ("QUALITY"),
    description: ("Yapisu ensures excellence with advanced technologies and top-quality materials, exceeding client expectations at every stage.")
  },
  {
    title: ("INNOVATION AND DEVELOPMENT"),
    description: ("Innovation drives Yapisu's strategy, leveraging modern technologies to enhance efficiency, cut costs, and meet evolving market needs.")
  },
  {
    title: ("SAFETY STANDARDS"),
    description: ("Yapisu prioritizes safety, enforcing top standards and protocols at every stage to ensure a secure environment for employees and clients.")
  },
  {
    title: ("TRANSPARENCY"),
    description: ("Yapisu builds trust through transparency, ensuring open communication on costs, timelines, and challenges for seamless project success.")
  },
  {
    title: ("TIMELY DELIVERY"),
    description: ("Yapisu excels in time management, consistently delivering projects on schedule and earning trust for large-scale endeavors.")
  },
  {
    title: ("SUSTAINABLE SOLUTIONS"),
    description: ("Yapisu champions sustainability, adopting eco-friendly practices to minimize impact and support sustainable development in communities.")
  },

];
</script>

<template>
  <div class="flex flex-col lg:space-y-6 xl:px-20 space-y-4">


    <div
        class="grid lg:grid-cols-3 lg:gap-8 grid-cols-2 gap-4 w-full self-center"
    >
      <div
          v-for="value in values"
          class="flex flex-col border-l-4 hover:border-l-primaryRed cursor-pointer transition-all ease-in-out  p-4 text-center space-y-2"
      >

        <h1 class="md:w-50 w-50 font-bold text-xl text-primaryRed text-left">{{ value.title }}</h1>
        <p class="md:w-50 w-50 text-left text-justify	 ">{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>
