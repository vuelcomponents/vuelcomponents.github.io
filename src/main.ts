import { createApp } from 'vue'
import App from './App.vue'
import './themes/theme.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import router from '@/plugins/router'
import EventMainRenderer from "@/renderers/EventMainRenderer.vue";
import PrimeVue from 'primevue/config';
//@ts-ignore
import Wind from '@/assets/presets/wind';
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
const app = createApp(App);
app.use(router)
app.component('EventMainRenderer', EventMainRenderer)
app.component('InputDate', Calendar)
app.component('InputNumber', InputNumber)
app.component('InputText', InputText)
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind                            //apply preset
});
app.mount('#app')
