<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderButton",
  props:{
    icon:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:''
    }
  }
})
</script>

<template>
  <div class="ring-1 ring-surface-300 p-2 pr-4 pl-4 font-orbitron rounded-xl mr-10  grid grid-cols-2 select-none hover:bg-primary-600 transition-colors hover:ring-ultra-100">
    <div class="text-left flex items-center">
      <i :class="icon"/>
    </div>
    <div class="text-right  flex items-center justify-end ">{{label}}</div>
  </div>
</template>

<style scoped>

</style>