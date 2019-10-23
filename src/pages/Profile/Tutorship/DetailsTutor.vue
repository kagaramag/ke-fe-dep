<template>
  <div id="Parent">
    <div class="mb-1 shadow-sm p-4 bg-white wrap-one-tutering">
      <div v-if="tutoring.status ==='requested'" style="font-size: 18px">
        <router-link :to="`/${$i18n.locale}`">
          <b>{{tutoring.kid.parent.lastName}} {{tutoring.kid.parent.firstName}}</b>
        </router-link>requested you to tutor
        <b>{{tutoring.kid.names}}</b>
        , his/her {{tutoring.kid.age}}-years old child who is studying in
        <b>{{tutoring.kid.school}}</b>
        specifically in {{tutoring.kid.class}}
      </div>
      <div v-if="tutoring.status ==='accepted'">
        You are connected with
        <router-link :to="`/${$i18n.locale}`">
          <b>{{tutoring.kid.names}}</b>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";
export default {
  name: "Tutor",
  props: ["tutoring", "profile"]
};
</script>

<style scoped>
</style>
