<template>
  <div id="hireme" slot-scope="profile">
    <!-- HIRE -->
    <div class="alert gradient-primary text-light" role="alert">
      <h4 class="alert-heading">Hi, {{profile.user.lastName}} {{profile.user.firstName}}</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />

      <div>
        <b-button
          id="show-btn"
          class="btn btn-light float-right mx-2"
          @click="$bvModal.show('hirenow')"
        >
          <icon class="icon" icon="handshake" />Hire Me
        </b-button>
        <!-- <button class="btn btn-light float-right mx-2">Hire me</button> -->
        <button class="btn btn-light float-right">
          <icon class="icon" icon="envelope" />Message
        </button>
      </div>
      <div class="clear"></div>
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
  name: "hireme",
  props: ["fetch_user", "profile"],
  data() {
    return {
      tuteeId: ""
    };
  },
  mounted() {
    this.FETCH_KIDS();
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    },
    requested_tutor() {
      return this.$store.getters.requested_tutor;
    },
    fetched_kids() {
      let filtered_kids = [];
      Object.entries(this.$store.getters.fetch_kids.kids).forEach(
        ([key, value]) => {
          if (!value.tutoring) {
            filtered_kids = [...filtered_kids, value];
          }
        }
      );
      return filtered_kids;
    },

    ...mapGetters(["fetch_kids", "requested_tutor"])
  },
  methods: {
    request_tutor() {
      const data = { tuteeId: this.tuteeId, tutorId: this.fetch_user.user.id };
      this.REQUEST_TUTOR(data);
    },
    ...mapActions(["FETCH_KIDS", "REQUEST_TUTOR"])
  }
};
</script>
