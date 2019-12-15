<template>
  <div slot-scope="user">
    <div
      class="shadow-2 bg-white mb-1"
    >
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}`">
            <icon class="icon" icon="stream" />
            <span>{{$t('userprofile.sidebar.profile.home')}}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- TUTOR NAV CARD START -->
      <b-list-group
        class="sidebar-nav"
        v-if="user.id === profile.id && user.UserRole.role.role === 'tutor'"
      >
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}/coaching`">
            <icon class="icon" icon="layer-group" />
            <span>{{$t('userprofile.sidebar.tutoring')}}</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}/identity`">
            <icon class="icon" icon="file-csv" />
            <span>{{$t('userprofile.sidebar.profile.identity')}}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- TUTOR NAV CARD END -->
      <!-- PARENT NAV CARD START -->
      <b-list-group
        class="sidebar-nav"
        v-if="user.id === profile.id && user.UserRole.role.role === 'parent'"
      >
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}/coaching`">
            <icon class="icon" icon="child" />
            <span>{{$t('userprofile.sidebar.tutoring')}}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- PARENT NAV CARD END -->
      <!-- GENERALL NAV CARD START -->
      <b-list-group class="sidebar-nav">
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}/my-blog`">
            <icon class="icon" icon="signature" />
            <span>{{$t('userprofile.sidebar.blog')}}</span>
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link :to="`/${$i18n.locale}/dashboard/${type}/settings`">
            <icon class="icon" icon="cog" />
            <span>{{$t('userprofile.sidebar.settings')}}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
      <!-- GENERAL NAV CARD END -->
    <!-- </div>
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
      </h5> -->
      <!-- <b-collapse id="open-user-provided-status"> -->
        <!-- <div class="pb-4">
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
        </div> -->
      <!-- </b-collapse> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "sidebar",
  props: ["user"],
  data() {
    return {
      // type: 'p'
    };
  },

  computed: {
    profile () {
      return JSON.parse(localStorage.getItem("user"))
    },
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
