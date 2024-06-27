<script setup lang="ts">
import Menu from "primevue/menu";
import { menu } from "../utils/menu.ts";
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import { scrollTo } from "../utils/scrollTo.ts";
import { params } from "../utils/libs/params.ts";
const route: any = useRoute();
onMounted(() => {
  scrollTo(route.query.docs);
});
watch(route, (to: any) => {
  scrollTo(to.query.docs);
});
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-6 gap-5">
    <div class="col-span-1">
      <Menu :model="[menu($router)[5]]"></Menu>
    </div>

    <div class="col-span-5">
      <div v-for="(param, index) in params" :key="index">
        <h1 class="text-3xl mt-4" :id="param.param"># {{ param.param }}</h1>
        <p class="mb-2">{{ param.description }}</p>
        <p class="mb-2">type: {{ param.type }}</p>
        <VCodeBlock
          :code="param.code"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
