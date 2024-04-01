import {Service} from "@/services/Service";

export class FunctionsService extends Service{
    async getAll(){
        return [

            {
                id: 8,
                name: 'Set new events',
                call: 'setEvents',
                return:'VuelCalendarEvent[]',
                args: 'events: VuelCalendarEvent',
                code:' api.setEvents([\n' +
                    '            {\n' +
                    '                id: 1,\n' +
                    '                label: \'Event #1\',\n' +
                    '                data: {},\n' +
                    '                start: new Date(new Date().setHours(8, 0)),\n' +
                    '                end: new Date(new Date().setHours(23, 0)),\n' +
                    '            },\n' +
                    '        ]) \n' +
                    '/* old events has been replaced with new set */',
                description: 'This function is responsible for deleting old events and replacing them with new ones.'
            },

            {
                id: 9,
                name: 'Pushing events',
                call: 'addEvents',
                return:'VuelCalendarEvent[]',
                args: 'events: VuelCalendarEvent',
                code:' api.addEvents([\n' +
                    '            {\n' +
                    '                id: 2,\n' +
                    '                label: \'Event #2\',\n' +
                    '                data: {},\n' +
                    '                start: new Date(new Date().setHours(12, 0)),\n' +
                    '                end: new Date(new Date().setHours(13, 30)),\n' +
                    '            },\n' +
                    '        ]) \n' +
                    '/* a set of events being pushed on timeline */',
                description: 'This function is responsible for adding new events to the current ones.'
            },

            {
                id: 10,
                name: 'Remove events by param',
                call: 'removeEventsByParam',
                code:'calendarApi.removeEventsByParam(\'id\', 5);\n' +
                    '/* event with id 5 has been removed */',
                args: 'param: string, value: any',
                return:'VuelCalendarEvent[]',
                description: 'This function is responsible for removing the selected event. For example, by sending the parameter string \'id\' with the value 5, we will remove the event with id === 5.'
            },

            {
                id: 11,
                name: 'Edit events by param',
                call: 'configureEventsByParam',
                code:'api.configureEventsByParam(\n' +
                    '    \'id\', 5, \n' +
                    '        {\n' +
                    '           start:startDate, \n' +
                    '           end:endDate, \n' +
                    '           data:{\n' +
                    '             employees:[]\n' +
                    '           }\n' +
                    '        })\n' +
                    '/* params declared in object has been changed to event id === 5 */',
                return:'VuelCalendarEvent[]',
                args: 'param: string, value: any, object: VuelCalendarEventConfigure',
                description: 'This function is responsible for finding the event with the specified parameter and value, and then replacing the values for that parameter. For example, if we insert \'id\' in the parameter, 5 in the value, and {start: startDate, end: endDate, data: {employees: []}} in the object, then in the event with id 5, the start and end dates will be changed, and the object data of any type will be assigned a list of employees.'
            },
            {
                id:1,
                name:'',
                call:'setDate',
                return:'Date',
                args:'date:Date',
                code:'api.setDate(new Date());',
                description:'This function is responsible for changing the startDate to a new date. If you change this date, your timeline will set the initial date to this date.'
            },
            {
                id: 2,
                name: 'Change timeline start hour',
                call: 'setStartHour',
                args: 'hour: number',
                code:'api.setStartHour(0); /* start hour on timeline has been set to 00:00',
                return:'void',
                description: 'This function is responsible for changing the startHour to a new hour. If you change this hour, your timeline will set the initial hour to this hour.'
            },

            {
                id: 3,
                name: 'Change timeline end hour',
                call: 'setEndHour',
                return:'void',
                code:'api.setEndHour(0); /* end hour on timeline has been set to 00:00',
                args: 'hour: number',
                description: 'This function is responsible for changing the endHour to a new hour. If you change this hour, your timeline will set the end hour of timeline to this hour.'
            },

            {
                id: 4,
                name: 'Set date range',
                call: 'setDateRange',
                return:'void',
                code:'api.setDateRange(new Date(), new Date(new Date().setDate(new Date.getDate() + 2)); \n' +
                    ' /* calendar date ranges has been change to current day and two days later',
                args: 'startDate: Date, endDate: Date',
                description: 'This function is responsible for setting a specific date range on calendar.'
            },

            {
                id: 5,
                name: 'Set time range',
                call: 'setTimeRange',
                return:'void',
                code:'api.setTimeRange(0, 24); \n' +
                    ' /* timeline range has been change to [ from 00:00 to 23:59]',
                args: 'startHour: number, endHour: number',
                description: 'This function is responsible for setting a specific time range on calendar.'
            },

            {
                id: 6,
                name: 'Set days forward',
                call: 'setDaysForward',
                args: 'days: number',
                code:'api.setDaysForward(7); \n' +
                    ' /* calendar date range has been changed to [from startDate to 6 days after startDate] */',
                return:'void',
                description: 'This function is responsible for setting a days forward on time line.'
            },

            {
                id: 7,
                name: 'Switch view mode (days <=> month)',
                call: 'switchViewMode',
                code:'api.switchViewMode() \n' +
                    '/* just switch to a month view and vice-versa */',
                args: '',
                returns:'void',
                description: 'This function is responsible for switching the calendar view mode from daily to monthly and vice versa.'
            },
            {
                id: 8,
                name: 'Set treshold ',
                call: 'setTresHold',
                return:'void',
                code:'api.setTresHold(15); ',
                args: 'treshold: Number',
                description: 'This function changes the threshold responsible for the threshold during the dragging of events. Read more in \'params\'.'
            },
            {
                id: 9,
                name: 'Set renderer ',
                call: 'setRenderer',
                return:'void',
                code:'api.setRenderer(\'ExampleRenderer\'); ',
                args: 'renderer: String',
                description: 'This function changes the renderer, a parameter responsible for substituting the installed component into event elements instead of the default event backdrop.'
            },

        ]
    }
}