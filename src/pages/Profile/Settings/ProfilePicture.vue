<template>
  <div id="user-info">
    <div>
      <h4 class="my-2">{{$t('settings.picture.title')}}</h4>
      <div class="my-2">{{$t('settings.picture.description')}}</div>
      <div
        class="alert alert-success"
        v-show="fetch_user && fetch_user.message"
      >{{fetch_user.message}}</div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="image">
            <img
              :src="file ? file : (fetch_user.user.image || avatar)"
              style="max-width:100%;height:auto;"
              class="mx-auto rounded shadow"
              :alt="profile.user.firstName"
            />
          </div>
        </div>

        <div class="col-lg-8 col-md-8 col-sm-8">
          <b-form-file
            accept="image/jpeg, image/png"
            @change="GetImage"
            class="rounded shadow my-2"
            :placeholder="`${$t('userprofile.sidebar.profile.edit.image')}`"
            :drop-placeholder="`${$t('userprofile.sidebar.profile.edit.drop')}`"
            :browse-text="`${$t('userprofile.sidebar.profile.edit.imagebrowse')}`"
          ></b-form-file>
          <button
            :disabled="!validatePhoto"
            @click="changeProfile"
            class="btn border border-dark rounded-pill px-4 my-3 mr-2"
          >
            <icon class="icon" icon="image" />
            &nbsp;{{$t('settings.picture.button')}}
          </button>
        </div>
        <!-- <div class="image">
            <img
              :src="profile.user.image ? profile.user.image : avatar"
              class="bg-light left rounded-circle border border-primary"
              :alt="profile.user.firstName"
              style="max-width:120px"
            />
        </div>-->
        <!-- <button
            class="btn btn-light my-3 rounded-pill border border-primary"
            id="show-btn"
            @click="$bvModal.show('profilepic')"
          >
            <icon class="icon" icon="image" />
            {{$t('userprofile.sidebar.profile.edit.button')}}
        </button>-->
        <div
          v-show="fetch_user && fetch_user.error"
          class="border border-danger"
        >{{fetch_user.error}}</div>
      </div>
    </div>

    <!-- MODAL FOR EDITING PROFILE PHOTO -->
    <b-modal ref="my-modal" id="profilepic" hide-footer>
      <template v-slot:modal-title>{{$t('userprofile.sidebar.profile.edit.button')}}</template>
      <div class="row mx-auto"></div>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import editor from "vue2-medium-editor";
import "./../../../assets/css/tutella-editor.min.css";
import "./../../../assets/css/flat.min.css";

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";
export default {
  components: {
    "medium-editor": editor
  },
  name: "Parent",
  props: ["profile"],
  data() {
    return {
      file: null,
      image: null,
      profileUpdated: false,
      info: {
        firstName: "",
        lastName: "",
        bio: ""
      },
      options: {
        toolbar: {
          allowMultiParagraphSelection: true,
          buttons: ["bold", "italic", "underline", "h2", "h3", "quote"]
        }
      }
    };
  },
  computed: {
    ...mapGetters(["fetch_user", "edit_user"]),
    validatePhoto() {
      if (!this.image) {
        return false;
      }
      return true;
    }
  },
  methods: {
    ...mapActions(["UPDATE_PROFILE", "UPDATE_PHOTO"]),
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
      }, 3000);
    },
    handleInputChange(e) {
      if (e.event) {
        this.info.bio = e.event.target.innerHTML || this.edit_user.bio;
      } else {
        const { id, value } = e.target;
        this.info[id] = value;
      }
    }
  }
};
</script>

<style scoped>
.profile {
  border: 1px solid red;
  max-width: 200px;
}
.form-group .border.border-light {
  border-color: #cdcdcd !important;
}
</style>