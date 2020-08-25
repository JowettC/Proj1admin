import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import ky from 'ky';
import "./assets/global-styles.scss";

Vue.use(Buefy);

Vue.config.productionTip = false;

const api = ky.create({
  prefixUrl: "http://3.0.64.28:7000/",
  throwHttpErrors: false,
});

Vue.prototype.$http = api;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

