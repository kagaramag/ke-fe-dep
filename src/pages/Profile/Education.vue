<template>
  <div id="education">
    <!-- SUBJECT -->
    <h2 class="my-4">
      My Education
      <span class="float-right"
        v-if="profile.isLoggedIn && profile.user.id === fetch_user.user.id"
      >
        <button
          class="btn btn-link"
        >
          <icon class="icon" icon="plus" />Add
        </button>
      </span>
    </h2>
    <div class="divider mb-4"></div>
    <div>
      <ul class="list-unstyled" v-if="fetch_education && fetch_education.education">
        <li
          class="my-4 rounded shadow-2 bg-white p-3"
          v-for="education in fetch_education.education"
          :key="education.index"
        >
          <div class="row mb-3">
            <div class="col-1">
              <icon class="icon text-muted mt-2" style="font-size:2.2em;" icon="school" />
            </div>
            <div class="col-11">
              <h3 class="mt-0">{{education.institution}}</h3>
              <span class="text-muted">
                {{education.certificate}} in
                <b>{{education.course}}</b>
              </span>
            </div>
          </div>
          <!-- <div class="divider"></div> -->
        </li>
      </ul>
      <div
        class="rounded shadow-2 bg-white p-3 text-center"
        v-if="fetch_education && !fetch_education.education.length"
      >
        <icon icon="exclamation-circle" style="font-size:3.4em" class="icon my-4 text-muted" />
        <h4>No education provided yet</h4>
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
  name: "education",
  props: ["fetch_user", "profile"],
  mounted() {
    this.currentUsername = this.$route.params.username;
    this.FETCH_EDUCATION(this.currentUsername);
  },
  computed: {
    fetch_education() {
      return this.$store.getters.fetch_education.education;
    },
    ...mapGetters(["fetch_education"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["FETCH_EDUCATION"])
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  margin: 0;
}
/* .profile h1, .profile h2, .profile h3{font-weight: 100} */
.profile .bio {
  font-weight: 100;
}

.post-link {
  /* margin-bottom: 20px !important; */
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
.list-unstyled {
}
</style>