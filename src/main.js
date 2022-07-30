import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router/index";
import store from "./store/index"; // Creating store and importing to link with vue instance

// Loading some fonts which vuetify requires internally to get images and fonts
loadFonts();

const HeroApp = createApp(App);
HeroApp.use(router);
HeroApp.use(store);
HeroApp.use(vuetify);
HeroApp.mount("#app");
