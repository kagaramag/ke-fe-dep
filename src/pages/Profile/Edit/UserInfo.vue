<template>
  <div id="Parent">
    <div v-if="profileUpdated" class="alert alert-success">Profile updated successfuly</div>

    <h4>Account information</h4>

    <div class="hidden">
      <form>
        <div class="form-group">
          <label for="firstName">First name</label>
          <input
            type="text"
            v-model="info.firstName"
            class="form-control"
            id="firstName"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last name</label>
          <input
            type="text"
            v-model="info.lastName"
            class="form-control"
            id="lastName"
            autocomplete="off"
          />
        </div>
        <div>
          <b-form-select v-model="gender" class="mb-3">
            <template v-slot:first>
              <option :value="null" disabled>Update gender</option>
            </template>

            <option value="female">Female</option>
            <option value="male">Male</option>
          </b-form-select>
        </div>

        <div class="form-group">
          <label for="bio">Bio</label>
          <textarea v-model="info.bio" class="form-control" rows="3" id="bio" />
        </div>
        <button
          type="submit"
          @click.prevent
          @click="updateUser"
          class="btn btn-primary bg-primary rounded-pill px-4"
        >Submit</button>
        <div class="float-right m-1">
          <b-spinner v-show="false"></b-spinner>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";
export default {
  name: "Parent",
  props: ["profile"],
  data() {
    return {
      gender: null,
      profileUpdated: false,
      info: {
        firstName: "yes",
        lastName: "",
        bio: ""
      }
    };
  },
  created() {
    this.info = {
      firstName: this.profile.user.firstName,
      lastName: this.profile.user.lastName,
      bio: this.profile.user.bio
    };
  },
  methods: {
    ...mapActions(["UPDATE_PROFILE"]),
    updateUser() {
      const info = {
        firstName: this.info.firstName,
        lastName: this.info.firstName,
        bio: this.info.bio,
        gender: this.gender
      };
      this.UPDATE_PROFILE(info);
      this.profileUpdated = true;
      setTimeout(() => {
        this.profileUpdated = false;
      }, 2000);
    },
  }
};
</script>