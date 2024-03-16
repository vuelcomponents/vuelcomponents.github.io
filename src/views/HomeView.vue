<script lang="ts">
import {defineComponent} from 'vue'
import HeaderButton from "@/components/HeaderButton.vue";


export default defineComponent({
  name: "HomeView",
  components: {HeaderButton},
  data(){

  },
  methods:{

  }
})
</script>

<template>

  <h1 class="text-5xl">Ultimate Toolkit for Vue.js Developers</h1>

  <h1 class="text-xl mt-5">Unlock the full potential of your web applications with VueComponent's cutting-edge suite of customizable and feature-packed UI components. Whether you're a seasoned developer or just starting out, VueComponent empowers you to effortlessly bring your development ideas to life.</h1>
  <div class="bg-primary-600 p-2 rounded-xl mt-2">VuelComponents v0.1, EST 2024</div>
  <div class="w-full flex">
    <HeaderButton label="Give a star" icon="mdi mdi-star text-ultra-yellow" class="w-fit mt-5"/>
    <HeaderButton label="Donate" icon="mdi mdi-hand-coin-outline" class="w-fit mt-5"/>
    <HeaderButton label="Author" icon="mdi mdi-linkedin " class="w-fit mt-5"/>
    <HeaderButton label="MIT" icon="mdi mdi-scale-balance " class="w-fit mt-5"/>
  </div>

</template>

<style scoped>

</style>