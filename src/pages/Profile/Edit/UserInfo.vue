<template>
  <div id="Parent">
    <div v-if="profileUpdated" class="alert alert-success">Profile updated successfuly</div>

    <b-button id="show-btn" @click="$bvModal.show('profilepic')">
      <icon class="icon" icon="edit" />
      {{$t('userprofile.sidebar.profile.edit.button')}}
    </b-button>

    <h4>{{$t('userprofile.sidebar.profile.edit.info')}}</h4>

    <div class="hidden">
      <form>
        <div class="form-group">
          <label for="firstName">{{$t('userprofile.sidebar.profile.edit.first_name')}}</label>
          <input
            type="text"
            v-model="info.firstName"
            class="form-control"
            id="firstName"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="lastName">{{$t('userprofile.sidebar.profile.edit.last_name')}}</label>
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
              <option :value="null" disabled>{{$t('userprofile.sidebar.profile.edit.gender')}}</option>
            </template>

            <option value="female">{{$t('userprofile.sidebar.profile.edit.female')}}</option>
            <option value="male">{{$t('userprofile.sidebar.profile.edit.male')}}</option>
          </b-form-select>
        </div>

        <div class="form-group">
          <label for="bio">{{$t('userprofile.sidebar.profile.edit.bio')}}</label>
          <textarea v-model="info.bio" class="form-control" rows="3" id="bio" />
        </div>
        <button
          type="submit"
          @click.prevent
          @click="updateUser"
          class="btn btn-primary bg-primary rounded-pill px-4"
        >{{$t('userprofile.sidebar.profile.edit.submit')}}</button>
        <div class="float-right m-1">
          <b-spinner v-show="false"></b-spinner>
        </div>
      </form>
    </div>

    <!-- MODAL FOR EDITING PROFILE PHOTO -->
    <b-modal ref="my-modal" id="profilepic" hide-footer>
      <template v-slot:modal-title>{{$t('userprofile.sidebar.profile.edit.button')}}</template>

      <div class="row mx-auto">
        <div class="col-4 px-2">
          <img
            :src="file ? file : avatar"
            style="width:150px;height:150px; border-radius:50%"
            class="d-block ui-w-100 rounded-circle profile d-block mx-auto"
            alt="Tutor"
          />
        </div>

        <div class="col-8 my-auto">
          <b-form-file
            accept="image/jpeg, image/png"
            @change="GetImage"
            :placeholder="`${$t('userprofile.sidebar.profile.edit.image')}`"
            :drop-placeholder="`${$t('userprofile.sidebar.profile.edit.drop')}`"
            :browse-text="`${$t('userprofile.sidebar.profile.edit.imagebrowse')}`"
          ></b-form-file>
          <button @click="changeProfile" class="my-2 d-block btn btn-primary bg-primary text-white">
            <icon class="icon" icon="image" />
            &nbsp;{{$t('userprofile.sidebar.profile.edit.submit')}}
          </button>
        </div>
      </div>
    </b-modal>
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
      file: null,
      image: null,
      avatar: require("@/assets/images/profile.png"),
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
    ...mapActions(["UPDATE_PROFILE", "UPDATE_PHOTO"]),
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
    GetImage(e) {
      let img = e.target.files[0];
      this.image = img;
      let reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = e => {
        this.file = e.target.result;
      };
    },
    async changeProfile() {
      const formData = new FormData();
      formData.append("image", this.image);
      try {
        await this.UPDATE_PHOTO(formData);
        this.$refs["my-modal"].hide();
      } catch (error) {}

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }
};
</script>
