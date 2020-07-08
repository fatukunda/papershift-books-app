import Vue from "vue";
import Paginate from "vuejs-paginate";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("paginate", Paginate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
