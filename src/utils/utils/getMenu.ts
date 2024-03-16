import type {IVuelCalendarApi} from "vuelcalendar";

export const getMenu = (calendarApi:IVuelCalendarApi, fields:any)=>{
    return [
        {
            label:'Switch view',
            icon:'mdi mdi-calendar',
            command:()=>{
                calendarApi.switchViewMode();
            }
        },
        // {
        //     label:'Manage events',
        //     icon:'mdi mdi-calendar-multiple-check',
        //     command:()=> {
        //         //
        //     }
        // },
        {
            label:'Actions',
            icon:'mdi mdi-gesture-tap-button',
            items:[
                {
                    label:'Set start hour',
                    icon:'mdi mdi-clock-start',
                    command:()=>{
                        calendarApi.setStartHour(fields.startHour)
                    }
                },
                {
                    label:'Set start date',
                    icon:'mdi mdi-calendar-start',
                    command:()=>{
                        calendarApi.setDate(fields.startDate)
                    }
                },
                {
                    label:'Set days forward',
                    icon:'mdi mdi-calendar-multiple',
                    command:()=>{
                        calendarApi.setDaysForward(fields.daysForward)
                    }
                },
                {
                    label:'Set time range',
                    icon:"mdi mdi-progress-clock",
                    command:()=>{
                        calendarApi.setTimeRange(fields.startHour, fields.endHour)
                    }
                },
                {
                    label:'Set date range',
                    icon:'mdi mdi-calendar-range',
                    command:()=>{
                        calendarApi.setDateRange(fields.startDate, fields.endDate)
                    }
                }
            ]
        },
        {
            label:'Component settings',
            icon:'mdi mdi-wrench',
            items:[
                {
                    label:'Change event renderer',
                    icon:'mdi mdi-view-dashboard-edit-outline'
                }
            ]
        },
    ]
}