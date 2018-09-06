import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bulma";
import Vuex from "vuex";
import IdleVue from "idle-vue";

Vue.use(Vuex);
Vue.config.productionTip = false;

// Set idle trigger to listen for 10 minutes
const eventsHub = new Vue();
const idleOptions = {
  eventEmitter: eventsHub,
  idleTime: 10 * 60 * 1000 // mins, seconds, milliseconds
};
Vue.use(IdleVue, idleOptions);

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
