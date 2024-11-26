<template>
  <main class="flex flex-col space-y-24">
    <AboutBanner/>
    <Text/>
    <Values/>
    <TextBold/>
    <Toggle/>

  </main>

</template>
<script setup>

import AboutBanner from "@/components/About/AboutBanner.vue";
import Text from "@/components/About/Text.vue";
import Values from "@/components/About/Values.vue";
import TextBold from "@/components/About/TextBold.vue";
import Toggle from "@/components/About/Toggle.vue";

import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style>

</style>
