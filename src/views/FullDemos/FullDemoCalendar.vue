<script setup lang="ts">
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import w1 from "../../assets/w1.png";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";
import VuelCalendar, {
  IVuelCalendarApi,
  type VuelCalendarDay,
  VuelCalendarEvent,
} from "vuelcalendar";
import { fullDemoOptions } from "@/utils/options/full-demo-options";
import Popup from "@/components/useful/Popup.vue";
import { draggableEvents } from "@/utils/options/draggable-events";
import { resizableEvents } from "@/utils/options/resizable-events";
import Dropdown from "primevue/dropdown";

const api = ref<IVuelCalendarApi>();
const setApi = (calendarApi: IVuelCalendarApi) => {
  api.value = calendarApi;
};

const startDate = ref(new Date());
const endDate = ref(new Date(new Date().setDate(new Date().getDate() + 5)));
const startHour = ref(6);
const endHour = ref(23);
const setHours = () => {
  api.value!.setStartHour(startHour.value);
  api.value!.setEndHour(endHour.value);
};
const clickBehaviours = ["update", "console.log"];
const dayClickBehaviours = ["create", "console.log"];
const settings = ref({
  draggableEvents: true,
  resizableEvents: true,
  showCursorTime: true,
  clickBehaviour: clickBehaviours[0],
  dayDblClickBehaviour: dayClickBehaviours[0],
  dayClickBehaviour: dayClickBehaviours[0],
});
const setDates = () => {
  api.value!.setDateRange(startDate.value, endDate.value);
};
const createEvent = ref<VuelCalendarEvent>(
    {
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      label:'',
      data:{
        description: "",
      },
    }
);
const openCreatePopup = () => {
  createEventPopup.value = true;
};

const createEventPopup = ref(false);
const updateEventPopup = ref(false);
const mouseSettingsPopup = ref(false);
const updatedEvent = ref<VuelCalendarEvent>();
const onEventClicked = (event: VuelCalendarEvent) => {
  updateEventPopup.value = true;
  updatedEvent.value = event;
};
const onDayClicked = (day: VuelCalendarDay) => {
  createEvent.value.start = new Date(day.date!)
  createEvent.value.end = new Date(new Date(day.date!).setHours(new Date(day.date!).getHours() + 1)),
  createEventPopup.value = true;
};
const saveNewEvent = () => {
  // Create a plain object to pass to addEvents
  const newEvent = {
    id: createEvent.value.id,
    label: createEvent.value.label,
    start: new Date(createEvent.value.start),
    end: new Date(createEvent.value.end),
    data: { ...createEvent.value.data },
  };

  api.value!.addEvents([newEvent]);
  createEventPopup.value = false;
};
</script>

