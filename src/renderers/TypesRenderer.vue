<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TypesRenderer",
  props:{
    type:Object,
    required:true
  }
})
</script>

<template>
<div>
  <VCodeBlock
      :code="params.data.structure"
      highlightjs
      lang="javascript"
      theme="night-owl"
  />
</div>
</template>

<style scoped>

</style>