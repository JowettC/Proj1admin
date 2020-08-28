import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import ky from 'ky';
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/global-styles.scss";

library.add(faPen,faTrash)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.use(Buefy);

Vue.config.productionTip = false;

const api = ky.create({
  prefixUrl: "https://df0lt32z9l.execute-api.ap-southeast-1.amazonaws.com/dev/",
  throwHttpErrors: false,
});

Vue.prototype.$http = api;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
