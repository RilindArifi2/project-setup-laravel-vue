import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from './router.js';
import AppComponent from './App.vue'

createApp(AppComponent).use(router).mount("#app")

