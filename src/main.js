import "./assets/main.css";
import PrimeVue from "primevue/config";
import i18n from "./includes/i18n";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.mount("#app");
