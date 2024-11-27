<script lang="js" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const counters = [
  {
    title: "Completed Projects",
    number: 150,
  },
  {
    title: "Ongoing Projects",
    number: 100,
  },
  {
    title: "Qualified Engineers",
    number: 99,
  },
  {
    title: "Satisfied Clients",
    number: 50,
  },
];

const obj1 = ref(0);
const obj2 = ref(0);
const obj3 = ref(0);
const obj4 = ref(0);

// Animation function
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Intersection Observer callback
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue(obj1, 0, counters[0].number, 5000);
      animateValue(obj2, 0, counters[1].number, 5000);
      animateValue(obj3, 0, counters[2].number, 5000);
      animateValue(obj4, 0, counters[3].number, 5000);
      observer.disconnect(); // Stop observing after triggering
    }
  });
}

let observer = null;

onMounted(() => {
  const target = document.querySelector('.counter-section');
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
  if (target) {
    observer.observe(target);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div
    class="xl:px-20 xl:py-16 flex flex-col md:flex-row justify-between items-center space-y-4 2xl:container"
  >
    <div class="xl:w-[500px] md:w-[300px] flex flex-col space-y-8">
      <div
        class="flex flex-col xl:space-y-12 md:space-y-6 justify-center content-center items-start"
      >
        <h1 class="xl:text-5xl lg:text-3xl md:text-2xl font-bold text-xl">
          Enduring efficiency and continuous progress
        </h1>
        <p class="lg:text-2xl text-justify text-md">
          Every project we undertake represents an opportunity to demonstrate
          our ability to achieve the highest levels of efficiency while
          prioritizing client needs and satisfaction.
        </p>
      </div>
    </div>

    <div>
      <!--      <img src="@/assets/images/efficiency.png" alt="" class="rounded-lg w-[400px] md:w-[300px]" />-->
      <div
        class="grid grid-cols-2 lg:gap-x-[40px] lg:gap-y-24 gap-5 counter-section"
      >
        <div v-for="(counter, index) in counters" :key="index">
          <h1 class="xl:text-[60px] md:text-[40px] text-xl">
            {{
              index === 0
                ? obj1
                : index === 1
                ? obj2
                : index === 2
                ? obj3
                : obj4
            }}
            +
          </h1>
          <h1
            class="lg:text-[25px] mt-4 text-sm text-primaryRed"
          >
            {{ counter.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
