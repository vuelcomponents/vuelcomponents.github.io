import {Service} from "@/services/Service";

export class EventsService extends Service{
    async getAll(){
        return [
            {
                id:7,
                event:'onVuelCalendarApiReady',
                args:'api:IVuelCalendarApi',
                code:'onVuelCalendarApiReady: (api: IVuelCalendarApi) => {\n' +
                    '        calendarApi.value = api;\n' +
                    '        api.setEvents([\n' +
                    '            {\n' +
                    '                id: 1,\n' +
                    '                label: \'Event #1\',\n' +
                    '                data: {},\n' +
                    '                start: new Date(new Date().setHours(8, 0)),\n' +
                    '                end: new Date(new Date().setHours(23, 0)),\n' +
                    '            },\n' +
                    '        ]); /* after API is ready you can set new Events to the calendar */\n' +
                    '},',
                description:'a function being resolved, after calendar Api is ready'
            },
            {
                id:1,
                event:'onDayClicked',
                args:'day:VuelCalendarDay',
                code:'onDayClicked:(day:VuelCalendarDay)=>\n' +
                    '    {\n' +
                    '      console.log(day)\n' +
                    '    },',
                description:'Event returns the day that was clicked, along with the time and date on the timeline, as well as the events that belong to this day'
            },
            {
                id:2,
                event:'onDayDblClicked',
                args:'day:VuelCalendarDay',
                code:'onDayDblClicked:(day:VuelCalendarDay)=>\n' +
                    '    {\n' +
                    '      console.log(day)\n' +
                    '    },',
                description:'Event returns the day that was double clicked, along with the time and date on the timeline, as well as the events that belong to this day'
            },
            {
                id:3,
                event:'onEventClicked',
                args:'event:VuelCalendarEvent',
                code:'onEventClicked:(event:VuelCalendarEvent)=>\n' +
                    '    {\n' +
                    '      api.removeEventsByParam(\'id\', event.id!)\n' +
                    '    },',
                description:'Event returns the event that was clicked, along with the time and date of start and end, as well as the data:any that belong to this event.'
            },
            {
                id:4,
                event:'onEventDropped',
                args:'event:VuelCalendarDrop',
                code:'onEventDropped:(dropped:VuelCalendarDrop)=>\n' +
                    '{\n' +
                    '    /* calendarApi.configureEventsByParam(\'id\', dropped.event.id!, ' +
                    '    {\n' +
                    '          start: dropped.newStartDateTime,\n' +
                    '          end: dropped.newEndDateTime\n' +
                    '    }); */\n' +
                    '    dropped.accept(); /* or dropped.decline()\n'+
                    '    !its recommended to use accept() if your events doesnt owe unique Id\n' +
                    '    event: {id:number|string} */\n' +
                    '},',
                description:'[draggableEvents must be set to true in VuelCalendarOptions] Event returns the drop object(VuelCalendarEvent&VuelCalendarDay&MousEvent) that was being dragged, along with the time and date on timeline.'
            },
            {
                id:5,
                event:'onEventStartResized',
                args:'resized:VuelCalendarResize',
                code:'onEventStartResized:(resized:VuelCalendarResize)=>\n' +
                    '{\n' +
                    '    /* calendarApi.configureEventsByParam(\'id\', dropped.event.id!, ' +
                    '    {\n' +
                    '          start: resized.newDateTime,\n' +
                    '    }); */\n' +
                    '    resized.accept(); /* or resized.decline()  to abort resizing effect*/\n' +
                    '},',
                description:'[resizableEvents must be set to true in VuelCalendarOptions] Event returns the resize object that was being resized, along with old and new start datetime.'
            },
            {
                id:6,
                event:'onEventEndResized',
                args:'resized:VuelCalendarResize',
                code:'onEventEndResized:(resized:VuelCalendarResize)=>\n' +
                    '{\n' +
                    '    /* calendarApi.configureEventsByParam(\'id\', dropped.event.id!, ' +
                    '    {\n' +
                    '          end: resized.newDateTime,\n' +
                    '    }); */\n' +
                    '    resized.accept(); /* or resized.decline()  to abort resizing effect*/\n' +
                    '},',
                description:'[resizableEvents must be set to true in VuelCalendarOptions] Event returns the resize object that was being resized, along with old and new end datetime.'
            },
        ]
    }
}