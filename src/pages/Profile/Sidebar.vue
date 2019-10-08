<template>
  <div slot-scope="fetch_user">
    <!-- PROFILE CARD START -->
    <div class="shadow-2 bg-white mb-1 top-border-styled">
      <div class="card profile-card-4">
        <div class="card-body pt-1" v-if="fetch_user.user">
          <span v-if="fetch_user.user.image">
            <img
              :src="fetch_user.user.image"
              style="max-width:120px;"
              class="d-block ui-w-100 rounded-circle profile d-block mx-auto"
              alt="Tutor"
            />
          </span>
          <span v-else>
            <img
              src="@/assets/images/profile.png"
              style="max-width:160px;"
              class="d-block ui-w-100 rounded-circle profile d-block mx-auto"
              alt="Tutor"
            />
          </span>
          <h5
            class="card-title text-center"
          >{{fetch_user.user.lastName}} {{fetch_user.user.firstName}}</h5>
          <div class="mx-3">{{fetch_user.user.email}}</div>
          <div class="my-3">
            <button class="mx-auto d-block btn btn-outline-light text-dark">
              <icon class="icon" icon="envelope" />&nbsp;message
            </button>
          </div>
          <div class="icon-block text-center d-none">
            <a href="#">
              <icon class="icon" icon="envelope" />
            </a>
            <a href="#">
              <icon class="icon" icon="envelope" />
            </a>
            <a href="#">
              <icon class="icon" icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- PROFILE CARD END -->
    <div
      class="shadow-2 bg-white mb-1 pt-3 top-border-styled"
      v-if="profile.isLoggedIn && fetch_user.user.id === profile.user.id"
    >
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="user" />
            <span>Profile</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- TUTOR NAV CARD START -->
      <b-list-group
        class="sidebar-nav"
        v-if="profile.isLoggedIn && fetch_user.user.id === profile.user.id && fetch_user.user.UserRole.role.role === 'tutor'"
      >
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/tutoring`">
            <icon class="icon" icon="child" />
            <span>Tutoring</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="check" />
            <span>Reviews</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="question" />
            <span>Answers</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="layer-group" />
            <span>Points</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- TUTOR NAV CARD END -->
      <!-- PARENT NAV CARD START -->
      <b-list-group
        class="sidebar-nav"
        v-if="profile.isLoggedIn && fetch_user.user.id === profile.user.id && fetch_user.user.UserRole.role.role === 'parent'"
      >
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/tutoring`">
            <icon class="icon" icon="child" />
            <span>My Kids</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="check" />
            <span>Performance</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- PARENT NAV CARD END -->
      <!-- GENERALL NAV CARD START -->
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="'/profile/my-blog'">
            <icon class="icon" icon="signature" />
            <span>Blog</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="'/message'">
            <icon class="icon" icon="envelope" />
            <span>Message</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="bell" />
            <span>Notifications</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/profile/${profile.user.username}/settings`">
            <icon class="icon" icon="cog" />
            <span>Settings</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- GENERAL NAV CARD END -->
    </div>
    <div
      class="shadow-2 bg-white pt-2 top-border-styled"
      v-if="fetch_user.user.UserRole.role.role === 'tutor'"
    >
      <h5 class="py-4 px-4 m-0">
        <span class="bold underline">{{fetch_user && fetch_user.user.lastName}}</span> provided
        <span right v-b-toggle.open-user-provided-status>
          <icon class="icon" icon="chevron-down" />
        </span>
      </h5>
      <b-collapse id="open-user-provided-status">
        <div class="pb-4">
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>ID</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>Location</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>Phone</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-dark" icon="check-circle" />
            <span>Diploma or Certificate</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>Teacher's Legal Approval</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>Education Background</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-dark" icon="check-circle" />
            <span>Code of conducts</span>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
export default {
  name: "sidebar",
  props: ["fetch_user", "profile"],
  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.tutor-summary-item {
  padding: 5px 20px;
  position: relative;
}
.tutor-summary-item .icon {
  position: relative;
  left: 3px;
}
.tutor-summary-item span {
  position: relative;
  left: 15px;
}
.sidebar-nav {
  border: none !important;
}
.sidebar-nav .list-group-item {
  position: relative;
  padding: 2px auto;
  border: none;
  border-top: 1px solid #ebebeb !important;
}
.sidebar-nav .list-group-item .icon {
  position: relative;
  color: #304894;
  left: 5px;
}
.sidebar-nav .list-group-item span {
  position: relative;
  left: 15px;
}
.sidebar-nav .list-group-item a {
  color: #6d6d6d;
}
</style>