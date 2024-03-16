<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type { RowNode, ICellRendererParams } from 'ag-grid-community';

export default defineComponent({
  name: "TransportStatusRenderer",
  props:{
    params:{
      type:Object as PropType<ICellRendererParams>,
      required:true
    }
  }
})
</script>

<template>
  <div v-if="!params.data.transport_status || params.data?.transport_status === '0'" class="bg-[#bed754] text-surface-0 rounded w-full pl-10 pr-10 max-h-[30px] pb-0 pt-0 flex items-center justify-center">
    <i class="mdi mdi-car pr-5"/>{{$t('freeCar')}}
  </div>
  <div v-if="params.data?.transport_status === '1'" class="bg-[#fb923c] text-surface-0 rounded w-full pl-10 pr-10 max-h-[30px] pb-0 pt-0 flex items-center justify-center">
    <i class="mdi mdi-car-off pr-5"/>{{$t('takenCar')}}
  </div>
  <div v-if="params.data?.transport_status === '2'" class="bg-[#f87171] text-surface-0 rounded w-full pl-10 pr-10 max-h-[30px] pb-0 pt-0 flex items-center justify-center">
    <i class="mdi mdi-car-wrench pr-5"/>{{$t('crashedCar')}}
  </div>
</template>

<style scoped>

</style>