<template>
  <div id="tutoring">
    <component :is="layout">
        <MyKids v-if="isParent" :fetch_kids="fetch_kids" :profile="profile" />
        <MyTutees v-if="isTutor" :fetch_kids="fetch_kids" :profile="profile" />
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
import MyKids from "./MyKids";
import MyTutees from "./MyTutees";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";


export default {
  name: "tutoring",
  components: {
    MyKids,
    MyTutees,
  },
  mounted() {
    this.FETCH_KIDS();
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    fetch_kids() {
      return this.$store.getters.fetch_kids;
    },
    register_kid() {
      return this.$store.getters.register_kid;
    },
    ...mapGetters(["fetch_kids"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    },
    isParent() {
      return this.profile.user.role === "parent" ? true : false;
    },
    isTutor() {
      return this.profile.user.role === "tutor" ? true : false;
    }
  },
  methods: {
    ...mapActions(["FETCH_KIDS"])
  }
};
</script>
