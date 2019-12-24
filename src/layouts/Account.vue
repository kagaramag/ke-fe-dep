<template>
  <div id="account">
    <Header />
    <div class="page-wrapper">
      <div v-if="loaded && fetch_user.loading" class="grab-page-loading"></div>
      <div v-if="loaded && fetch_user && !fetch_user.loading">
        <div class="mb-3">
          <ProfileBar :data="fetch_user" />
        </div>
        <div class="container">
          <div class="row pt-3">
            <div v-if="hasSidebar" class="d-dm-block d-lg-block col-sm-12 col-md-3 col-lg-3">
              <Sidebar :user="fetch_user.user" />
            </div>
            <div
              :class="[hasSidebar ? 'col-sm-12 col-md-9 col-lg-9' : 'col-sm-12 col-md-12 col-lg-12' ]"
            >
              <slot :fetch_user="fetch_user" />
            </div>
          </div>
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
import Sidebar from "@/app/dashboard/Sidebar";
import AdminMenu from "@/app/dashboard/AdminMenu";
import ProfileBar from "@/app/dashboard/shared/ProfileBar";

export default {
  name: "accountLayout",
  components: {
    Header,
    Sidebar,
    ProfileBar,
    Footer,
    AdminMenu
  },
  data() {
    return {
      loaded: false,
      hasSidebar: true
    };
  },
  created() {
    if (this.$route.path.includes("dashboard/t/tutor-application") || this.$route.path.includes("dashboard/p/hiring/")) {
      this.hasSidebar = false;
    }
  },
  mounted() {
    this.FETCH_USER(JSON.parse(localStorage.getItem("user")).username);
    this.loaded = true;
  },
  computed: {
    fetch_user() {
      return this.$store.getters.fetch_user;
    },
    ...mapGetters(["fetch_user"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    logout() {
      this.LOGOUT_USER();
    },
    ...mapActions(["LOGOUT_USER", "FETCH_USER"])
  }
};
</script>

<style scoped>
header.navbar {
  background: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
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
