<<<<<<< HEAD
// import { VueRecaptchaPlugin } from "vue-recaptcha";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
=======


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
// import Toast from 'vue-toastification'; // Importez la bibliothèque vue-toastification
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


>>>>>>> ea04194922236ab7b5014cd260df44030858f756

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

<<<<<<< HEAD
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
// Vue.use(VueRecaptchaPlugin, {
//   v2SiteKey: "6LehRTsmAAAAAHh1FjWgVrKKf9Z_OHjaiUmgeCHb",
// });
=======
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(Toast)
>>>>>>> ea04194922236ab7b5014cd260df44030858f756

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
