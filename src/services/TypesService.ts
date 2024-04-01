import {Service} from "@/services/Service";

export class TypesService extends Service{
    async getAll(){
        return [
            {
                id:3,
                type:'VuelCalendarDrop',
                structure:'clickEvent:MouseEvent;\n' +
                    '    newStartDateTime:Date;\n' +
                    '    oldStartDateTime:Date;\n' +
                    '    newEndDateTime:Date;\n' +
                    '    oldEndDateTime:Date;\n' +
                    '    event:VuelCalendarEvent;\n' +
                    '    accept:()=>void;\n' +
                    '    decline:()=>void;'
            },
            {
                id:6,
                type:'VuelCalendarResize',
                structure:
                    '    event:VuelCalendarEvent;\n' +
                    '    newDateTime:Date;\n' +
                    '    oldDateTime:Date;\n' +
                    '    accept:()=>void;\n' +
                    '    decline:()=>void;'
            },
            {
                id:1,
                type:'VuelCalendarDay',
                structure:'    clickEvent?:MouseEvent;\n' +
                    '    date?:Date;\n' +
                    '    time?:string;\n' +
                    '    events?:Array<VuelCalendarEvent>'
            },
            {
                id:2,
                type:'VuelCalendarEvent',
                structure:'    id?:string|number;\n' +
                    '    label?:string;\n' +
                    '    start:Date;\n' +
                    '    end:Date;\n' +
                    '    data?:any;'
            },
            {
                id:5,
                type:'VuelCalendarEventConfigure',
                structure:'    id?:string|number;\n' +
                    '    label?:string;\n' +
                    '    start?:Date;\n' +
                    '    end?:Date;\n' +
                    '    data?:any;'
            },
            {
                id:4,
                type:'Colors',
                structure:'   surface?:string;\n' +
                    '    primary?:string\n' +
                    '    event?:string\n' +
                    '    highlight?:string\n' +
                    '    textPrimary?:string\n' +
                    '    menuBg?:string,\n' +
                    '    dragging?:string'
            },
        ]
    }
}