<template>
  <Menubar class="w-full mb-1" :model="mainMenu" />
  <VCodeBlock
      code="> npm i vuelcalendar"
      highlightjs
      lang="javascript"
      theme="night-owl"
  />
  <div class="text-right mb-2 text-2xl font-orbitron text-surface-400">
    VuelCalendar
  </div>
  <main>
    <router-view/>
  </main>

</template>
<script setup lang="ts">
import Menubar from "primevue/menubar";
import $router from "@/plugins/router";
const mainMenu =[
  {
    label:'Preview',
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
]

</script>


