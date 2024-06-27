<script setup lang="ts">

import {menu, getShortenMenu} from "@/utils/menu";
import Menubar from 'primevue/menubar'
</script>

<template>
  <div class="flex pr-4 lg:pr-20 lg:pl-20 pl-4 h-[100px]  ">
    <div class="">
      <div class="col-span-1">
        <h1 class="text-xl lg:text-3xl">Efficient and customizable Calendar Scheduler</h1>
        <h1 class="text-sm lg:text-xl">Designed for Vue & Vanilla Developers</h1>
      </div>

    </div>
  </div>

  <div class="pr-4 lg:pr-20 lg:pl-20 pl-4  ">
    <div>
      <Menubar :model="getShortenMenu($router)"></Menubar>
    </div>
  </div>

  <div class="pt-10 pr-4 lg:pr-20 lg:pl-20 pl-4 ">
    <div>
      <router-view/>
    </div>
  </div>
  <router-view/>
</template>
