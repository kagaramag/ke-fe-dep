<template>
  <div slot-scope="fetch_user">
    <div
      class="shadow-2 bg-white mb-1 pt-3 top-border-styled"
      v-if="profile.isLoggedIn && fetch_user && fetch_user.user.id === profile.user.id"
    >
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}`">
            <icon class="icon" icon="stream" />
            <span>{{$t('userprofile.sidebar.profile.home')}}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- TUTOR NAV CARD START -->
      <b-list-group
        class="sidebar-nav"
        v-if="profile.isLoggedIn && fetch_user.user.id === profile.user.id && fetch_user.user.UserRole.role.role === 'tutor'"
      >
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/tutoring`">
            <icon class="icon" icon="layer-group" />
            <span>{{$t('userprofile.sidebar.tutoring')}}</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/identity`">
            <icon class="icon" icon="file-csv" />
            <span>{{$t('userprofile.sidebar.profile.identity')}}</span>
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
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/tutoring`">
            <icon class="icon" icon="child" />
            <span>My Kids</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="check" />
            <span>Performance</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- PARENT NAV CARD END -->
      <!-- GENERALL NAV CARD START -->
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/my-blog`">
            <icon class="icon" icon="signature" />
            <span>{{$t('userprofile.sidebar.blog')}}</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/message`">
            <icon class="icon" icon="envelope" />
            <span>{{$t('userprofile.sidebar.message')}}</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/edit`">
            <icon class="icon" icon="bell" />
            <span>{{$t('userprofile.sidebar.notifications')}}</span>
          </router-link>
        </b-list-group-item>

        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/settings`">
            <icon class="icon" icon="cog" />
            <span>{{$t('userprofile.sidebar.settings')}}</span>
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
        <span class="bold underline">{{fetch_user && fetch_user.user.lastName}}</span>
        {{$t('userprofile.provided.title')}}
        <span
          right
          v-b-toggle.open-user-provided-status
        >
          <icon class="icon" icon="chevron-down" />
        </span>
      </h5>
      <!-- <b-collapse id="open-user-provided-status"> -->
        <div class="pb-4">
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>{{$t('userprofile.provided.id')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>{{$t('userprofile.provided.location')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>{{$t('userprofile.provided.phone')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-dark" icon="check-circle" />
            <span>{{$t('userprofile.provided.diploma')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>{{$t('userprofile.provided.teacher')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-success" icon="check-circle" />
            <span>{{$t('userprofile.provided.education')}}</span>
          </div>
          <div class="tutor-summary-item">
            <icon class="icon text-dark" icon="check-circle" />
            <span>{{$t('userprofile.provided.code')}}</span>
          </div>
        </div>
      <!-- </b-collapse> -->
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
  data() {
    return {};
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["LOGOUT_USER"]),
    logout() {
      this.LOGOUT_USER();
    }
  }
};
</script>

<style scoped>
.btn-right {
  margin-top: 2px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
}
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
