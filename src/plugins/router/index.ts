import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import {Grid} from "@/utils/grid/Grid";
import VuelCalendarView from "@/views/VuelCalendarView.vue";
import CalendarPreview from "@/views/vuelcalendar/CalendarPreview.vue";
import CalendarReadme from "@/views/vuelcalendar/CalendarReadme.vue";
import CalendarFunctions from "@/views/vuelcalendar/CalendarFunctions.vue";
import CalendarAbout from "@/views/vuelcalendar/CalendarAbout.vue";
import CalendarTypes from "@/views/vuelcalendar/CalendarTypes.vue";
import CalendarParams from "@/views/vuelcalendar/CalendarParams.vue";
import CalendarEvents from "@/views/vuelcalendar/CalendarEvents.vue";

const routes = [
    { path: '/', component: HomeView, redirect:{name:'preview'}},
    {
        path:'/calendar',
        component: VuelCalendarView,
        redirect:{name:'preview'},
        name:'calendar',
        children:[
            {
                path:'preview',
                name:'preview',
                component:CalendarPreview,
            },
            {
                path:'readme',
                name:'readme',
                component:CalendarReadme,
            },
            {
                path:'functions',
                name:'functions',
                component:CalendarFunctions
            },
            {
                path:'events',
                name:'events',
                component:CalendarEvents
            },
            {
                path:'params',
                name:'params',
                component:CalendarParams
            },
            {
                path:'types',
                name:'types',
                component:CalendarTypes
            },
            {
                path:'about',
                name:'about',
                component:CalendarAbout
            },
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;