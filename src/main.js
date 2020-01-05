import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "vue-select/dist/vue-select.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
