<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FunctionRenderer",
  props:{
    params:{
      type:Object,
      required:true,
    }
  }
})
</script>

<template>
  <div class="bg-ultra-100 transition-colors hover:bg-ultra-100/50 w-full rounded-full flex justify-center cursor-pointer h-fit">
   <i class="mdi mdi-eye-arrow-left"/>
  </div>
</template>

<style scoped>

</style>