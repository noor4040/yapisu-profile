<script setup lang="js"></script>

<template>
  <div
    class="relative w-full lg:h-[600px] 2xl:h-[900px] h-[400px] bg-cover bg-center flex items-center lg:px-20 px-4 md:px-16 xl:px-24 2xl:px-60"
    style="background-image: url('/public/Project 20_2.jpg')"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- White text -->
    <div class="relative z-10 text-white text-left rtl:text-right w-9/12">
      <h1 class="lg:text-5xl font-bold text-3xl 2xl:text-[100px]">
        {{ $t('aboutBanner.about') }} {{ $t('aboutBanner.title') }}      </h1>
      <p
        class="mt-2 lg:text-4xl text-2xl 2xl:text-[60px] 2xl:leading-relaxed lg:leading-snug"
      >
      {{ $t('aboutBanner.description') }}
    </p>
    </div>
  </div>
</template>
