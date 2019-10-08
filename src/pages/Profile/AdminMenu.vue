
<template>
  <div id="admin-menu">
    <h5>Admin Panel</h5>
    <div>
      Coming soon...
    </div>
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

export default {
  name: "AdminMenu",
};
</script>


<style scoped>
</style>