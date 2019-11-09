<template>
  <div id="settings">
    <component :is="layout">
      <div class="profile">
        <h2>{{$t('settings.title')}}</h2>
        <div class="my-2">{{$t('settings.description')}}</div>
        <div class="divider bg-light my-2"></div>
        <div class="shadow-2 radius-2 p-3 mb-4">
          <UserInfo :profile="profile"/>
        </div>
        <div class="shadow-2 radius-2 p-3 mb-4">
          <ProfilePicture :profile="profile"  />
        </div>
        <div class="shadow-2 radius-2 p-3 mb-4">
          <Language />
        </div>
        <div class="shadow-2 radius-2 p-3 mb-4">
          <ResetPassword :profile="profile" />
        </div>
        <div class="shadow-2 radius-2 p-3 mb-4">
          <h4 class="my-4">{{$t('settings.logout.title')}}</h4>
          <div>
            <button @click.prevent @click="logout" class="btn btn-danger rounded-pill px-4">{{$t('settings.logout.button')}}</button>
          </div>
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
import Language from "./Language";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

export default {
  name: "settings",
  components: {
    ResetPassword,
    Language,
    UserInfo,
    ProfilePicture
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