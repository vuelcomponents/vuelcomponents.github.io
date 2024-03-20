<script lang="ts">
import darkLogo from '@/assets/dark-logo.png';
import {defineComponent} from "vue";
import LinkIcon from "@/components/LinkIcon.vue";
import HeaderButton from "@/components/HeaderButton.vue";

export default defineComponent({
  components: {HeaderButton, LinkIcon},
  setup(){
    return {
      darkLogo
    }
  },

  methods:{

  }
})
</script>

<template>
<main class="bg-surface-900 w-[100vw] h-[100vh] text-primary-50 grid lg:grid-cols-12 grid-cols-2">
  <nav class=" w-full bg-surface-900  p-2  col-span-2 border-surface-800 border-r-2 font-mulish " >
    <div class="flex justify-center items-center font-orbitron flex-row  lg:flex-col   ">
      <img :src="darkLogo" class="w-5 pr-5 min-w-[50px] lg:w-[80px]"/>
      <p class="text-xl lg:text-2xl">Vuel</p>
    </div>
    <div class="mt-2 lg:mt-10 text-[0.8em] border-surface-700 text-surface-400" style="border-bottom-width: 1px">Components</div>
    <div @click="$router.push({name:'calendar'})" class="flex text-surface-300  text-sm hover:ring-1 rounded  ring-surface-500 select-none hover:ring-ultra-100 hover:bg-primary-600 transition-colors cursor-pointer">
      <i class="mdi mdi-calendar pr-1"/> <p class="font-bold">VuelCalendar</p>
    </div>
  </nav>
  <div class="col-span-10 bg-surface-800 font-mulish p-3  lg:p-10">
    <router-view/>
  </div>
</main>
</template>

<style>
.centered *{
  display:flex;
  justify-content:center;
}
</style>