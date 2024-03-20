<script setup lang="ts">
import {AgGridVue} from "ag-grid-vue3";
import {Grid} from "@/utils/grid/Grid";
import Dialog from "primevue/dialog";
import type{
  CellClickedEvent
} from 'ag-grid-community';
import {ref} from "vue";
import TypesColumnDef from "@/utils/grid/columns/TypesColumnDef";
import {TypesService} from "@/services/TypesService";

const service = new TypesService();
const dialog = ref<any>({
  open:false,
  code:''
})

const grid = new Grid(
    {
      onCellClicked: (params:CellClickedEvent)=>{
        if(params.colDef.field ==='preview'){
          dialog.value.open = true;
          dialog.value.code = params.data.code
        }
      },
      onCellValueChanged: undefined,
    },
    {
      loadList: undefined,
    },
    {
      service
    }
);
</script>

<template>
  <Dialog v-model:visible="dialog.open" modal>
    <VCodeBlock
        :code="dialog.code"
        highlightjs
        lang="javascript"
        theme="night-owl"
    />
  </Dialog>
  <AgGridVue
      class="ag-theme-quartz h-full w-full"
      domLayout="autoHeight"
      :rowData="grid.data"
      :grid-options="grid.options"
      rowSelection="multiple"
      animateRows="true"
      :columnDefs="TypesColumnDef()"
  />
</template>

<style scoped>

</style>