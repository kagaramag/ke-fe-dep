<template>
  <div id="settings">
    <component :is="layout">
      <div class="profile">
        <h2>Settings</h2>
        <div class="divider mb-4"></div>

        <h4 class="my-4">Logout</h4>
        <div>
          <button @click.prevent @click="logout" class="btn btn-dark">Sign out</button>
        </div>
        <div class="divider my-4"></div>

        <div>
          <ResetPassword :profile="profile" />
          <div class="divider my-4" />
        </div>
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

import ResetPassword from "./ResetPassword";

export default {
  name: "settings",
  components: {
    ResetPassword,
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    logout() {
      this.LOGOUT_USER();
    },
    ...mapActions(["LOGOUT_USER"])
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