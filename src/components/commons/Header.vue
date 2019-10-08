<template>
  <div>
    <nav class="navbar bg-light shadow-2 fixed-top navbar-expand-lg navbar-light">
      <div class="container" style="padding:0 auto">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <icon class="icon" icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <router-link class="navbar-brand" :to="'/'">
            <img src="@/assets/images/logo_nivelo_xs.svg" />
          </router-link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/tutors'">Tutors</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/feed'">Feeds</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/jobs'">Jobs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/profiles'">Resources</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/profiles'">Questions</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/faqs'">FAQs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/profiles'">Events</router-link>
            </li>
          </ul>
          <ul class="navbar-nav right" v-if="profile.isLoggedIn">
            <li class="nav-item">
              <button class="btn">
                <icon class="icon" icon="bell" />
              </button>
            </li>
            <li class="nav-item">
              <button class="btn">
                <icon class="icon" icon="envelope" />
              </button>
            </li>
            <li class="nav-item avatar">
              <router-link class="nav-link p-0" :to="`/profile/${profile.user.username}`">
                <span v-if="profile.user.image">
                  <img
                    :src="profile.user.image"
                    class="rounded-circle"
                    height="35"
                    alt="Tutor"
                  />
                </span>
                <span v-else>
                  <img
                    src="@/assets/images/profile.png"
                    class="rounded-circle"
                    height="35"
                    alt="Tutor"
                  />
                </span>
                Profile
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav right" v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/login'">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link bg-primary radius-1 text-light"
                :to="'/register'"
              >Register</router-link>
            </li>
          </ul>
          <div class="float-right"></div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

export default {
  mounted() {
    this.$store.dispatch("GET_PROFILE");
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    ...mapGetters(["profile"])
  }
};
</script>
<style scoped>
.navbar-items {
  margin: 0;
  padding: 0px;
  display: inline;
}
.navbar-items li {
  list-style-type: none;
  float: left;
}
.navbar-items li a {
  padding: 5px 15px;
  color: #fefefe;
  font-weight: bold;
}
.bg-primary.text-light {
  color: #fefefe !important;
  padding: 6px 20px;
}
</style>