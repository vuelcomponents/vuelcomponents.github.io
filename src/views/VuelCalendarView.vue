<template>
  <Menubar class="w-full mb-1" :model="mainMenu" />
  <VCodeBlock
      code="> npm i vuelcalendar"
      highlightjs
      lang="javascript"
      theme="night-owl"
  />
  <div class="text-right mb-2 text-2xl font-orbitron text-surface-400 flex items-center justify-end gap-2">
    <img @click="redirectNPM" :src="npm" width="25" class="inline cursor-pointer" /> VuelCalendar v0.7
  </div>
  <main>
    <router-view/>
  </main>

</template>
<script setup lang="ts">
import Menubar from "primevue/menubar";
import $router from "@/plugins/router";
import npm from '@/assets/npm.svg';
function redirectNPM(){
  window.open('https://www.npmjs.com/package/vuelcalendar')
}
const mainMenu =[
  {
    label:'Demo',
    icon:'mdi mdi-magnify',
    command:()=>{$router.push({name:'preview'})}
  },
  {
    label:'Quick start',
    icon:'mdi mdi-bug-play',
    command:()=>{$router.push({name:'readme'})}
  },
  {
    label:'API functions',
    icon:'mdi mdi-function',
    command:()=>{$router.push({name:'functions'})}
  },
  {
    label:'Events',
    icon:'mdi mdi-function-variant',
    command:()=>{$router.push({name:'events'})}
  },
  {
    label:'Types',
    icon:'mdi mdi-language-typescript',
    command:()=>{$router.push({name:'types'})}
  },
  {
    label:'Params',
    icon:'mdi mdi-data-matrix',
    command:()=>{$router.push({name:'params'})}
  },
  {
    label:'Features v0.7^',
    icon:'mdi mdi-speedometer',
    command:()=>{$router.push({name:'performance'})}
  },
]

</script>


