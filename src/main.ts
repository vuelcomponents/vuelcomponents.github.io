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
import { createVCodeBlock } from '@wdns/vue-code-block';
import { VCodeBlock } from '@wdns/vue-code-block';
import FunctionRenderer from "@/utils/grid/renderers/FunctionRenderer.vue";
import TypesRenderer from "@/renderers/TypesRenderer.vue";
import ToastService from 'primevue/toastservice';
const VCodeBlockP = createVCodeBlock({
    // options
});
const app = createApp(App);
app.use(router)
app.use(ToastService);
app.component('EventMainRenderer', EventMainRenderer)
app.component('InputDate', Calendar)
app.component('InputNumber', InputNumber)
app.component('InputText', InputText)
app.component('FunctionRenderer', FunctionRenderer)
app.component('TypesRenderer', TypesRenderer)
app.use(VCodeBlockP);
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind                            //apply preset
});
app.component('VCodeBlock', VCodeBlock);
app.mount('#app')
