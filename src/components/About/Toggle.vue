<script setup>
import { ref } from "vue";

const openSection = ref("overview");

function toggleSection(section) {
  openSection.value = openSection.value === section ? null : section;
}
</script>

<template>
  <div class="min-h-screen mx-auto lg:py-10 2xl:px-40 lg:px-20 px-4">
    <div 
      v-for="sectionKey in ['overview', 'vision', 'mission', 'efficiency']"
      :key="sectionKey"
      tabindex="0"
      :class="[
        'collapse',
        'collapse-arrow',
        'my-10',
        { 'collapse-open': openSection === sectionKey },
      ]"
      @click="toggleSection(sectionKey)"
    >
      <div class="collapse-title text-4xl font-medium text-primaryGrey 2xl:text-[60px]">
        {{ $t(`sections.${sectionKey}.title`) }}
      </div>
      <div class="collapse-content lg:text-justify text-lg text-primaryGrey leading-relaxed">
        <div v-if="$t(`sections.${sectionKey}.subtitle`)" class="text-2xl 2xl:text-[40px] 2xl:leading-10 font-medium text-primaryRed">
          {{ $t(`sections.${sectionKey}.subtitle`) }}
        </div>
        <p class="text-2xl 2xl:text-[40px] 2xl:leading-10 text-primaryGrey">
          {{ $t(`sections.${sectionKey}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.collapse-title {
  cursor: pointer;
}

.timeline-hr {
  background-color: black;
  transition: background-color 0.3s ease-in-out; /* Smooth transition */
}

li:hover .timeline-hr {
  background-color: #e62d18;
}
</style>
