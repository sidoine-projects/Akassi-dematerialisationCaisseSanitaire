// import { VueRecaptchaPlugin } from "vue-recaptcha";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

// Vue.use(BootstrapVue);
// Vue.use(VueSweetalert2);
// Vue.use(VueRecaptchaPlugin, {
//   v2SiteKey: "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb",
// });


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
