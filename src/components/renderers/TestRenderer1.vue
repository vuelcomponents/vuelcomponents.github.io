<script setup lang="ts">
import { PropType } from "vue";
import { VuelCalendarEvent } from "vuelcalendar";

const props = defineProps({
  event: {
    type: Object as PropType<VuelCalendarEvent>,
    required: true,
  },
});
console.log(props);
</script>

<template>
  <div
    :style="{
      background: event.data.color,
      padding: '4px',
      height: '70px',
      display: 'flex',
    }"
  >
    <img :src="event.data.img1" style="border-radius: 5px; height: 60px" />
    <div class="ml-5">
      <strong>{{ event.data.title1 }}</strong>
      <p>{{ event.data.description1 }}</p>
    </div>
  </div>
</template>

<style scoped></style>
