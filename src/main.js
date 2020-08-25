import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import ky from 'ky';
import "./assets/global-styles.scss";

Vue.use(Buefy);

Vue.config.productionTip = false;

const api = ky.create({
  prefixUrl: "https://vldqmvfnzd.execute-api.ap-southeast-1.amazonaws.com/dev/",
  throwHttpErrors: false,
});

Vue.prototype.$http = api;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

