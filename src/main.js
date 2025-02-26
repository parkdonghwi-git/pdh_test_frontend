import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

export const eventBus = new Vue();

Vue.use(Vuetify);

const app = createApp(App);
app.use(router);
app.mount("#app");