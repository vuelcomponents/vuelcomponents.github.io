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
      color: '#fff',
      cursor: event.data.cursor,
      width: '100%',
      height: '100%',
      background: event.data.color,
    }"
  >
    <i :class="event.data.icon" />
    {{ event.label }}
  </div>
</template>

<style scoped></style>
