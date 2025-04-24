import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { ToastService } from "primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(ToastService);

app.mount("#app");
