import {getFunctionsMenu} from "./libs/api-functions.ts";
import {getEventsMenu} from "./libs/events.ts";
import {getTypesMenu} from "./libs/types.ts";
import {getParamsMenu} from "./libs/params.ts";

export const menu = (router:any) => [
    {
        label:'Guide',
        icon:'mdi  mdi-file-document-outline',
        command:()=>router.push({name:'Guide',query:{docs:'get-started'}}),
        items:[
            {
                label:'Get started',
                icon:'mdi mdi-bug-play',
                command:()=>router.push({name:'Guide',query:{docs:'get-started'}})
            },
            {
                label:'How to use',
                icon:'mdi mdi-help',
                command:()=>router.push({name:'Guide',query:{docs:'how-to-use'}})
            },
            {
                label:'Date & Time',
                icon:'mdi mdi-calendar-clock',
                command:()=>router.push({name:'Guide',query:{docs:'date-time'}})
            },
            {
                label:'Events customizing',
                icon:'mdi mdi-calendar-week-outline',
                command:()=>router.push({name:'Guide',query:{docs:'events-customizing'}})
            },
            {
                label:'Storing event data',
                icon:'mdi mdi-data-matrix',
                command:()=>router.push({name:'Guide',query:{docs:'event-data'}})
            },
            {
                label:'Drag & Resize',
                icon:'mdi mdi-clock',
                command:()=>router.push({name:'Guide',query:{docs:'drag-resize'}})
            },
            {
                label:'Edit, add & remove events',
                icon:'mdi mdi-pencil',
                command:()=>router.push({name:'Guide',query:{docs:'edit'}})
            },
            {
                label:'Theme and colors',
                icon:'mdi mdi-invert-colors',
                command:()=>router.push({name:'Guide',query:{docs:'theme'}})
            },

        ]
    },
    {
        label:'Demos',
        icon:'mdi mdi-gamepad',
        items:[
            {
                label:'Draggable events',
                icon:'mdi mdi-drag',
                command:()=>router.push({name:'Demos',query:{docs:'draggable-events'}})
            },
            {
                label:'Resizable events',
                icon:'mdi mdi-resize',
                command:()=>router.push({name:'Demos',query:{docs:'resizable-events'}})
            },
            {
                label:'Renderer',
                icon:'mdi mdi mdi-atom-variant',
                command:()=>router.push({name:'Demos',query:{docs:'renderer'}})
            },
            {
                label:'Event Template',
                icon:'mdi mdi-forest-outline',
                command:()=>router.push({name:'Demos',query:{docs:'event-template'}})
            },
            {
                label:'Time range',
                icon:'mdi mdi-clock-time-five-outline',
                command:()=>router.push({name:'Demos',query:{docs:'time-range'}})
            },
            {
                label:'Date range',
                icon:'mdi mdi-calendar-range',
                command:()=>router.push({name:'Demos',query:{docs:'date-range'}})
            },
            // {
            //     label:'Full demo',
            //     icon:'mdi mdi-heart-cog-outline',
            //     command:()=>router.push({name:'Demos',query:{docs:'full-demo'}})
            // },
            // {
            //     label:'Performance test',
            //     icon:'mdi mdi-gauge-full',
            //     command:()=>router.push({name:'Demos',query:{docs:'performance-test'}})
            // },
            {
                label:'Month view (beta)',
                icon:'mdi mdi-calendar',
                command:()=>router.push({name:'Demos',query:{docs:'month-view'}})
            }
        ]
    },
    {
        label:'API functions',
        icon:'mdi mdi-function',
        items:getFunctionsMenu(router)
    },
    {
        label:'Events',
        icon:'mdi mdi-function-variant',
        items:getEventsMenu(router)
    },
    {
        label:'Types',
        icon:'mdi mdi-language-typescript',
        items:getTypesMenu(router)
    },
    {
        label:'Params',
        icon:'mdi mdi-data-matrix',
        items:getParamsMenu(router)
    },
    {
        label:'Licence',
        icon:'mdi mdi-scale-balance',
        command:()=>router.push({name:'Licence'})
    },
    {
        label:'Issues',
        icon:'mdi mdi-alert',
        command:()=>router.push({name:'Issues'})
    },
    // {
    //     label:'Author & Support',
    //     icon:'mdi mdi-account',
    //     command:()=>router.push({name:'Author'})
    // },
]

export const getShortenMenu = (router:any) => {
    const longMenu = menu(router);
    const shortenMenu = longMenu.map(item => ({
        label: item.label,
        icon: item.icon,
        command: item.items && item.items[0] ? item.items[0].command : item.command
    }));
    return shortenMenu;
}