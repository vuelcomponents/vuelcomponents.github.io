<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type { RowNode } from 'ag-grid-community';
export default defineComponent({
  name: "OrderStatusRenderer",
  props:{
    params:{
      type:Object as PropType<RowNode>,
      required:true,
    }
  }
})
</script>

<template>
<div v-if="params.data.status === '1' ||params.data.status === 1 " class="text-[#bed754]">
  <i class="mdi mdi-check mr-5 inline"/> <p class="inline"> {{ $t('delivered') }}</p>
</div>
<div v-if="params.data.status === '2' ||params.data.status === 2 " class="text-[#c084fc]">
  <i class="mdi mdi-check mr-5 inline"/> <p class="inline"> {{ $t('emptyStock') }}</p>
</div>
<div v-if="params.data.status === null ||params.data.status === 0 ||params.data.status === '0'  " class="text-[#60a5fa]">
  <i class="mdi mdi-timer-sand mr-5 inline"/> <p class="inline"> {{ $t('awaiting') }}</p>
</div>
</template>

<style scoped>

</style>