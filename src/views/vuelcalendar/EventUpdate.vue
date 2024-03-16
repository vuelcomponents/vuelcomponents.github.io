<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type {ConfigureEventsByParam, IVuelCalendarApi, VuelCalendarDay, VuelCalendarEvent} from "vuelcalendar";
import Button from "primevue/button";
import w1 from "@/assets/w1.png";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
export default defineComponent({
  name: "EventUpdate",
  components:{Button},
  props:{
    event:{
      type:Object as PropType<VuelCalendarEvent>,
      required:true
    },
    calendarApi:{
      type:Object as PropType<IVuelCalendarApi>,
      required:true
    }
  },
  data(){
    return{
      fields:{
        label:this.event.label,
        start:this.event.start,
        end:this.event.end,
        data:this.event.data
      }
    }
  },
  methods:{
    editEvent(){
      const event:VuelCalendarEvent = {
        start:this.fields.start,
        end:this.fields.end,
        label:this.fields.label,
      }
      this.calendarApi.addEvents([event])
    }
  }

})
</script>

<template>
  <section class="">
    <div class="grid grid-cols-2 gap-2">
      <input-date v-model="fields.start" date-format="yy-mm-dd" showTime hourFormat="24" class="w-full date"/>
      <input-date v-model="fields.end" date-format="yy-mm-dd" showTime hourFormat="24" class="w-full date"/>
      <input-text v-model="fields.label" placeholder="Event label" class="w-full"/>
      <Button class="w-full" :disabled="fields.label === ''" @click="editEvent">Save changes</Button>
    </div>

  </section>
</template>

<style >
.date input{
  color:theme(colors.surface.300)!important;
}
</style>