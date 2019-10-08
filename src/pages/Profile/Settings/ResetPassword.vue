<template>
  <div id="Parent">
    <h3>Reset</h3>
    <div>Password must be strong</div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";
export default {
  name: "Tutor",
  props: ["profile"]
};
</script>