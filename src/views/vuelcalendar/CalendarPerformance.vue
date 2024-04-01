<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CalendarPerformance"
})
</script>

<template>
<div class="ring-surface-900 p-2 ring-1 rounded-xl">
  <h1 class="text-xl font-bold mb-2">1. Performance Mode</h1>

  <p>Performance Mode has been introduced with version 0.7 of VuelCalendar. This mode operates based on two pillars:
    <p class="mb-2"> <b><span class="text-ultra-100 block mb-2">Virtual Scrolling & Event Caching in two-dimensional arrays.</span></b>
      By utilizing these two solutions and combining their applications, you can load unlimited amounts of events at once and smoothly conduct operations on them.
      Virtual Scrolling renders the number of components/events appropriate for a given day, relative to the container's height, while caching events in two-dimensional arrays allows for dynamic changes along the time axis with a limitation on rerendering edited components.
    </p>
    <b>Using the performance mode still grants access to the full list of events for the day, available through the onDayClicked & onDayDblClicked events.</b>
    <h2 class="mb-2">This mode is particularly recommended when you don't control the flow of events through backend integration (typical for applications such as pagination).</h2>
    This allows you to maintain 100% performance and enjoyable work with the calendar.

    <p class="mt-2 font-bold">However, it is still recommended to load events for the corresponding time intervals along with calendar date changes.
      A proper full-stack approach should work as follows: - set the date, then fetch events from the server for the time interval, and finally setEvents(events).</p>
</p></div>
</template>

<style scoped>

</style>