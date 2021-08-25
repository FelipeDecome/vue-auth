import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Global from './style/Global.vue';
import Typography from './shared/components/Typography.vue';

Vue.config.productionTip = false;
Vue.component('global-style', Global);
Vue.component('typography', Typography);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
