import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./plugins/router";
import PrimeVue from 'primevue/config';
import '@mdi/font/css/materialdesignicons.css';
//@ts-ignore
import Lara from './presets/Lara'
import Button from "primevue/button";
import {createVCodeBlock} from "@wdns/vue-code-block";
import DraggableEvents from "./components/previews/DraggableEvents.vue";
import TestRenderer1 from "./components/renderers/TestRenderer1.vue";
import TestRenderer2 from "./components/renderers/TestRenderer2.vue";
import CustomRenderer from "./components/renderers/CustomRenderer.vue";
import HomeRenderer from "@/components/renderers/HomeRenderer.vue";
import CalendarComponent from "@/views/Home/CalendarComponent.vue";
import FrequencyComponent from "@/views/Home/FrequencyComponent.vue";
const VCodeBlockP = createVCodeBlock({
    // options
});
const app = createApp(App)
app.use(router)
app.use(VCodeBlockP);
app.component("Button", Button)
app.component('draggable-events', DraggableEvents)
app.component('HomeRenderer', HomeRenderer)
app.component('CalendarComponent', CalendarComponent);
app.component('FrequencyComponent', FrequencyComponent)
app.component('TestRenderer1', TestRenderer1)
app.component('TestRenderer2', TestRenderer2)
app.component('CustomRenderer', CustomRenderer)
app.use(PrimeVue,{
    pt:Lara
});
app.mount('#app')
