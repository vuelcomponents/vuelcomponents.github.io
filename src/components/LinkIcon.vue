<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LinkIcon",
  props:{
    link:{
      type:String,
    },
    icon:{
      type:String,
    },
    svg:{
      type:Boolean,
      default:false
    },
    html:{
      type:String
    },
  }
})
</script>

<template>
<div class=" border-b-2 border-surface-500 text-surface-500 hover:text-primary-50 hover:border-primary-800 select-none ring-1 ring-surface-500 rounded-xl flex items-center justify-center hover:bg-ultra-100 hover:ring-primary-800 transition-colors cursor-pointer">
  <div class="pr-1 pl-1 flex justify-center items-center"  v-if="!svg">
    <i :class="[icon]" />
  </div>  <div v-if="svg" v-html="html" class="w-[30px] h-[30px] flex justify-center items-center"/>

</div>
</template>

<style scoped>

</style>