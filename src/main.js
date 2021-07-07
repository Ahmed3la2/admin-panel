/*jshint esversion: 8 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
// make jw pagination component available in application
import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
