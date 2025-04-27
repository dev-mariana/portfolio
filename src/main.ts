import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { ToastService } from "primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/main.css";
import en from "./locales/en.json";
import ptbr from "./locales/pt-br.json";

const i18n = createI18n({
  legacy: false,
  locale: "pt-br",
  fallbackLocale: "en",
  messages: {
    "pt-br": ptbr,
    en,
  },
});

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(ToastService);
app.use(i18n);

app.mount("#app");
