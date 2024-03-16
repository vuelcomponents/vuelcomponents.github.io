<template >
  <div class="flex justify-center items-center w-full">
    <Button
      :label="$t('begin')"
      severity="success"
      icon="mdi mdi-import"
      class="w-full"
      @click="takeOrder(params.data.to_nag_id)"
      />
  </div>
</template>
<script lang="ts">
import {defineComponent, inject, type PropType} from 'vue';
import Button from 'primevue/button';
import type { RowNode } from 'ag-grid-community';
import type {ServiceRoots} from "@/services/ServiceRoots";
import type {TransportService} from "@/services/TransportService";
import type {PickService} from "@/services/PickService";
export default defineComponent({
  components:{Button},
  setup(){
    const services = inject('services') as ServiceRoots;
    const pickService = services.create('PickService') as PickService;
    return{
      pickService
    }
  },
  props:{
    params:{
      type:Object as PropType<RowNode>,
      required:true,
    }
  },
  methods:{
    takeOrder(toNagId:number){
      this.pickService.choosePick(toNagId).then(res=>{
        if(res.status===200){
          this.$router.push({name:'order' })
          console.log(res, toNagId)
        }
      })

    }
  },
})
</script>
<style >
  
</style>