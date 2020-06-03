import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/styles.css";
import Default from "./layouts/Default.vue";
import store from "./store";
import VueLazyload from "vue-lazyload";
import VueAnalytics from "vue-analytics";
import VueMeta from 'vue-meta';

// Register icons

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

Vue.use(VueMeta);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "dist/error.png",
  loading: require("@/assets/images/spinner.svg"),
  attempt: 1
});

Vue.component("default-layout", Default);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.use(VueAnalytics, {
  id: "UA-156020752-1",
  router
});

// filters
import "./filters/capitalize";
import "./filters/truncate";
import "./filters/uppercase";
import "./filters/age";
import "./filters/date";
import "./filters/firstLetter";


library.add(fas);
library.add(fab);
Vue.component("icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
  // RenderAfterDocument Event:'render-event'name must correspond to vue-config.js
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
