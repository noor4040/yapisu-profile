<script setup lang="js">
const values = [
  { title: "values.quality.title", description: "values.quality.description" },
  { title: "values.innovation.title", description: "values.innovation.description" },
  { title: "values.safety.title", description: "values.safety.description" },
  { title: "values.transparency.title", description: "values.transparency.description" },
  { title: "values.timelyDelivery.title", description: "values.timelyDelivery.description" },
  { title: "values.sustainability.title", description: "values.sustainability.description" },
];
</script>

<template>
  <div class="flex flex-col lg:space-y-6 xl:px-20 space-y-4 px-4 2xl:px-60">
    <div
      class="grid lg:grid-cols-3 lg:gap-8 grid-cols-1 gap-4 w-full self-center 2xl:text-[40px]"
    >
      <div
        v-for="(value, index) in values"
        :key="index"
        class="flex flex-col border-l-4 rtl:border-r-4 rtl:border-l-0 hover:border-l-primaryRed rtl:hover:border-r-primaryRed cursor-pointer transition-all ease-in-out p-4 text-center space-y-2"
      >
        <h1
          class="md:w-50 w-50 font-bold text-xl text-primaryRed text-left rtl:text-right 2xl:text-[45px]"
        >
          {{ $t(value.title) }}
        </h1>
        <p class="md:w-50 w-50 text-left rtl:text-right">
          {{ $t(value.description) }}
        </p>
      </div>
    </div>
  </div>
</template>
