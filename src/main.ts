import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import {
  Button,
  Card,
  InputText,
  Textarea,
  Toast,
  ToastService,
} from "primevue";
import PrimeVue from "primevue/config";
// import "primevue/resources/primevue.min.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/main.css";
import en from "./locales/en.json";
import ptBR from "./locales/pt-br.json";

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: {
    en,
    "pt-BR": ptBR,
  },
  legacy: false,
});

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(ToastService);
app.use(i18n);

app.component("Card", Card);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Button", Button);
app.component("Toast", Toast);

app.mount("#app");