<template>
  <main class="w-screen px-4 py-2">
    <div class="w-full flex gap-2 h-[25px] my-2">
      <button
        class="ring-2 ring-inset ring-gang-300 px-6 py-2 rounded-lg flex items-center justify-center text-[0.7em]"
      >
        <i class="mdi mdi-cog mr-2" />
        Event Renderer settings
      </button>
      <button
        @click="mouseSettingsPopup = true"
        class="ring-2 ring-inset ring-gang-300 px-6 py-2 rounded-lg flex items-center justify-center text-[0.7em]"
      >
        <i class="mdi mdi-mouse mr-2" />
        Mouse event settings
      </button>
      <button
        class="ring-2 ring-inset ring-gang-300 px-6 py-2 rounded-lg flex items-center justify-center text-[0.7em]"
      >
        <i class="mdi mdi-arrow-decision-auto-outline mr-2" />
        Advanced
      </button>
      <button
        class="ring-2 ring-inset ring-gang-400 px-6 py-2 rounded-lg flex items-center justify-center text-[0.7em]"
      >
        <i class="mdi mdi-leaf mr-2" />
        Multitasker
      </button>
    </div>
    <div class="w-full flex gap-2">
      <div
        class="w-[250px] min-w-[250px] ring-1 rounded-lg h-[50px] ring-gang-500/10 flex gap-4 items-center justify-center px-4"
      >
        <img :src="m1" class="w-[30px] rounded-full ring-gang-300/20 ring-4" />
        <img :src="m2" class="w-[30px] rounded-full ring-gang-300/20 ring-4" />
        <img :src="m3" class="w-[30px] rounded-full ring-gang-300/20 ring-4" />
        <img :src="w1" class="w-[30px] rounded-full ring-gang-300/20 ring-4" />
      </div>
      <div
        class="w-full ring-1 rounded-lg h-[50px] ring-gang-500/10 flex items-center justify-center px-6"
      >
        <div
          class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40"
        >
          <i class="mdi mdi-clock-start" />
        </div>
        <input-number
          :min="0"
          :max="24"
          @update:model-value="setHours"
          v-model="startHour"
          class="inputnr h-[26px] ml-2 w-[45px]"
        />
        <input-text class="h-[26px] ml-2 w-[45px]" value="00" disabled />

        <div
          class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40 ml-4"
        >
          <i class="mdi mdi-clock-end" />
        </div>
        <input-number
          :min="0"
          :max="24"
          v-model="endHour"
          @update:model-value="setHours"
          class="inputnr h-[26px] ml-2 w-[45px]"
        />
        <input-text class="h-[26px] ml-2 w-[45px]" value="00" disabled />
      </div>
      <div class="w-full flex gap-2 items-center justify-center">
        <div
          class="w-full ring-1 rounded-lg h-[50px] ring-gang-500/10 flex items-center px-6"
        >
          <div
            class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40 ml-4"
          >
            <i class="mdi mdi-calendar-start" />
          </div>
          <Calendar
            class="inputcal ml-2"
            v-model="startDate"
            @update:model-value="setDates"
          />

          <div
            class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40 ml-4"
          >
            <i class="mdi mdi-calendar-start" />
          </div>
          <Calendar
            class="inputcal ml-2"
            v-model="endDate"
            @update:model-value="setDates"
          />
        </div>
      </div>
      <div class="w-full flex gap-2 justify-center items-center">
        <div
          class="w-full ring-1 rounded-lg h-[50px] ring-gang-500/10 flex items-center px-6"
        >
          <div
            class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40 ml-4"
          >
            <i class="mdi mdi-calendar-start" />
          </div>
          <Calendar class="inputcal ml-2" v-model="startDate" />

          <div
            class="rounded-md w-fit h-fit ring-1 bg-gang-500/80 text-gang-100 px-1 ring-gang-500/40 ml-4"
          >
            <i class="mdi mdi-calendar-start" />
          </div>
          <Calendar class="inputcal ml-2" v-model="endDate" />
        </div>
      </div>
    </div>
    <div class="w-full flex gap-2 py-2">
      <div
        class="w-full ring-1 rounded-lg h-[50px] ring-gang-500/10 flex items-center px-6 py-2 gap-4"
      >
        <Button
          class="flex items-center justify-center gap-2 h-[35px] w-[300px]"
          @click="openCreatePopup"
        >
          <i class="mdi mdi-plus" />
          Create new event
        </Button>
        <input-text class="w-full h-[35px]" />
      </div>
    </div>
    <div>
      <VuelCalendar
        :vuel-calendar-options="
          fullDemoOptions(setApi, {
            endDate,
            startDate,
            endHour,
            startHour,
            onEventClicked,
            onDayClicked,
            settings,
          })
        "
      />
    </div>
  </main>
  <Popup
    v-model:visible="createEventPopup"
    title="Create a custom event"
    description="(you can adjust events structure as you wish in your projects)"
    header="New Event"
  >
    <div class="flex flex-col" v-if="createEvent">

      <label>Label</label>
      <input-text
          v-model="createEvent!.label"
          class="h-[30px]"
      />
      <label>Data:Description</label>
      <input-text
          v-model="createEvent!.data.description"
          class="h-[30px]"
      />

      <label>Start time</label>
      <calendar
        v-model="createEvent!.start"
        class="h-[30px]"
        date-format="dd.mm.yy"
        show-time
      />

      <label>End time</label>
      <calendar
        v-model="createEvent!.end"
        class="h-[30px]"
        date-format="dd.mm.yy"
        show-time
      />
      <Button class="w-full" @click="saveNewEvent">
        Save
      </Button>
    </div>
  </Popup>
  <Popup v-model:visible="updateEventPopup" header="Update">
    <input-text
      v-if="updatedEvent"
      v-model="updatedEvent.label"
      class="h-[30px]"
    />
    <input-text
        v-if="updatedEvent"
        v-model="updatedEvent.data.description"
        class="h-[30px]"
    />
    <Calendar
        v-if="updatedEvent"
        class="inputcal ml-2"
        v-model="updatedEvent.start"
        date-format="dd.mm.yy"
        showTime
    />
    <Calendar
        v-if="updatedEvent"
        class="inputcal ml-2"
        v-model="updatedEvent.end"
        date-format="dd.mm.yy"
        showTime
    />
  </Popup>
  <Popup v-model:visible="mouseSettingsPopup" header="Mouse Event Settings">
    <radio-button-group
      v-model="settings.draggableEvents"
      class="flex flex-col justify-center gap-2"
    >
      <div class="flex gap-2">
        <input type="checkbox" v-model="settings.draggableEvents" />
        <label>Allow events drag & drop</label>
      </div>
      <div class="flex gap-2">
        <input type="checkbox" v-model="settings.resizableEvents" />
        <label>Allow events resizing</label>
      </div>
      <div class="flex gap-2">
        <input type="checkbox" v-model="settings.showCursorTime" />
        <label>Show cursor time</label>
      </div>
    </radio-button-group>
    <div>
      <p>On <strong> event click</strong> behaviour</p>
      <Dropdown v-model="settings.clickBehaviour" :options="clickBehaviours" />
      <p>On <strong>day click</strong> behaviour</p>
      <Dropdown
        v-model="settings.dayClickBehaviour"
        :options="dayClickBehaviours"
      />
      <p>On <strong>day double click</strong> behaviour</p>
      <Dropdown
        v-model="settings.dayDblClickBehaviour"
        :options="dayClickBehaviours"
      />
    </div>
  </Popup>
</template>
<style>
.inputnr {
  input {
    height: 26px;
    width: 45px;
  }
}
.inputcal {
  input {
    height: 26px;
    width: 120px;
  }
}
</style>
