<template>
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="flex items-center bg-none text-lg space-x-2 rtl:space-x-reverse"
      >
        <span>{{ currentLanguage }}</span>
        <svg
          class="w-4 h-4 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :class="{ 'rotate-180': dropdownOpen }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
  
      <!-- Dropdown menu -->
      <ul
        v-if="dropdownOpen"
        class="absolute left-0 rtl:right-0 w-40 mt-2 bg-white rounded-lg flex flex-col space-y-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      >
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="px-4 py-2 text-gray-700 cursor-pointer hover:bg-primaryRed hover:text-[#fff] rounded-lg"
          :class="{
            'bg-primaryRed text-[#fff]': locale === lang.code, // Highlight the selected language
          }"
        >
          {{ lang.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from "vue";
  import { useI18n } from "vue-i18n";
  
  const { locale } = useI18n();
  
  const dropdownOpen = ref(false);
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };
  
  const changeLanguage = (lang: string) => {
    locale.value = lang;
    localStorage.setItem("language", lang);
    dropdownOpen.value = false;
  };
  
  const currentLanguage = computed(() => {
    return locale.value === "en" ? "English" : "العربية";
  });
  
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];
  
  onMounted(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      locale.value = savedLanguage;
    }
  });
  </script>
  
  <style scoped></style>