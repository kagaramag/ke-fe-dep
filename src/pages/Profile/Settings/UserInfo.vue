<template>
  <div id="user-info">
    <div>
      <h4>{{$t('userprofile.sidebar.profile.edit.info')}}</h4>
      <div
        class="alert alert-success"
        v-show="fetch_user && fetch_user.message"
      >{{fetch_user.message}}</div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="hidden">
            <form method="post">
              <div class="form-group">
                <label for="firstName">{{$t('userprofile.sidebar.profile.edit.first_name')}}</label>
                <input
                  type="text"
                  :value="edit_user.firstName"
                  class="form-control"
                  id="firstName"
                  autocomplete="off"
                  @input="handleInputChange"
                />
              </div>
              <div class="form-group">
                <label for="lastName">{{$t('userprofile.sidebar.profile.edit.last_name')}}</label>
                <input
                  type="text"
                  :value="edit_user.lastName"
                  class="form-control"
                  id="lastName"
                  autocomplete="off"
                  @input="handleInputChange"
                />
              </div>
              <div class="form-group">
                <label for="bio">{{$t('userprofile.sidebar.profile.edit.bio')}}</label>
                <div class="border border-light p-3">
                  <medium-editor
                    :text="edit_user.bio"
                    :options="options"
                    custom-tag="div"
                    id="bio"
                    v-on:edit="handleInputChange"
                  />
                </div>
                <div style="color:#989898">{{$t('settings.account.form.bio.notice')}}</div>
              </div>
              <!-- @submit.prevent="updateUser" -->
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
        </div>
        <div
          v-show="fetch_user && fetch_user.error"
          class="border border-danger"
        >{{fetch_user.error}}</div>
      </div>
    </div>
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
          buttons: ["bold", "italic", "underline", "h2", "h3"]
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
    ...mapActions(["UPDATE_PROFILE"]),
    applyOptions(ev) {
      try {
        this.options = JSON.parse(ev.target.value);
        this.optionsValid = true;
      } catch (e) {
        this.optionsValid = false;
      }
    },
    applyTextEdit(ev) {
      if (ev.event.target) {
        this.info.bio = ev.event.target.innerHTML || this.edit_user.bio;
      }
    },
    updateUser() {
      this.$toast.open({
        message: "Loading...",
        type: "warning"
      });
      const formData = {
        firstName: this.info.firstName || this.edit_user.firstName,
        lastName: this.info.lastName || this.edit_user.lastName,
        bio: this.info.bio || this.edit_user.bio
      };
      this.UPDATE_PROFILE(formData);
      this.profileUpdated = true;
      setTimeout(() => {
        this.profileUpdated = false;
      }, 2000);
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