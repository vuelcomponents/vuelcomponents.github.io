import type {IVuelCalendarApi, VuelCalendarEvent, VuelCalendarDay, VuelCalendarDrop} from "vuelcalendar";
import {getMenu} from "@/utils/utils/getMenu";
import type {Ref} from "vue";
import w1 from "@/assets/w1.png";
export const useCalendarOptions = (setCalendarApi:(api:IVuelCalendarApi)=>IVuelCalendarApi,
                                   menu:Ref<any>,
                                   fields:Ref<any>,
                                   onDayClicked:(day:VuelCalendarDay)=>void,
                                   onEventDropped:(dropped:VuelCalendarDrop)=>void,
                                   onEventClicked:(event:VuelCalendarEvent)=>void)=>{
   return  {
        calendarApi: null,
        height: 600,
        theme: 'dark',
        startDate: new Date(),
        daysForward: 5,
        startHour: 6,
        renderer: 'EventMainRenderer',
        draggableEvents: true,
        onVuelCalendarApiReady: (api: any) => {
            setCalendarApi(api)
            menu.value = getMenu(api, fields.value)
            api.setEvents([
                {
                    id: 2,
                    label: 'Marianna Kovalsky',
                    data: {
                        img:w1,
                        color:'#89457f'
                    },
                    start: new Date(new Date().setHours(8, 0)),
                    end: new Date(new Date().setHours(23, 0)),
                },
            ])
        },
        onDayDblClicked: onDayClicked,
        onEventClicked: onEventClicked,
        onDayClicked:(day:VuelCalendarDay)=>{
            console.log('You clicked a on timeline', day)
        },
        onEventDropped: onEventDropped,
    }
}