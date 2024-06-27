import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "../../views/WelcomeView.vue";
import AboutView from "../../views/AboutView.vue";
import GuideView from "../../views/GuideView.vue";
import DemosView from "../../views/DemosView.vue";
import ApiFunctionsView from "../../views/ApiFunctionsView.vue";
import EventsView from "../../views/EventsView.vue";
import ParamsView from "../../views/ParamsView.vue";
import TypesView from "../../views/TypesView.vue";
import LicenceView from "../../views/LicenceView.vue";
import AuthorView from "../../views/AuthorView.vue";
import IssuesView from "../../views/IssuesView.vue";
import CalendarView from "@/views/CalendarView.vue";
import MainView from "@/views/MainView.vue";
import FullDemoCalendar from "@/views/FullDemos/FullDemoCalendar.vue";


const routes = [
    {
      path:'/full-demo-calendar',
      name:'FullDemoCalendar' ,
      component: FullDemoCalendar
    },
    {
        path: '/',
        component: WelcomeView,
        name:'Welcome',
        children:[
            {
                name:'MainView',
                path:'',
                component:MainView,
            },
            {
                name:'calendar',
                path:'calendar',
                component:CalendarView,
                children:[
                    {
                        path:'guide',
                        name:'Guide',
                        component:GuideView
                    },
                    {
                        path:'demos',
                        name:'Demos',
                        component:DemosView
                    },
                    {
                        path:'api-functions',
                        name:'ApiFunctions',
                        component:ApiFunctionsView
                    },
                    {
                        path:'events',
                        name:'Events',
                        component:EventsView
                    },
                    {
                        path:'params',
                        name:'Params',
                        component:ParamsView
                    },
                    {
                        path:'types',
                        name:'Types',
                        component:TypesView
                    },
                    {
                        path:'licence',
                        name:'Licence',
                        component:LicenceView
                    },
                    {
                        path:'author',
                        name:'Author',
                        component:AuthorView
                    },
                    {
                        path:'issues',
                        name:'Issues',
                        component: IssuesView
                    }
                ]
            },
            // {
            //     path:'',
            //     name:'About',
            //     component:AboutView
            // },

        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;