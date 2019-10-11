
<template>
  <div id="account">
    <Header :profile="profile" />
    <div class="d-none d-sm-block d-dm-block">
    <MessageBar :fetch_user="fetch_user" :profile="profile" />
    </div>
    <div class="container">
      <div class="row pt-2" v-if="loaded?'hidden':''">
        <div class="col d-none d-sm-block d-dm-block">
          <Sidebar :fetch_user="fetch_user" :profile="profile" />
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-7">
          <slot :fetch_user="fetch_user" :profile="profile" />
        </div>
        <div class="col d-none d-sm-block d-md-block">
          <!-- <AdminMenu /> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";
import Sidebar from "@/pages/profile/Sidebar";
import MessageBar from "@/pages/profile/MessageBar";
import AdminMenu from "@/pages/profile/AdminMenu";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

export default {
  name: "accountLayout",
  components: {
    Header,
    Sidebar,
    MessageBar,
    Footer,
    AdminMenu
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.currentUsername = this.$route.params.username;
    this.FETCH_USER(this.currentUsername);
    this.loaded = true;
  },
  watch: {
    "$route.params.username"(nextUsername, previousUsername) {
      this.FETCH_USER(nextUsername);
    }
  },
  computed: {
    fetch_user() {
      return this.$store.getters.fetch_user;
    },
    profile() {
      return this.$store.getters.profile;
    },
    ...mapGetters(["fetch_user", "profile"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    },
    isMyAccount() {
      return (
        (this.profile.isLoggedIn &&
          this.fetch_user.user.id === this.profile.user.id) ||
        false
      );
    }
  },
  created() {
    this.loaded = false;
  },
  methods: {
    logout() {
      this.LOGOUT_USER();
    },
    ...mapActions(["FETCH_USER", "LOGOUT_USER"])
  }
};
</script>


<style scoped>
header.navbar {
  background: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
}
.container {
  /* margin-top: 76px; */
}
.content-wrapper {
  margin: 0px auto;
  display: block;
  max-width: 1100px;
}
.bio {
  font-weight: 100;
  font-size: 18px;
  color: #565656;
}
.nav .icon {
  margin-right: 5px;
}
.nav .nav-link {
  color: #81828b;
  font-weight: 100;
}
.nav .nav-link.active {
  color: #484a52;
  font-weight: 600;
}
.tabs-alt.nav-tabs .nav-link.active,
.tabs-alt.nav-tabs .nav-link.active:hover,
.tabs-alt.nav-tabs .nav-link.active:focus,
.tabs-alt > .nav-tabs .nav-link.active,
.tabs-alt > .nav-tabs .nav-link.active:hover,
.tabs-alt > .nav-tabs .nav-link.active:focus {
  -webkit-box-shadow: 0 -2px 0 #26b4ff inset;
  box-shadow: 0 -2px 0 #26b4ff inset;
}

.nav-tabs:not(.nav-fill):not(.nav-justified) .nav-link,
.nav-pills:not(.nav-fill):not(.nav-justified) .nav-link {
  margin-right: 0.125rem;
}
.nav-tabs.tabs-alt .nav-link,
.tabs-alt > .nav-tabs .nav-link {
  border-width: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
}
.nav-tabs .nav-link.active {
  border-bottom-color: #fff;
}
</style>