<template>
  <div>
    <div class="mb-4">
      <h3 class="text-center ">Learners and Tutorship</h3>
      <MyKids :profile="profile" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import MyKids from "./MyKids";
export default {
  name: "DashboardParentBox",
  components: {
    MyKids
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  }
};
</script>