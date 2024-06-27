<script setup lang="ts">
import VuelCalendar, {IVuelCalendarApi} from "vuelcalendar";
import {homeOptions} from "@/utils/options/home-options";
import {ref} from "vue";
const calendarApi = ref<IVuelCalendarApi>()
const setCalendarApi = (api:IVuelCalendarApi)=>{
  calendarApi.value = api;
}
</script>

<template>
  <div>
    <div class="flex w-full justify-between">
      <div class="h-fit px-8 pt-2 xl:pt-0 xl:py-8">
        <h1 class="xl:text-5xl text-xl text-gang-600 font-bold font-yesteryear">
          Vue.js Components
        </h1>
        <p>
          A Useful and Optimized Toolkit for Vue.js Developers
        </p>
      </div>
    </div>
    <div class="h-full w-full px-8 py-4 xl:py-[0]">
      <div class="h-full w-full ring-1 rounded-lg ring-black/10 relative">
        <h1 class="text-gang-600 text-2xl bg-gang-400 rounded-t-lg flex gap-2 px-2">
          <i class="mdi mdi-github"/>
          <i class="mdi mdi-npm"/>
        </h1>
        <h1 class="text-gang-600 p-4">
          VuelCalendar 1.0
        </h1>
        <p class="px-4 text-gang-600/50 text-sm">
          Component designed to facilitate event planning operations. It allows users
          to create events directly on the calendar, streamlining tasks such as scheduling work shifts or employee plans.
        </p>
        <div class="px-8 py-4" >

          <VuelCalendar :vuel-calendar-options="homeOptions(setCalendarApi)"/>
        </div>
        <div class="px-4 py-2 w-full  absolute bottom-2 flex justify-between gap-1">
          <div class="w-full h-12 bg-gang-400 rounded-lg text-gang-600 flex items-center justify-center hover:brightness-125 cursor-pointer" @click="$router.push({name:'FullDemoCalendar'})">
            <i class="mdi mdi-navigation text-gang-600 mr-2"/> Full Demo
          </div>
          <div class="w-full h-12 bg-gang-300 rounded-lg text-gang-100 flex items-center justify-center hover:brightness-125 cursor-pointer" @click="$router.push({name:'Guide'})">
            <i class="mdi mdi-navigation text-gang-100 mr-2"/> Docs
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
