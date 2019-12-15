// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/styles.css";
import Default from "./layouts/Default.vue";
import Minima from "./layouts/Minima.vue";
import Account from "./layouts/Account.vue";
import store from "./store";
import i18n from "./i18n";
import VueLazyload from "vue-lazyload";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";

Vue.use(VueToast);

Vue.use(VueLazyload);

Vue.component("default-layout", Default);
Vue.component("minima-layout", Minima);
Vue.component("account-layout", Account);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// filters
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("uppercase", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});
Vue.filter("firstLetter", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase();
});
Vue.filter("truncate", function(value, char) {
  if (!value) return "";
  const ending = char && value.length > char ? "..." : "";
  if (value.length) {
    return value.substring(0, char || 20) + ending;
  } else {
    return value;
  }
});
Vue.filter("age", function(value) {
  if (!value) return "";
  return 4;
});
Vue.filter("date", function(time) {
  switch (typeof time) {
    case "number":
      break;
    case "string":
      time = +new Date(time);
      break;
    case "object":
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, "seconds", 1], // 60
    [120, "1 minute ago", "1 minute from now"], // 60*2
    [3600, "minutes", 60], // 60*60, 60
    [7200, "1 hour ago", "1 hour from now"], // 60*60*2
    [86400, "hours", 3600], // 60*60*24, 60*60
    [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
    [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
    [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = "ago",
    list_choice = 1;

  if (seconds == 0) {
    return "Just now";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "from now";
    list_choice = 2;
  }
  var i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    }
  return time;
});

router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;

  next();
});

Vue.mixin({
  data: function() {
    return {
      CDN_IMAGE: "http://res.cloudinary.com/ninjas/image/upload",
      avatar: require("@/assets/images/profile.png"),
      image: require("@/assets/images/image_placeholder.svg")
    };
  },
  computed: {
    type() {
      let type;
      if (JSON.parse(localStorage.getItem("isAuth")) === true) {
        switch (JSON.parse(localStorage.getItem("user")).role) {
          case "parent":
            type = "p";
            break;
          case "learner":
            type = "l";
            break;
          case "tutor":
            type = "t";
            break;
          case "admin":
            type = "a";
            break;
          default:
            type = "n"
            break;
        }
        return type;
      }
    }
  }
});

// Register icons

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);
library.add(fab);
Vue.component("icon", FontAwesomeIcon);


// Create Vue instance
new Vue({
  store,
  el: "#app",
  router,
  components: { App },
  i18n,
  saveScrollPosition: false,
  template: "<App/>"
});
