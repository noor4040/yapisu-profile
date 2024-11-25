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
  <div class="lg:px-20 flex justify-between items-center">
    <div class="w-[500px] flex flex-col space-y-8">
      <div class="flex flex-col space-y-2">
        <h1 class="text-4xl font-bold">
          enduring efficiency and continuous progress
        </h1>
        <p class="text-xl">
          every project we undertake represents an opportunity to demonstrate
          our ability to achieve the highest levels of efficiency while
          prioritizing client needs and satisfaction.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-x-[40px] gap-y-10">
        <div v-for="counter in counters">
          <h1 class="text-[65px]">{{ counter.number }} +</h1>
          <h1 class="text-[30px] text-primaryRed">{{ counter.title }}</h1>
        </div>
      </div>
    </div>
    <div>
      <img
        src="@/assets/images/efficiency.png"
        alt=""
        class="rounded-lg w-[400px] "
      />
    </div>
  </div>
</template>
