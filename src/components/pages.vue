<script setup lang="js">
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n(); // Import the translation function


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
    name: "home", 
    route: "/",
    click: null,
  },
  {
    name: "aboutUs", 
    route: "/about",
    click: null,
  },
  {
    name: "projects", 
    route: "/projects",
    click: null,
  },
  {
    name: "gallery", 
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
  {{ $t(page.name) }}
</router-link>
</template>