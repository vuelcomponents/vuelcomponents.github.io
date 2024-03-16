import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import {Grid} from "@/utils/grid/Grid";
import VuelCalendarView from "@/views/VuelCalendarView.vue";

const routes = [
    { path: '/', component: HomeView, redirect:{name:'calendar'}},
    { path:'/components/calendar', component: VuelCalendarView, name:'calendar'}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;