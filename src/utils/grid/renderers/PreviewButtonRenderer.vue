<template >
  <div class="flex justify-center items-center w-full">
    <Button
      :label="$t('preview')"
      severity="info"
      class="w-full"
      icon="mdi mdi-import"
      />
  </div>
</template>
<script lang="ts">
import {defineComponent, type PropType} from 'vue';
import Button from 'primevue/button';
import type { RowNode } from 'ag-grid-community';

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  components:{Button},
  props:{
    params:{
      type:Object as PropType<RowNode>,
      required:true,
    }
  },
})
</script>
<style >
  
</style>