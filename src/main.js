// import Vue from 'vue'
import { createApp } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

// Vue.config.devtools = true;

createApp(App).use(router).use(store).mount("#app");
