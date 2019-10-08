<template>
  <div id="settings">
    <component :is="layout">
      <div class="profile">
        <h2>Blog</h2>
       
        <div class="divider my-4"></div>

      </div>
    </component>
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
  name: "settings",
  components: {
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  margin: 0;
}
.profile .bio {
  font-weight: 100;
}

.post-link {
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
</style>