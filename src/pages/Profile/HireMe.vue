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
          <icon class="icon" icon="handshake" /> Hire Me
        </b-button>
        <!-- <button class="btn btn-light float-right mx-2">Hire me</button> -->
        <button class="btn btn-light float-right">
          <icon class="icon" icon="envelope" /> Message
        </button>
      </div>
      <div class="clear"></div>
    </div>
    <!-- MODAL, CONNECT TUTOR TO A KID -->
    <b-modal id="hirenow" hide-footer>
      <template v-slot:modal-title>Hire a tutor</template>
      <div class="d-block">
        <div class="row">
          <div class="col m-4">
            <div class="alert alert-info" role="alert">
              <h4
                class="alert-heading"
              >Hiring {{fetch_user.user.lastName}} {{fetch_user.user.firstName}}</h4>
              <p>Select a kid and request {{fetch_user.user.lastName}} to tutor him/her. We immediate contact {{fetch_user.user.lastName}} and he/she will approve your request as soon as possible</p>
            </div>

            <div v-if="requested_tutor.errors && requested_tutor.errors.tutor">
              <div class="alert alert-danger" role="alert">{{requested_tutor.errors.tutor}}</div>
            </div>
            <div v-if="requested_tutor.message">
              <div class="alert alert-success" role="alert">{{requested_tutor.message}}</div>
            </div>
            <form v-if="!requested_tutor.message">
              <div class="form-group">
                <label for="school">Kids</label>
                <b-form-select v-model="tuteeId" class="mb-3">
                  <option disabled value>Please select one</option>
                  <option v-for="kid in fetched_kids" :value="kid.id" :key="kid.index">{{kid.names}}</option>
                </b-form-select>
              </div>
              <button
                type="submit"
                @click.prevent
                @click="request_tutor"
                class="btn btn-primary bg-primary"
              >Hire now</button>
              <b-button class="btn btn-light" @click="$bvModal.hide('hirenow')">Cancel</b-button>
              <div class="float-right m-1">
                <b-spinner v-show="false"></b-spinner>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
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
