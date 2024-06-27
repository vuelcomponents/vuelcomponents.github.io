<script setup lang="ts">
import Menu from "primevue/menu";
import { menu } from "../utils/menu.ts";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { scrollTo } from "../utils/scrollTo.ts";
import VuelCalendar, { IVuelCalendarApi } from "vuelcalendar";
import { draggableEvents } from "../utils/options/draggable-events.ts";
import { resizableEvents } from "../utils/options/resizable-events.ts";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import { eventRenderer } from "../utils/options/event-renderer.ts";
import { timeRange } from "../utils/options/time-range.ts";
import { dateRange } from "../utils/options/date-range.ts";
import Calendar from "primevue/calendar";
import { monthView } from "../utils/options/month-view.ts";

const route: any = useRoute();
const allowDrop = ref(true);
const tresholdDrop = ref(0);
const dropApi = ref<IVuelCalendarApi>();
const setDropApi = (api: IVuelCalendarApi) => {
  dropApi.value = api;
};
const getAllowDrop = () => allowDrop.value;

const allowResize = ref(true);
const tresholdResize = ref(0);
const resizeApi = ref<IVuelCalendarApi>();
const setResizeApi = (api: IVuelCalendarApi) => {
  resizeApi.value = api;
};
const getAllowResize = () => allowResize.value;

const rendererApi = ref<IVuelCalendarApi>();
const setRendererApi = (api: IVuelCalendarApi) => {
  rendererApi.value = api;
};

onMounted(() => {
  scrollTo(route.query.docs);
});
watch(route, (to: any) => {
  scrollTo(to.query.docs);
});
const responses = ref({
  drop: "",
  resize: "",
});
const rendererDrops = ["TestRenderer1", "TestRenderer2"];
const renderer = ref(rendererDrops[0]);

const setResponse = (param: string, res: string) => {
  (responses.value as any)[param] = res;
};
const _draggableEvents = draggableEvents(getAllowDrop, setResponse, setDropApi);
const _resizableEvents = resizableEvents(
  getAllowResize,
  setResponse,
  setResizeApi,
);
const _eventRenderer = eventRenderer(setRendererApi, rendererDrops[0]);
const setTresholdDrop = () => {
  dropApi.value!.setTresHold(tresholdDrop.value);
};
const setTresholdResize = () => {
  resizeApi.value!.setTresHold(tresholdResize.value);
};
const changeRenderer = () => {
  rendererApi.value!.setRenderer(renderer.value);
};
const startHour = ref(8);
const endHour = ref(16);
const timeRangeApi = ref<IVuelCalendarApi>();
const setTimeRangeApi = (api: IVuelCalendarApi) => {
  timeRangeApi.value = api;
};
const setTimeRange = () => {
  if (endHour.value < startHour.value) {
    startHour.value = endHour.value - 1;
  }
  timeRangeApi.value!.setTimeRange(startHour.value, endHour.value);
};
const _timeRange = timeRange(setTimeRangeApi);

const startDate = ref(new Date());
const endDate = ref(new Date(new Date().setDate(new Date().getDate() + 1)));
const dateRangeApi = ref<IVuelCalendarApi>();
const setDateRangeApi = (api: IVuelCalendarApi) => {
  dateRangeApi.value = api;
};
const setDateRange = () => {
  dateRangeApi.value!.setDateRange(startDate.value, endDate.value);
};
const _dateRange = dateRange(setDateRangeApi);

const monthViewApi = ref<IVuelCalendarApi>();
const setMonthViewApi = (api: IVuelCalendarApi) => {
  monthViewApi.value = api;
};
const _monthView = monthView(setMonthViewApi);
const switchView = () => {
  monthViewApi.value!.switchViewMode();
};
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-6 gap-5">
    <div class="col-span-1">
      <Menu :model="[menu($router)[1]]"></Menu>
    </div>

    <div class="col-span-5">
      <h1 class="text-3xl mt-4" id="renderer">
        # Event renderer / <span id="event-template">Event Template</span>
      </h1>
      <p class="mb-2">Select renderer to change.</p>
      <div class="flex gap-5 items-center">
        <p>Renderer:</p>
        <Dropdown
          v-model="renderer"
          :options="rendererDrops"
          @update:model-value="changeRenderer"
        />
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_eventRenderer" />
      </div>
      <h1 class="text-3xl mt-4" id="draggable-events"># Draggable events</h1>
      <p class="mb-2">Click, hold, and move to advance the event in time.</p>
      <div class="flex gap-5 items-center lg:flex-row flex-col mb-2 lg:mb-0">
        <p>Allow drop:</p>
        <Checkbox v-model="allowDrop" :binary="true" />
        <p>Treshold:</p>
        <InputNumber
          :min="0"
          :max="59"
          class="h-[30px]"
          v-model="tresholdDrop"
          @update:model-value="setTresholdDrop"
        />
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_draggableEvents" />
      </div>
      <p>Drop response</p>
      <VCodeBlock
        :code="responses.drop"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />

      <h1 class="text-3xl mt-4" id="resizable-events"># Resizable events</h1>
      <p class="mb-2">
        Click on the starting or ending edge of the event and drag.
      </p>
      <div class="flex gap-5 items-center lg:flex-row flex-col mb-2 lg:mb-0">
        <p>Allow resize:</p>
        <Checkbox v-model="allowResize" :binary="true" />
        <p>Treshold:</p>
        <InputNumber
          :min="0"
          :max="59"
          class="h-[30px]"
          v-model="tresholdResize"
          @update:model-value="setTresholdResize"
        />
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_resizableEvents" />
      </div>
      <p>Resize response</p>
      <VCodeBlock
        :code="responses.resize"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />

      <h1 class="text-3xl mt-4" id="time-range"># Time range</h1>
      <p class="mb-2">You can ajust time on timeline.</p>
      <div class="flex gap-5 items-center lg:flex-row flex-col mb-2 lg:mb-0">
        <p>(min:0, max:24) Start hour:</p>
        <InputNumber
          :min="0"
          :max="24"
          class="h-[30px]"
          v-model="startHour"
          @update:model-value="setTimeRange"
        />
        <p>(min:0, max:24) End hour:</p>
        <InputNumber
          :min="0"
          :max="24"
          class="h-[30px]"
          v-model="endHour"
          @update:model-value="setTimeRange"
        />
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_timeRange" />
      </div>

      <h1 class="text-3xl mt-4" id="date-range"># Date range</h1>
      <p class="mb-2">You can ajust date on timeline. (max 62 days)</p>
      <div class="flex gap-5 items-center lg:flex-row flex-col mb-2 lg:mb-0">
        <p>Start date:</p>
        <Calendar
          class="h-[30px]"
          date-format="yy-mm-dd"
          v-model="startDate"
          @update:model-value="setDateRange"
        />
        <p>End date:</p>
        <Calendar
          class="h-[30px]"
          date-format="yy-mm-dd"
          v-model="endDate"
          @update:model-value="setDateRange"
        />
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_dateRange" />
      </div>
      <h1 class="text-3xl mt-4" id="month-view"># Month view</h1>
      <div class="flex gap-5 items-center">
        <Button @click="switchView" class="mb-2" severity="success"
          >Switch view</Button
        >
      </div>
      <div>
        <VuelCalendar :vuel-calendar-options="_monthView" />
      </div>

      <div></div>
    </div>
  </section>
</template>

<style scoped></style>
