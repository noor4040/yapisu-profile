<script lang="js" setup>
const counters =[
    {
        title:"completed projects",
        number:150
    },
    {
        title:"ongoing projects ",
        number:100
    },
    {
        title:"qualified engineers",
        number:99
    },
    {
        title:"satisfied clients",
        number:50
    }
]
</script>

<template>
  <div
    class="xl:px-20 flex flex-col md:flex-row justify-between items-center space-y-4"
  >
    <div class="md:w-[500px] flex flex-col space-y-8">
      <div
        class="flex flex-col space-y-2 justify-center content-center items-start"
      >
        <h1 class="lg:text-4xl md:text-2xl font-bold text-lg">
          enduring efficiency and continuous progress
        </h1>
        <p class="lg:text-xl text-md">
          every project we undertake represents an opportunity to demonstrate
          our ability to achieve the highest levels of efficiency while
          prioritizing client needs and satisfaction.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:gap-x-[40px] lg:gap-y-10 gap-5">
        <div v-for="counter in counters">
          <h1 class="lg:text-[65px] text-xl">{{ counter.number }} +</h1>
          <h1 class="lg:text-[30px] text-md text-primaryRed">
            {{ counter.title }}
          </h1>
        </div>
      </div>
    </div>
    <div>
      <img
        src="@/assets/images/efficiency.png"
        alt=""
        class="rounded-lg w-[400px] md:w-[300px]"
      />
    </div>
  </div>
</template>
