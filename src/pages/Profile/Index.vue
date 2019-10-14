<template>
  <div id="account">
    <component :is="layout">
      <div class="profile" slot-scope="data">
        <Tips :fetch_user="data.fetch_user" :profile="data.profile" />
        <!-- HIRE ME START -->
        <!-- <HireMe
          v-if="
          data.profile.isLoggedIn 
          && data.profile.user.role === 'parent'
          && (data.profile.user.id !== data.fetch_user.user.id)
          "
          :fetch_user="data.fetch_user"
          :profile="data.profile"
        /> -->

        <!-- KIDS -->
        <!-- HIRE ME END -->
        <Education
          v-if="
          data.fetch_user.user.UserRole.role.role === 'tutor'
          "
          :fetch_user="data.fetch_user"
          :profile="data.profile"
        />
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
import ProfilePosts from "./ProfilePosts";
import Education from "./Education";
// import Kids from "./Kids";
import HireMe from "./HireMe";
import Tips from "./Tips";

const account_layout = "account";
export default {
  name: "index",
  props: ["data"],
  components: {
    ProfilePosts,
    Education,
    // Kids,
    HireMe,
    Tips
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
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