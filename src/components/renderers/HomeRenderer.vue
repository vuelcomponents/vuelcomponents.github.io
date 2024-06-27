<script setup lang="ts">
import {PropType} from "vue";
import {VuelCalendarEvent} from "vuelcalendar";

const props = defineProps({
  event:{
    type:Object as PropType<VuelCalendarEvent>,
    required:true
  }
})
console.log(props)
</script>

<template>
  <div class="gap-2 bg-white cursor-grab " :style="{ cursor:event.data.cursor, width:'100%', height:'100%'}">
    <div class="bg-gang-400/70 rounded-lg pointer-events-none">
      <div class="flex items-center ">
        <img :src="event.data.img" class="w-12 rounded-lg m-2">
        <div>
          <p>{{event.label}}</p>
          <p class="text-sm text-gang-300">{{event.data.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>