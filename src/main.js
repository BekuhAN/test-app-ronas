import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLocationArrow);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
