<script setup lang="js">
import { defineProps, defineEmits } from "vue";

defineProps({
  baseClass: {
    type: String,
    default: "text-lg hover:text-primaryRed transition-all ease-in-out hover:underline",
  },
  activeClass: {
    type: String,
    default: "text-primaryRed font-bold underline",
  },
});

const pages = [
  {
    name: "Home",
    route: "/",
    click: null,
  },
  {
    name: "About Us",
    route: "/about",
    click: null,
  },
  {
    name: "Projects",
    route: "/projects",
    click: null,
  },
  {
    name: "Gallery",
    route: "/gallery",
    click: null,
  },
];

defineEmits(["link-click"]);
</script>

<template>
  <router-link
    v-for="page in pages"
    :key="page.name"
    :to="page.route"
    :class="baseClass"
    :active-class="activeClass"
    @click="$emit('link-click')"
  >
    {{ page.name }}
  </router-link>
</template>