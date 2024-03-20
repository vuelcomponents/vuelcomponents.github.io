<script lang="ts">
import {defineComponent} from 'vue'
import usage from './usage.txt'
export default defineComponent({
  name: "CalendarReadme",
  data(){
    return{
      usageCode:'Loading...'
    }
  },
  async mounted(){
    const _1 = await fetch(usage);
    this.usageCode = await _1.text()
  }
})
</script>

<template>
  <div class="mt-2">
    <VCodeBlock
        :code="usageCode"
        highlightjs
        lang="javascript"
        theme="night-owl"
    />

  </div>

</template>

<style scoped>

</style>