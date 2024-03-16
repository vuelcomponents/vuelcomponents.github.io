<template >
  <div class="flex justify-center items-center w-full">
    <Button
        :label="$t('delivered')"
        severity="success"
        icon="mdi mdi-check"
        class="w-full"
        @click="delivered(params.data.to_spec_id)"
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
import type {OrderService} from "@/services/OrderService";
export default defineComponent({
  components:{Button},
  setup(){
    const services = inject('services') as ServiceRoots;
    const orderService = services.create('OrderService') as OrderService;
    return{
      orderService
    }
  },
  props:{
    params:{
      type:Object as PropType<RowNode>,
      required:true,
    }
  },
  methods:{
    delivered(toSpecId:number){
      this.orderService.delivered(toSpecId).then(res=>{
        console.log(res, toSpecId)
        if(res.status===200) {
          this.params.api.forEachNode((node) => {
            if (node.data['to_spec_id'] === res.data.to_spec_id) {
              node.setData(res.data);
            }
          });
        }
      })

    }
  },
})
</script>
<style >

</style>