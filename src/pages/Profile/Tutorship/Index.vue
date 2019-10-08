<template>
  <div id="tutorship">
    <component :is="layout">
        <!-- <DetailsTutor v-if="isTutor" :tutoring="fetch_one_tutoring.tutoring" :profile="profile" /> -->
        <!-- <DetailsParent v-if="isParent" :fetch_kids="fetch_kids" :profile="profile" />
        <MyTutees v-if="isTutor" :fetch_kids="fetch_kids" :profile="profile" /> -->
        <Compose :profile="profile" :tutoring="fetch_one_tutoring" />
        <Thread :profile="profile"  />
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
import DetailsParent from "./DetailsParent";
import DetailsTutor from "./DetailsTutor";
import Compose from "./Compose";
import Thread from "./Thread";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";


export default {
  name: "tutorship",
  components: {
    DetailsParent,
    DetailsTutor,
    Compose,
    Thread
  },
  mounted() {
    this.FETCH_TUTORING_DETAILS(this.$route.params.id);
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile;
    },
    fetch_one_tutoring() {
      return this.$store.getters.fetch_one_tutoring;
    },
    isParent() {
      return this.profile.user.role === "parent" ? true : false;
    },
    isTutor() {
      return this.profile.user.role === "tutor" ? true : false;
    }
  },
  methods: {
    ...mapActions(["FETCH_TUTORING_DETAILS"])
  }
};
</script>
