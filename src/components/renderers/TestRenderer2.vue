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
  <div :style="{background:event.data.color2, padding:'4px', height:'70px', display:'flex'}">
    <div style="width:100%">
      <strong >{{event.data.title2}}</strong>
      <p>{{event.data.description2}}</p>
    </div>
    <img class="ml-5" :src="event.data.img1" style="border-radius:5px; height:60px"/>
  </div>
</template>

<style scoped>

</style>