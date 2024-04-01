<template>
  <Dialog v-model:visible="dialogs.create.open" modal>
    <EventCreate :close="close" :day="dialogs.create.day" :calendar-api="calendarApi"/>
  </Dialog>
  <Dialog v-model:visible="dialogs.edit.open" modal>
    <EventUpdate :close="close" :event="dialogs.edit.event" :calendar-api="calendarApi"/>
  </Dialog>

  <nav class="w-full flex">
    <Menubar class="w-full mb-1" :model="menu" />
  </nav>
  <nav>
    <div class="w-full grid gap-3 grid-cols-6 lg:grid-cols-8 p-3 min-h-[3rem] rounded-md shadow-md bg-ultra-kamikaze dark:bg-surface-900 ring-1 ring-inset ring-ultra-lightkamikaze dark:ring-surface-800 ring-offset-0">
      <div class="col-span-3 lg:col-span-2">
        <div class="text-[0.7em] pb-1 text-surface-400">
          <i class="mdi mdi-clock-start pr-2"/>
          Start Hour
        </div>
        <input-number v-model="fields.startHour" @update:model-value="setStartHour"  :min="0" :max="23" class="w-full input-cor"/>
      </div>
      <div class="col-span-3 lg:col-span-2">
        <div class="text-[0.7em] pb-1 text-surface-400">
          <i class="mdi mdi-clock-end pr-2"/>
          End Hour
        </div>
        <input-number v-model="fields.endHour"  @update:model-value="setEndHour" :min="0" :max="24" class="w-full input-cor"/>
      </div>
<!--      <div class="col-span-6 lg:col-span-2">-->
<!--        <div class="text-[0.7em] pb-1 text-surface-400">-->
<!--          <i class="mdi mdi-sort-numeric-ascending pr-2"/>-->
<!--          Days Forward-->
<!--        </div>-->
<!--        <input-number  @input="setDaysForward"  :min="1" :max="62" class="w-full"/>-->
<!--      </div>-->
      <div class="col-span-3 lg:col-span-2">
        <div class="text-[0.7em] pb-1 text-surface-400">
          <i class="mdi mdi-calendar-start pr-2"/>
          Start Date
        </div>
        <input-date v-model="fields.startDate" @update:model-value="setStartDate" date-format="yy-mm-dd"  class="w-full"/>
      </div>
      <div class="col-span-3 lg:col-span-2">
        <div class="text-[0.7em] pb-1 text-surface-400">
          <i class="mdi mdi-calendar-end pr-2"/>
          End Date
        </div>
        <input-date v-model="fields.endDate" @update:model-value="setEndDate"  date-format="yy-mm-dd"  class="w-full"/>
      </div>
    </div>
    <div class="text-[0.7em] text-surface-500">
      <i class="mdi mdi-cursor-default-click pr-2"/> Double Click on timeline to create new event
      <i class="mdi mdi-cursor-default pl-3 pr-2"/>Click an event to configure
      <i class="mdi mdi-drag pl-3 pr-2"/>Drag an event to move in time
      <i class="pl-3 pr-2 mdi mdi-button-pointer"/>Use Manage Events
    </div>
  </nav>
  <section class="w-full">
    <VuelCalendar  :vuelCalendarOptions="calendarOptions" :colors="calendarColors" ></VuelCalendar>
  </section>

</template>
<script setup lang="ts">
import {defineComponent, ref} from 'vue'
import VuelCalendar, {
  type Colors, type IVuelCalendarApi,
  type VuelCalendarDay,
  type VuelCalendarDrop,
  type VuelCalendarEvent, type VuelCalendarResize
} from 'vuelcalendar'

import Menubar from "primevue/menubar";
import Dialog from "primevue/dialog";
import EventCreate from "@/views/vuelcalendar/EventCreate.vue";
import EventUpdate from "@/views/vuelcalendar/EventUpdate.vue";
import events from "@/utils/utils/events";
import {getMenu} from "@/utils/utils/getMenu";
import {useCalendarOptions} from "@/utils/utils/useCalendarOptions";
import CalendarReadme from "@/views/vuelcalendar/CalendarReadme.vue";
import {useToast} from "primevue/usetoast";

