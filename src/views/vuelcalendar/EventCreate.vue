<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type {ConfigureEventsByParam, IVuelCalendarApi, VuelCalendarDay, VuelCalendarEvent} from "vuelcalendar";
import Button from "primevue/button";
import w1 from "@/assets/w1.png";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
export default defineComponent({
  name: "EventCreate",
  components:{Button},
  setup(){
    return {
      img: ()=>  [w1,m1,m2,m3][Math.floor(Math.random() * 4)],
      color:()=> ['#454a89','#56a36b', '#438789'][Math.floor(Math.random() * 3)]
    }
  },
  props:{
    day:{
      type:Object as PropType<VuelCalendarDay>
    },
    calendarApi:{
      type:Object as PropType<IVuelCalendarApi>,
      required:true
    }
  },
  data(){
    return{
      date: this.day?.date ?? new Date(),
      fields:{
        label:'',
        start:new Date(),
        end:new Date(new Date().setHours(new Date().getHours() + 2)),
        data:{
          img:undefined
        } as any
      }
    }
  },
  methods:{
    addEvent(){
      const event:VuelCalendarEvent = {
        start:this.fields.start,
        end:this.fields.end,
        label:this.fields.label,
        data:{
          img:this.img(),
          color:this.color()
        }
      }
      this.calendarApi.addEvents([event])
    }
  }

})
</script>

<template>
<section class="">
  <div class="grid grid-cols-2 gap-2">
    <input-date v-model="fields.start" date-format="yy-mm-dd" showTime hourFormat="24" class="w-full  date"/>
    <input-date v-model="fields.end" date-format="yy-mm-dd" showTime hourFormat="24" class="w-full date"/>
    <input-text v-model="fields.label" placeholder="Event label" class="w-full"/>
    <Button class="w-full" :disabled="fields.label === ''" @click="addEvent">Add this event</Button>
  </div>

</section>
</template>
