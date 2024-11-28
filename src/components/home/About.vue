<script setup>
import router from "@/router/index.js";

const AboutPage = () => {
  router.push("/about");
};
</script>

<template>
  <div>
    <div class="flex flex-col space-y-6 xl:px-20 2xl:container">
      <h1 class="font-bold lg:text-5xl text-3xl">
        {{ $t("about") }}
        <span class="font-bold text-primaryRed">{{ $t("Yapisu") }}</span>
      </h1>
      <p class="text-2xl lg:text-justify">
        {{ $t("at") }}
        <span class="font-bold text-primaryRed">{{ $t("Yapisu") }} </span
        >{{ $t("aboutYapisuDescription") }}
      </p>
      <button
        @click="AboutPage"
        class="rounded-full hover:bg-primaryGrey transition-all ease-in-out text-white w-fit py-4 px-10 bg-primaryRed"
      >
        {{ $t("readMore") }}
      </button>
    </div>
  </div>
</template>
