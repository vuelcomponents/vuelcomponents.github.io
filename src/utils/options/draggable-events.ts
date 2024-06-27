import type {IVuelCalendarApi, IVuelCalendarOptions, VuelCalendarDrop} from "vuelcalendar";

export const draggableEvents = (getAllow:()=>boolean, setResponse:(param:string, res:string)=>void, setDropApi:(api:IVuelCalendarApi)=>void) => {
    const options:IVuelCalendarOptions =  {
        height: 200,
        theme: 'light',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() +1 )),
        startHour: 0,
        endHour:24,
        draggableEvents: true,
        lockResize:true,
        resizableEvents:false,
        showCursorTime:true,
        throwErrors:false,
        renderer:'CustomRenderer',
        onEventDropped(dropped:VuelCalendarDrop) {
            if(getAllow()){
                dropped.accept()
            }else{
                dropped.decline()
            }
            setResponse('drop', JSON.stringify(dropped))
        },
        onVuelCalendarApiReady(api:IVuelCalendarApi) {
        setDropApi(api)
        api.setEvents([
            {
                id:1,
                label: 'Draggable Event #1',
                data: {
                    color:'#89457f',
                    icon:'mdi mdi-drag-variant',
                    cursor:'grab'
                },
                start: new Date(new Date().setHours(8, 0)),
                end: new Date(new Date().setHours(23, 0)),
            },
            {
                id:2,
                label: 'Draggable Event #2',
                data: {
                    color:'#89457f',
                    icon:'mdi mdi-drag-variant',
                    cursor:'grab'
                },
                start: new Date(new Date().setHours(4, 0)),
                end: new Date(new Date().setHours(8, 0)),
            },
        ])
    },
  }
  return options;
}