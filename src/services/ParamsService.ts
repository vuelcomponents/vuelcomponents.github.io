import {Service} from "@/services/Service";

export class ParamsService extends Service{
    async getAll(){
        return [
            {
                id:1,
                param:'height',
                type:'Number',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'height:600\n' +
                    '}',
                description:' The initial height of the calendar'
            },
            {
                id:2,
                param:'theme',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'theme:\'dark\'\n' +
                    '}',
                type:'String',
                description:'\'dark\' and \'light\' theme available'
            },
            {
                id:3,
                param:'startDate',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'startDate:new Date()\n' +
                    '}',
                type:'Date',
                description:'Define the first day being displayed on the calendar'
            },
            {
                id:4,
                param:'daysForward',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'daysForward:6\n' +
                    '}',
                type:'Number',
                description:'Minimum 1, this parameter defines how many days after the start day should be displayed (including the first day)'
            },
            {
                id:5,
                param:'startHour',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'startHour:0\n' +
                    '}',
                type:'Number',
                description:' Minimum 0, Max 23, define time from \'startHour\' to 23:59'
            },
            {
                id:6,
                param:'endHour',
                type:'Number',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'endHour:24\n' +
                    '}',
                description:'Minimum 1, Max 24, Must be greater than startHour'
            },
            {
                id:6,
                param:'renderer',
                type:'String',
                code:'/* ExampleRenderer.vue */\n' +
                    'export default defineComponent({\n' +
                    '  name:"ExampleRenderer",\n' +
                    '  props:{\n' +
                    '    event:{\n' +
                    '      type:Object as PropType<VuelCalendarEvent>,\n' +
                    '    } /* this the full Event<VuelCalendarEvent> object passed to your rendering component */\n' +
                    '  }\n' +
                    '})\n' +
                    '</script>\n' +
                    '\n' +
                    '<template>\n' +
                    '<div :style="`min-height:50px; background:${event.data.color}; display:flex; padding-inline:3px; align-items:center`">\n' +
                    ' <div>\n' +
                    '   <img :src="event.data.img" style="width:25px; border-radius:30px; margin-right:20px;"/>\n' +
                    ' </div> \n' +
                    ' <p>\n' +
                    '   {{event.label}}\n' +
                    ' </p>\n' +
                    '</div>\n' +
                    '</template>',
                description:'Registered vue component to use as renderer for event container.'
            },
            {
                id:6,
                param:'draggableEvents',
                type:'boolean',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'draggableEvents:true\n' +
                    '}\n' +
                    '\n' +
                    'onEventDropped:(event:VuelCalendarDrop)=>\n' +
                    '{\n' +
                    '    /* property draggableEvents must be set to true in VuelCalendarOptions */\n' +
                    '    /* The function returns the drop object(VuelCalendarEvent&VuelCalendarDay&MousEvent) that was being dragged, along with the time and date on timeline.*/\n' +
                    '    /* Example Usage: */\n'+
                    '    calendarApi.configureEventsByParam(\'id\', dropped.event.id!, {\n' +
                    '      start: dropped.date,\n' +
                    '      end: dropped.endDateCorrection\n' +
                    '    });\n' +
                    '    /* or just */ \n'+
                    '    dropped.accept() ; /* or */ dropped.decline() \n'  +
                    '};\n',
                description:'Set if you want to implement draggable events -> onEventDropped(drop:VuelCalendarDrop) -< then implement this method to catch dropped events on timeline'
            },
            {
                id:6,
                param:'resizableEvents',
                type:'boolean',
                code:'vuelCalendarOptions: {\n' +
                    '...\n' +
                    'resizableEvents:true\n' +
                    '}\n' +
                    '\n' +
                    'onEventStartResized:(resized:VuelCalendarResize)=>\n' +
                    '{\n' +
                    '    /* Example Usage: */\n'+
                    '    calendarApi.configureEventsByParam(\'id\', resized.event.id!, {\n' +
                    '      start: resized.newDateTime,\n' +
                    '    });\n' +
                    '    /* or just */ \n'+
                    '    resized.accept() ; /* or */ resized.decline() \n'  +
                    '};\n'+
                    'onEventEndResized:(resized:VuelCalendarResize)=>\n' +
                    '{\n' +
                    '    /* Example Usage: */\n'+
                    '    calendarApi.configureEventsByParam(\'id\', resized.event.id!, {\n' +
                    '      end: resized.newDateTime\n' +
                    '    });\n' +
                    '    /* or just */ \n'+
                    '    resized.accept() ; /* or */ resized.decline() \n'  +
                    '};\n'
                ,
                description:'Set if you want to implement draggable events -> onEventDropped(drop:VuelCalendarDrop) -< then implement this method to catch dropped events on timeline'
            },

        ]
    }
}