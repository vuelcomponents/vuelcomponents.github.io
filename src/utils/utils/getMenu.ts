import type {IVuelCalendarApi, VuelCalendarEvent} from "vuelcalendar";
import w1 from "@/assets/w1.png";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
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
export const getMenu = (calendarApi:IVuelCalendarApi, fields:any, toast:any)=>{
    return [
        {
            label:'Switch view',
            icon:'mdi mdi-calendar',
            command:()=>{
                calendarApi.switchViewMode();
            }
        },
        {
            label:'Add 2000 events',
            icon:'mdi mdi-calendar',
            command:()=>{
                const es:VuelCalendarEvent[] = []
                for (let i = 0; i < 1000; i++) {
                    es.push({
                        id: rand(i)+100,
                        label: `Name #${i}`,
                        data: {
                            img: [w1,m1,m2,m3][Math.floor(Math.random() * 4)],
                            color:['#454a89','#56a36b', '#438789'][Math.floor(Math.random() * 3)]
                        },
                        start: new Date(new Date(new Date().setHours(8, 0)).setDate(new Date().getDate() +1)),
                        end: new Date(new Date(new Date().setHours(23, 0)).setDate(new Date().getDate() +1)),
                    });
                }
                calendarApi.addEvents(es);
            }
        },
        // {
        //     label:'Manage events',
        //     icon:'mdi mdi-calendar-multiple-check',
        //     command:()=> {
        //         //
        //     }
        // },
        // {
        //     label:'Actions',
        //     icon:'mdi mdi-gesture-tap-button',
        //     items:[
                // {
                //     label:'Set start hour',
                //     icon:'mdi mdi-clock-start',
                //     command:()=>{
                //         try{
                //             calendarApi.setStartHour(fields.startHour)
                //         }catch{
                //             toast.add({ severity: 'warn', summary: 'Start Hour', detail: 'Must be earlier than End Hour', life: 3000 });
                //         }
                //     }
                // },
                // {
                //     label:'Set start date',
                //     icon:'mdi mdi-calendar-start',
                //     command:()=>{
                //         try{
                //             calendarApi.setDate(fields.startDate)
                //         }catch{
                //             toast.add({ severity: 'warn', summary: 'Start Date', detail: 'Must be earlier than End Date', life: 3000 });
                //         }
                //     }
                // },
                // {
                //     label:'Set days forward',
                //     icon:'mdi mdi-calendar-multiple',
                //     command:()=>{
                //         try {
                //             calendarApi.setDaysForward(fields.daysForward)
                //         }catch{
                //             toast.add({ severity: 'warn', summary: 'Days Forward', detail: 'Must be greater than 0', life: 3000 });
                //         }
                //     }
                // },
                // {
                //     label:'Set time range',
                //     icon:"mdi mdi-progress-clock",
                //     command:()=>{
                //         try{
                //             calendarApi.setTimeRange(fields.startHour, fields.endHour)
                //         }catch{
                //             toast.add({ severity: 'warn', summary: 'Start Hour', detail: 'Must be earlier than End Hour', life: 3000 });
                //         }
                //     }
                // },
                // {
                //     label:'Set date range',
                //     icon:'mdi mdi-calendar-range',
                //     command:()=>{
                //         try{
                //             calendarApi.setDateRange(fields.startDate, fields.endDate)
                //         }catch{
                //             toast.add({ severity: 'warn', summary: 'Start Date', detail: 'Must be earlier than End Date', life: 3000 });
                //         }
                //     }
                // }
        //     ]
        // },
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