const dialogs = ref<any>({
  edit: {
    open: false,
    event: undefined as VuelCalendarEvent | undefined,
  },
  create: {
    open: false,
    day: undefined as VuelCalendarDay | undefined,
  }
});
const toast = useToast();
const fields = ref({
  startHour: 0,
  endHour: 24,
  startDate: new Date().toLocaleDateString('en-CA'),
  endDate: new Date().toLocaleDateString('en-CA'),
  daysForward: 1,
});

let calendarApi: IVuelCalendarApi;
const menu = ref<Array<any>>([])

const onDayClicked = (day: VuelCalendarDay) => {

  dialogs.value.create.open = true;
  dialogs.value.create.day = day;
};
const onEventClicked = (event: VuelCalendarEvent) => {
  dialogs.value.edit.open = true;
  dialogs.value.edit.event = event;
};
function rand(id:any){
  let randomId = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const array = new Uint32Array(8);
  crypto.getRandomValues(array);

  for (let i = 0; i < 10; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return id + '-' + randomId;
}
const close = ()=>{
  dialogs.value.create.open = false;
  dialogs.value.create.day = undefined;
  dialogs.value.edit.open = false;
  dialogs.value.edit.event = undefined;
}
const onEventDropped = (dropped: VuelCalendarDrop) => {
  calendarApi.configureEventsByParam('id', dropped.event.id!, {
    start: dropped.newStartDateTime,
    end: dropped.newEndDateTime
  });
  console.log('dropped', dropped)
  // dropped.accept();
};
const onEventStartResized = (resized:VuelCalendarResize)=>{
  console.log(resized)

  resized.accept()
}
const onEventEndResized = (resized:VuelCalendarResize)=>{
  console.log(resized)
  resized.accept()
}
const setCalendarApi = (api:IVuelCalendarApi)=>{
  calendarApi = api;
  return calendarApi;
}
const calendarOptions = useCalendarOptions(
    setCalendarApi,
    menu,
    fields,
    onDayClicked,
    onEventDropped,
    onEventClicked,
    onEventStartResized,
    onEventEndResized,
    toast,
    rand
);

const calendarColors = {
  surface: '#334155',
  primary: '#1a2434',
  highlight:'#4d3ce3',
  menuBg:'#45546e',
  dragging:'#ffffff05'
} as Colors;

const eventsData = events;

const setDaysForward = (event:HTMLInputElement)=>{
  console.log('pawian', event)
  if(!event.value){
    return;
  }
  if(parseInt(event.value) > 62){
    toast.add({ severity: 'warn', summary: 'Days Forward', detail: 'Must be lower than or equal to 62', life: 3000 });
    return;
  }
  try{
    calendarApi.setDaysForward(parseInt(event.value))
  }catch{
    toast.add({ severity: 'warn', summary: 'Days Forward', detail: 'Must be greater than 0', life: 3000 });
  }
}

const setStartHour = (value:number) =>{
  try{
    calendarApi.setStartHour(value)
  }catch{
    toast.add({ severity: 'warn', summary: 'Start Hour', detail: 'Must be earlier than End Hour', life: 3000 });
  }
}
const setStartDate = (value:Date) =>{
  try{
    calendarApi.setDateRange(value,fields.value.endDate)
  }catch{
      toast.add({ severity: 'warn', summary: 'Start Date', detail: 'Must be earlier than End Date', life: 3000 });
  }
}
const setEndDate = (value:Date) =>{
  try{
    calendarApi.setDateRange(fields.value.startDate, value)
  }catch{
    toast.add({ severity: 'warn', summary: 'End Date', detail: 'Must be later than Start Date', life: 3000 });
  }
}
const setEndHour = (value:number) =>{
  try{
    calendarApi.setEndHour(value)
  }catch{
    toast.add({ severity: 'warn', summary: 'End Hour', detail: 'Must be later than Start Hour', life: 3000 });
  }
}


</script>


<style>

</style>