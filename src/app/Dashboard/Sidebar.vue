<template>
  <div class="sidebar">
    <p class="p-2">
      <router-link class="navbar-brand" :to="'/'">
        <img src="@/assets/images/logo_XII.svg" />
      </router-link>
    </p>
    <!-- DASHBOARD -->
    <div>
      <router-link :to="'/'">
        <icon class="icon" icon="arrow-left" />
        <span>Back home</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}`">
        <icon class="icon" icon="stream" />
        <span>Dashboard</span>
      </router-link>
    </div>
    <!-- TUTOR NAV CARD -->
    <div v-if="accountType === 't'">
      <router-link :to="`/dashboard/${accountType}/services`">
        <icon class="icon" icon="lightbulb" />
        <span>My Services</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}/tutor-application`">
        <icon class="icon" icon="check" />
        <span>My Application</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}/coaching`">
        <icon class="icon" icon="layer-group" />
        <span>Tutoring</span>
      </router-link>
    </div>
    <!-- PARENT NAV CARD -->
    <div v-if="accountType === 'p'">
      <router-link :to="`/dashboard/${accountType}/subscriptions`">
        <icon class="icon" icon="plug" />
        <span>Subscriptions</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}/kids`">
        <icon class="icon" icon="child" />
        <span>Kids</span>
      </router-link>
    </div>

    <!-- GENERAL -->
    <div>
      <router-link :to="`/dashboard/${accountType}/messages`">
        <icon class="icon" icon="envelope" />
        <span>Messages</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}/my-blog`">
        <icon class="icon" icon="signature" />
        <span>Blog</span>
      </router-link>
      <router-link :to="`/dashboard/${accountType}/settings`">
        <icon class="icon" icon="cog" />
        <span>Settings</span>
      </router-link>
    </div>
    <!-- GENERAL -->
    <div>
      <router-link :to="`/dashboard/${accountType}/admin`">
        <icon class="icon" icon="envelope" />
        <span>Admin Panel</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "sidebar",
  computed: {
    profile() {
      return JSON.parse(localStorage.getItem("user"));
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

.sidebar{
  position: fixed;
}
.sidebar .navbar-brand{
  display: block;
  margin: 0 auto
}
.sidebar a {
  display: block;
  margin-bottom: 12px;
  padding: 10px 20px 10px 50px;
  position: relative;
  color: #ececec;
}
.is-active{
  border:1px solid red!important
}

.sidebar a:hover {
  opacity: 0.7;
}
.sidebar a .icon {
  position: absolute;
  top: 13px;
  left: 22px;
  color: #c8c8c8;
}
.sidebar a:hover .icon {
  color: #acabdd;
}
</style>
