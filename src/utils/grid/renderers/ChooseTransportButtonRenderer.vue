<template >
  <div class="flex justify-center items-center w-full">
    <Button
      :label="$t('selectCar')"
      severity="success"
      class="w-full"
      :disabled="params.data.transport_status !== null && params.data.transport_status !== '0'"
      icon="mdi mdi-import"
      @click="choose"
      />
  </div>
</template>
<script lang="ts">
import {defineComponent, inject, type PropType} from 'vue';
import Button from 'primevue/button';
import type { RowNode } from 'ag-grid-community';
import type {ServiceRoots} from "@/services/ServiceRoots";
import type {TransportService} from "@/services/TransportService";
export default defineComponent({
  components:{Button},
  setup(){
    const services = inject('services') as ServiceRoots;
    const transportService = services.create('TransportService') as TransportService;
    return{
      transportService
    }
  },
  props:{
    params:{
      type:Object as PropType<RowNode>,
      required:true,
    }
  },
  methods:{
    choose(){
      this.transportService.setTransport(this.params.data.transport_id).then(res=>{
        if(res.status === 200){
          if(this.$router){
            this.$router.push({name: 'pick'})
          }
        }
      })
    }
  }
})
</script>
<style >
  
</style>