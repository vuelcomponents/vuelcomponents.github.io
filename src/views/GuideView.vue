<script setup lang="ts">
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import { onMounted, PropType, ref, watch } from "vue";
import { menu } from "../utils/menu.ts";
import { useRoute } from "vue-router";
import { scrollTo } from "../utils/scrollTo.ts";

const route = useRoute();
onMounted(() => {
  scrollTo(route.query.docs);
});
watch(route, (to, from) => {
  scrollTo(to.query.docs);
});

const drops = [
  {
    label: "Vue",
    icon: "mdi mdi-vuejs text-green-500",
  },
  {
    label: "JS",
    icon: "mdi mdi-language-javascript text-yellow-500",
  },
];
const code = {
  Vue: {
    install: "> npm i vuelcalendar",
    optionsObject:
      " const options:IVuelCalendarOptions = {\n" +
      "        height: 600,\n" +
      "        theme: 'light',\n" +
      "        startDate: new Date(),\n" +
      "        endDate: new Date(new Date().setDate(new Date().getDate() +4 )),\n" +
      "        startHour: 0,\n" +
      "        endHour:24,\n" +
      "        draggableEvents: true,\n" +
      "        resizableEvents:true,\n" +
      "        showCursorTime:true,\n" +
      "        throwErrors:false,\n" +
      "" +
      "}",
    apiAssign:
      "const options:IVuelCalendarOptions = {\n" +
      "  ...\n" +
      "  onVuelCalendarApiReady: (api: IVuelCalendarApi) => {\n" +
      "    calendarApi.value = api;\n" +
      "    api.setEvents([\n" +
      "      {\n" +
      "        id: 1,\n" +
      "        label: 'Event #1',\n" +
      "        data: {},\n" +
      "        start: new Date(new Date(new Date().setHours(8, 0)).setDate(22)),\n" +
      "        end: new Date(new Date(new Date().setHours(18, 2)).setDate(26)),\n" +
      "      },\n" +
      "      {\n" +
      "        id: 20,\n" +
      "        label: 'Event #20',\n" +
      "        data: {},\n" +
      "        start: new Date(new Date(new Date().setHours(8, 0)).setDate(22)),\n" +
      "        end: new Date(new Date(new Date().setHours(18, 2)).setDate(22)),\n" +
      "      },\n" +
      "    ]);\n" +
      "}",
    domEl: '<VuelCalendar :vuel-calendar-options="options" :colors="colors"/>',
    eventsAssign:
      "const options:IVuelCalendarOptions = {\n" +
      "    ...\n" +
      "    onDayClicked:(day:VuelCalendarDay)=>\n" +
      "    {\n" +
      "        /* The function returns the day that was clicked, along with the time and date on the timeline, as well as the events that belong to this day.*/\n" +
      "    },\n" +
      "    onDayDblClicked:(day:VuelCalendarDay)=>\n" +
      "    {\n" +
      "        /* The function returns the day that was double clicked, along with the time and date on the timeline, as well as the events that belong to this day.*/\n" +
      "    },\n" +
      "    onEventClicked:(event:VuelCalendarEvent)=>\n" +
      "    {\n" +
      "        /* The function returns the event that was clicked, along with the time and date of start and end, as well as the data:any that belong to this event.*/\n" +
      "    },\n" +
      "    onEventDropped:(dropped:VuelCalendarDrop)=>\n" +
      "    {\n" +
      "        /* property draggableEvents must be set to true in VuelCalendarOptions */\n" +
      "        /* The function returns the drop object(VuelCalendarEvent&VuelCalendarDay&MousEvent) that was being dragged, along with the time and date on timeline.*/\n" +
      "        /* additional functions are included : dropped.decline() & dropped.accept() */\n" +
      "    },\n" +
      "    onEventStartResized:(resized:VuelCalendarResize)=>\n" +
      "    {\n" +
      "        /* property resizableEvents must be set to true in VuelCalendarOptions */\n" +
      "        /* Event returns the resize object that was being resized, along with old and new start datetime. */\n" +
      "        /* additional functions are included : resized.decline() & resized.accept() */\n" +
      "    },\n" +
      "     onEventEndResized:(resized:VuelCalendarResize)=>\n" +
      "    {\n" +
      "        /* property resizableEvents must be set to true in VuelCalendarOptions */\n" +
      "        /* Event returns the resize object that was being resized, along with old and new end datetime. */\n" +
      "        /* additional functions are included : resized.decline() & resized.accept() */\n" +
      "    },\n" +
      "}",
    dateSetter:
      "api.setDateRange(new Date(), new Date(new Date().setDate(new Date.getDate() + 2)); \n" +
      " /* calendar date ranges has been change to current day and two days later",
    hourSetter:
      "api.setTimeRange(0, 24); \n" +
      " /* timeline range has been change to [ from 00:00 to 23:59]",
    exampleRenderer:
      "/* ExampleRenderer.vue */\n" +
      "<script>\n" +
      "export default defineComponent({\n" +
      '  name:"ExampleRenderer",\n' +
      "  props:{\n" +
      "    event:{\n" +
      "      type:Object as PropType<VuelCalendarEvent>,\n" +
      "    } /* this the full Event<VuelCalendarEvent> object passed to your rendering component */\n" +
      "  }\n" +
      "})\n" +
      "< /script>\n" +
      "\n" +
      "<template>\n" +
      '<div :style="`min-height:50px; background:${event.data.color}; display:flex; padding-inline:3px; align-items:center`">\n' +
      " <div>\n" +
      '   <img :src="event.data.img" style="width:25px; border-radius:30px; margin-right:20px;"/>\n' +
      " </div> \n" +
      " <p>\n" +
      "   {{event.label}}\n" +
      " </p>\n" +
      "</div>\n" +
      "</template>",
    eventTemplate:
      "  eventTemplate:(event:VuelCalendarEvent)=>{\n" +
      '    return `<div style="background: aqua; height:100%">\n' +
      '                <p style="height:40px; padding:0;margin:0; color:red">\n' +
      "                   ${event.label}\n" +
      "                </p>\n" +
      "            </div>`\n" +
      "  }",
    draggable:
      "vuelCalendarOptions: {\n" +
      "...\n" +
      "draggableEvents:true\n" +
      "}\n" +
      "\n" +
      "onEventDropped:(dropped:VuelCalendarDrop)=>\n" +
      "{\n" +
      "    /* property draggableEvents must be set to true in VuelCalendarOptions */\n" +
      "    /* The function returns the drop object(VuelCalendarEvent&VuelCalendarDay&MousEvent) that was being dragged, along with the time and date on timeline.*/\n" +
      "    /* Example Usage: */\n" +
      "    calendarApi.configureEventsByParam('id', dropped.event.id!, {\n" +
      "      start: dropped.date,\n" +
      "      end: dropped.endDateCorrection\n" +
      "    });\n" +
      "    /* or just */ \n" +
      "    dropped.accept() ; /* or */ dropped.decline() \n" +
      "};\n",
    resizable:
      "vuelCalendarOptions: {\n" +
      "...\n" +
      "resizableEvents:true\n" +
      "}\n" +
      "\n" +
      "onEventStartResized:(resized:VuelCalendarResize)=>\n" +
      "{\n" +
      "    /* Example Usage: */\n" +
      "    calendarApi.configureEventsByParam('id', resized.event.id!, {\n" +
      "      start: resized.newDateTime,\n" +
      "    });\n" +
      "    /* or just */ \n" +
      "    resized.accept() ; /* or */ resized.decline() \n" +
      "};\n" +
      "onEventEndResized:(resized:VuelCalendarResize)=>\n" +
      "{\n" +
      "    /* Example Usage: */\n" +
      "    calendarApi.configureEventsByParam('id', resized.event.id!, {\n" +
      "      end: resized.newDateTime\n" +
      "    });\n" +
      "    /* or just */ \n" +
      "    resized.accept() ; /* or */ resized.decline() \n" +
      "};\n",
    edit:
      "api.configureEventsByParam(\n" +
      "    'id', 5, \n" +
      "        {\n" +
      "           start:startDate, \n" +
      "           end:endDate, \n" +
      "           data:{\n" +
      "             employees:[]\n" +
      "           }\n" +
      "        })\n" +
      "/* params declared in object has been changed to event id === 5 */",
    remove:
      "calendarApi.removeEventsByParam('id', 5);\n" +
      "/* event with id 5 has been removed */",
    add:
      " api.addEvents([\n" +
      "            {\n" +
      "                id: 2,\n" +
      "                label: 'Event #2',\n" +
      "                data: {},\n" +
      "                start: new Date(new Date().setHours(12, 0)),\n" +
      "                end: new Date(new Date().setHours(13, 30)),\n" +
      "            },\n" +
      "        ]) \n" +
      "/* a set of events being pushed on timeline */",
    colors:
      "type Colors = {\n" +
      "    surface?:string;\n" +
      "    primary?:string\n" +
      "    event?:string\n" +
      "    highlight?:string\n" +
      "    textPrimary?:string\n" +
      "    menuBg?:string,\n" +
      "    dragging?:string,\n" +
      "}",
  },
  JS: {
    install: "> npm i vuelcalendar/vanilla",
  },
};
const dropModel = ref(drops[0]);
</script>

