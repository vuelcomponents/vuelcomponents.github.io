<script setup lang="ts">
import Menu from "primevue/menu";
import {menu} from "../utils/menu.ts";
import {methods} from "../utils/libs/api-functions.ts";
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
import {scrollTo} from "../utils/scrollTo.ts";
const route:any = useRoute()
onMounted(()=>{
  scrollTo(route.query.docs)
})
watch(route, (to:any) => {
  scrollTo(to.query.docs)
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-6 gap-5">
    <div class="col-span-1">
      <Menu :model="[menu($router)[2]]"></Menu>
    </div>

    <div class="col-span-5">
      <div v-for="(method, index) in methods" :key="index">
        <h1 class="text-3xl mt-4" :id="method.call"># {{method.name}}</h1>
        <p class="mb-2">{{method.description}}</p>
        <p class="mb-2">args: {{method.args}}</p>
        <p class="mb-2">call: <strong>{{method.call}}</strong></p>
        <VCodeBlock
            :code="method.code"
            highlightjs
            lang="javascript"
            theme="a11y-light"
            class="shadow mt-2 mb-2"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>