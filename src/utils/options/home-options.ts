import type {IVuelCalendarApi, IVuelCalendarOptions, VuelCalendarOptions, VuelCalendarResize} from "vuelcalendar";
import m1 from '../../assets/m3.png'
import w1 from '../../assets/w1.png'
export const homeOptions = ( setApi:(api:IVuelCalendarApi)=>void):VuelCalendarOptions => {
    const options:IVuelCalendarOptions =  {
        height: 200,
        theme: 'light',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() +1 )),
        startHour: 7,
        endHour:21,
        draggableEvents: true,
        resizableEvents:true,
        showCursorTime:true,
        throwErrors:false,
        renderer:'HomeRenderer',
        lockResize:false,
        // onEventStartResized(resized:VuelCalendarResize) {
        //     if(getAllow()){
        //         resized.accept()
        //     }else{
        //         resized.decline()
        //     }
        //     setResponse('resize', JSON.stringify(resized))
        // },
        // onEventEndResized(resized:VuelCalendarResize) {
        //     if(getAllow()){
        //         resized.accept()
        //     }else{
        //         resized.decline()
        //     }
        //     setResponse('resize', JSON.stringify(resized))
        // },
        onVuelCalendarApiReady(api:IVuelCalendarApi) {
            setApi(api)
            api.setEvents([
                {
                    id:1,
                    label: 'Mariusz Kowalski, ETC S.A.',
                    data: {
                        color:'#394e81',
                        icon:'mdi mdi-resize',
                        description:'CEO, CTO, PM Conference. Busy',
                        img:m1,
                    },
                    start: new Date(new Date().setHours(8, 0)),
                    end: new Date(new Date().setHours(20, 0)),
                },
                {
                    id:2,
                    label: 'Joanna Kawka, Intern',
                    data: {
                        color:'#564589',
                        icon:'mdi mdi-resize',
                        description:'Recruitment process, first stage',
                        img:w1,
                    },
                    start: new Date(new Date().setHours(9, 0)),
                    end: new Date(new Date().setHours(19, 0)),
                },
            ])
        },
    }
    return options;
}