<template>
  <section class="grid lg:grid-cols-6 grid-cols-1 gap-5">
    <div class="col-span-1">
      <Dropdown
        :options="drops"
        v-model="dropModel"
        optionLabel="label"
        class="w-full mb-2"
      >
        <template #value="slotProps">
          <i :class="slotProps.value.icon" class="mr-2" />
          {{ slotProps.value.label }}
        </template>
        <template #option="slotProps">
          <i :class="slotProps.option.icon" class="mr-2" />
          {{ slotProps.option.label }}
        </template>
      </Dropdown>
      <Menu :model="[menu($router)[0]]"></Menu>
    </div>
    <div class="col-span-5">
      <h1 class="text-3xl" id="get-started"># Get started</h1>
      <h2 class="text-xl mt-2">• Installation</h2>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].install"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
        <p>
          From now on, you can start using the scheduler. Next, you should
          prepare the Options object, which is responsible for your
          initialization settings.
        </p>
      </div>
      <h2 class="text-xl mt-2">• Options object init</h2>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].optionsObject ?? code.Vue.optionsObject"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
        <VCodeBlock
          :code="code[dropModel.label].domEl ?? code.Vue.domEl"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h1 class="text-3xl" id="how-to-use"># How to use</h1>
      <h2 class="text-xl mt-2">• API</h2>
      <p>
        To achieve full functionality, we need to customize our options a bit
        further. The first step will be assigning an API for the specified
        variable. To do this, declare a variable calendarApi: IVuelCalendarApi
        within your scope, and assign it accordingly.
      </p>
      <p>That's also a place where you can set your initial events</p>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].apiAssign ?? code.Vue.apiAssign"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h2 class="text-xl mt-2">• Events listeners</h2>
      <p>
        Now that we have the main initialization settings prepared, we need to
        set up event listening within the calendar. This will allow us to
        trigger appropriate actions in response to specific events. All events
        return essential information for working with them and integrating with
        the backend.
      </p>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].eventsAssign ?? code.Vue.eventsAssign"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h1 class="text-3xl mt-4" id="date-time"># Date & Time</h1>
      <h2 class="text-xl mt-2">• Date range</h2>
      <p>
        The date-changing function is available within the API object. It takes
        two variables of type Date - a start date and an end date. It sets the
        range of days on the calendar from the first date to the second.
      </p>
      <p>
        Note that it allows you to customize your own toolbars according to your
        expectations. If you want to create a toolbar that jumps to the next
        month, week, etc., nothing is stopping you. At any time, you can create
        your own algorithm for shifting dates and provide a start and end date.
      </p>
      <p>
        The maximum date range is 62 days. You can disable this by adding the
        flag ignoreSafety:true to the options object. However, remember that a
        large date range may affect the performance of the calendar.
      </p>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].dateSetter ?? code.Vue.dateSetter"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h2 class="text-xl mt-2">• Time range</h2>
      <p>
        The time-changing function is available within the API object. It takes
        two variables of type Date - a start hour(from 0 to 23) and an end
        hour(from 1 to 24).
      </p>
      <p>
        This function sets the start and end time. It accepts INT values from 0
        to 24, where 0 represents 00:00 and 24 represents 23:59:59 of the
        current day.
      </p>
      <p>
        This function is responsible for changing the range of hours in the
        calendar view.
      </p>
      <div>
        <VCodeBlock
          :code="code[dropModel.label].hourSetter ?? code.Vue.hourSetter"
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h1 class="text-3xl mt-4" id="events-customizing">
        # Events customizing
      </h1>
      <h2 class="text-xl mt-2">• Renderer</h2>
      <p>
        The eventRenderer is a parameter designed for Vue users (and in future
        versions, also Angular), which currently accepts a string with the name
        of the registered component.
      </p>
      <p>
        If you have a registered component, you can accept the `params`
        parameter in its props, which defines the event on the timeline.
      </p>
      <p>Here is an example render</p>
      <div>
        <VCodeBlock
          :code="
            code[dropModel.label].exampleRenderer ?? code.Vue.exampleRenderer
          "
          highlightjs
          lang="javascript"
          theme="a11y-light"
          class="shadow mt-2 mb-2"
        />
      </div>
      <h2 class="text-xl mt-2">• Template</h2>
      <p>
        Template serves as an alternative to the renderer, allowing
        customization of events according to the needs of users outside of Vue.
        It works by providing the <strong>eventTemplate</strong> parameter in
        the <strong>options</strong> object, where you define the DOM tree via a
        callback function.
      </p>
      <p>Here's an example of using the template:</p>
      <VCodeBlock
        :code="code[dropModel.label].eventTemplate ?? code.Vue.eventTemplate"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h1 class="text-3xl mt-4" id="event-data"># Storing event data</h1>
      <h2 class="text-xl mt-2">• Data param</h2>
      <p>
        <strong>event:VuelCalendarEvent</strong> contains the parameter
        <em>data:any</em>. It was added with the intention of allowing you to
        customize the event according to your needs.
      </p>
      <p>
        This is the place for whatever you need to be assigned to your event.
      </p>
      <h1 class="text-3xl mt-4" id="drag-resize"># Drag & Resize</h1>
      <h2 class="text-xl mt-2">• Drag</h2>
      <p>
        To enable dragging elements and moving them along the timeline, you need
        to set the <strong>draggableEvents</strong> parameter in the
        <strong>options</strong> object to true.
      </p>
      <p>
        Moving an element along the timeline triggers the
        <strong>onEventDropped</strong> event, which you must implement. To
        learn more about configuring behavior after an event ends, check what
        methods and parameters are returned by
        <strong>dropped: VuelCalendarDrop</strong> in the
        <strong>events</strong> section.
      </p>
      <VCodeBlock
        :code="code[dropModel.label].draggable ?? code.Vue.draggable"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h2 class="text-xl mt-2">• Resize</h2>
      <p>
        Resizing events involves extending them by moving their start or end
        edge.
      </p>
      <p>
        Depending on whether the event is being resized from its end or
        beginning, the corresponding event
        <strong>onEventStartResized</strong> or
        <strong>onEventEndResized</strong> is triggered.
      </p>
      <p>
        The functionality is similar to dragging. You can accept or cancel the
        effect of resizing the event. You can also perform custom actions by
        receiving the full event object that has been resized.
      </p>
      <p>
        To enable event resizing, you need to set the
        <strong>resizableEvents:true</strong> parameter in the
        <strong>options</strong> and define the
        <strong>onEventStartResized</strong> or
        <strong>onEventEndResized</strong> functions there.
      </p>
      <VCodeBlock
        :code="code[dropModel.label].resizable ?? code.Vue.drresizableaggable"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h1 class="text-3xl mt-4" id="edit"># Edit, add, remove events</h1>
      <h2 class="text-xl mt-2">• Edit</h2>
      <p>
        To edit events that appear on the timeline, the function
        <strong>configureEventsByParam</strong> has been introduced.
      </p>
      <p>
        Its usage involves providing a parameter by which we want to identify
        the event, such as <strong>Id</strong>, and then providing a
        <strong>value</strong>, which is the value of the identifier, for
        example, <strong>13 (id=13)</strong>, and submitting a partial
        VuelCalendarEvent object, such as {data:new Date()}. The parameters
        provided in this partial object will be updated for the found event.
      </p>
      <VCodeBlock
        :code="code[dropModel.label].edit ?? code.Vue.edit"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h2 class="text-xl mt-2">• Remove</h2>
      <p>
        Removing events is a simple task using the API function
        <strong>removeEventsByParam</strong>, which works by identifier similar
        to <strong>configureEventsByParam</strong>.
      </p>
      <VCodeBlock
        :code="code[dropModel.label].remove ?? code.Vue.remove"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h2 class="text-xl mt-2">• Add</h2>
      <VCodeBlock
        :code="code[dropModel.label].add ?? code.Vue.add"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
      <h1 class="text-3xl mt-4" id="theme"># Theme and colors</h1>
      <h2 class="text-xl mt-2">• Color object</h2>
      <p>
        The component accepts a parameter called Colors, which you can
        customize. The calendar uses only colors, so you can substitute a few
        variables and adjust your calendar to your application. Additionally,
        the entire component is marked with class attributes, so you can also
        customize it using CSS.
      </p>
      <VCodeBlock
        :code="code[dropModel.label].colors ?? code.Vue.colors"
        highlightjs
        lang="javascript"
        theme="a11y-light"
        class="shadow mt-2 mb-2"
      />
    </div>
  </section>
</template>

<style scoped></style>
