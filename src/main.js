import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// reach out to these guys to see if they wanna join: https://github.com/vuesual/vuesual-builder/commits/master

new Vue({
  render: h => h(App)
}).$mount("#app");
