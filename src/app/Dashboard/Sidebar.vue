<template>
  <div class="mb-1">
    <div class="sidebar">
      <!-- DASHBOARD -->
      <div>
        <router-link :to="`/dashboard/${type}`">
          <icon class="icon" icon="stream" />
          <span>Dashboard</span>
        </router-link>
        <router-link :to="`/dashboard/${type}/messages`">
          <icon class="icon" icon="envelope" />
          <span>Messages</span>
        </router-link>
      </div>
      <!-- TUTOR NAV CARD -->
      <div v-if="type === 't'">
        <router-link :to="`/dashboard/${type}/coaching`">
          <icon class="icon" icon="layer-group" />
          <span>Tutoring</span>
        </router-link>
        <router-link
          class="bg-success text-white"
          :to="`/dashboard/${type}/tutor-application`"
        >
          <icon class="icon text-white" icon="check" />
          <span>My Application</span>
        </router-link>
      </div>

      <!-- GENERAL -->
      <div>
        <router-link :to="`/dashboard/${type}/my-blog`">
          <icon class="icon" icon="signature" />
          <span>Blog</span>
        </router-link>
        <router-link :to="`/dashboard/${type}/settings`">
          <icon class="icon" icon="cog" />
          <span>Settings</span>
        </router-link>
      </div>
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
.sidebar {
  width: 100%;
}
.sidebar a {
  display: block;
  margin-bottom: 12px;
  padding: 10px 20px 10px 50px;
  position: relative;
  border: 1px solid #dadada;
  border-radius: 25px !important;
  color: #434343;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.sidebar a.bg-success {
  border: 0px solid #ffffff!important;
}
.sidebar a:hover {
  background: #efefef;
  border-color: #d3d3d3;
}
.sidebar a .icon {
  position: absolute;
  top: 13px;
  left: 22px;
  color: #b4b4b4;
}

</style>
