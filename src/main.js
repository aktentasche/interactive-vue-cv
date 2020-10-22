import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";

import { ObserveVisibility } from "vue-observe-visibility";

Vue.directive("observe-visibility", ObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
