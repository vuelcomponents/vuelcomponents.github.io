<script setup lang="ts">
import ll from "../assets/light-logo.png";
</script>

<template>
  <header
    class="fixed top-0 right-2 bg-gang-500 text-white/90 text-sm flex items-center justify-center px-2 py-1 rounded-b-xl"
  >
    <p>@vuelcomponents</p>
  </header>
  <div>
    <main
      class="w-full h-[60px] flex items-center justify-center pointer-events-none"
    ></main>
  </div>
  <div>
    <router-view />
  </div>
</template>
