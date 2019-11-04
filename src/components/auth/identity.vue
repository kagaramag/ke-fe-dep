<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
      <div class="box">
        <form class="p-4" @submit.prevent>
          <h1 class="bold">{{$t('identity.title')}}</h1>
          <h2>{{$t('identity.message')}}</h2>
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="row" v-if="profile && profile.message">
            <div class="alert alert-success">
              {{profile.message}}.
              <br />
              <router-link :to="`/${$i18n.locale}/login`">{{$t('register.here')}}</router-link>
              {{' '}} {{$t('register.loginn')}}
            </div>
          </div>

          <div class="form-group">
            <b-form-select v-model="user.language" :options="options" size="sm" class="mt-3"></b-form-select>
          </div>
          <div class="form-group">
            <input
              :placeholder="`${$t('identity.experience')}`"
              type="text"
              class="form-control"
              v-model="user.experience"
              id="experience"
              autocomplete="off"
            />
          </div>

          <div class="form-group">
            <label class="error" v-if="error.bulletin5">{{error.bulletin5}}</label>

            <b-form-file single :placeholder="user.bulletin5" :file-name-formatter="getFiveReport"></b-form-file>
          </div>
          <div class="form-group">
            <label class="error" v-if="error.bulletin6">{{error.bulletin6}}</label>
            <b-form-file single :placeholder="user.bulletin6" :file-name-formatter="getSixReport"></b-form-file>
          </div>
          <div class="form-group">
            <label class="error" v-if="error.bulletinid">{{error.id}}</label>
            <b-form-file single :placeholder="user.id" :file-name-formatter="getID"></b-form-file>
          </div>
          <div class="form-group">
            <label class="error" v-if="error.cv">{{error.cv}}</label>
            <b-form-file single :placeholder="user.cv" :file-name-formatter="getCV"></b-form-file>
          </div>

          <div class="form-group">
            <label class="error" v-if="error.diploma">{{error.diploma}}</label>
            <b-form-file single :placeholder="user.diploma" :file-name-formatter="getDIP"></b-form-file>
          </div>

          <button
            :disabled="!validateIdentity"
            type="submit"
            @click.prevent
            @click="upload"
            class="btn rounded-pill border border-primary px-4 d-block col"
          >{{$t('identity.button')}}</button>
        </form>
      </div>
      <br />
    </div>
  </component>
</template>

<script>
import Loading from "./../commons/Loading";
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

const minima_layout = "minima";
const possibleFiles = [
  "image/png",
  "image/jpeg",
  "image/jpeg",
  "application/pdf"
];
export default {
  components: {
    Loading
  },
  name: "identity",
  data() {
    return {
      images: {},
      options: [
        { value: null, text: this.$t("identity.language") },
        { value: "Kinyarwanda", text: "Kinyarwanda" },
        { value: "English", text: "English" },
        { value: "French", text: "French" },
        { value: "Kinyarwanda, French", text: "Kinyarwanda, French" },
        { value: "Kinyarwanda, English", text: "Kinyarwanda, English" },
        {
          value: "Kinyarwanda, French, English",
          text: "Kinyarwanda, French, English"
        },
        { value: "French,English", text: "French, English" }
      ],
      error: {
        bulletin5: "",
        bulletin6: "",
        id: "",
        cv: "",
        diploma: ""
      },
      user: {
        language: null,
        experience: "",
        bulletin5: this.$t("identity.bulletin5"),
        bulletin6: this.$t("identity.bulletin6"),
        id: this.$t("identity.id"),
        cv: this.$t("identity.cv"),
        diploma: this.$t("identity.diploma")
      }
    };
  },

  created() {
    // this.$store.dispatch("FETCH_DOCUMENTS");
  },

  computed: {
    validateIdentity() {
      if (!this.user.language || !this.user.experience) {
        return false;
      }
      return true;
    },
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile;
    },
    documents() {}
  },
  methods: {
    validateUploads(file, document) {
      if (possibleFiles.includes(file.type)) {
        this.error[document] = "";
      } else {
        this.error[document] = "file format not supported";
      }
    },

    getFiveReport(file) {
      if (file) {
        this.images[0] = file;
        this.user.bulletin = file.name;
        this.validateUploads(file[0], "bulletin5");
        return file[0].name;
      }
    },
    getSixReport(file) {
      if (file) {
        this.images[1] = file;
        this.user.bulletin = file.name;
        this.validateUploads(file[0], "bulletin6");
        return file[0].name;
      }
    },
    getID(file) {
      if (file) {
        this.images[2] = file;
        this.user.id = file.name;
        this.validateUploads(file[0], "id");
        return file[0].name;
      }
    },
    getDIP(file) {
      if (file) {
        this.images[3] = file;
        this.user.diploma = file.name;
        this.validateUploads(file[0], "diploma");
        return file[0].name;
      }
    },

    getCV(file) {
      if (file) {
        this.images[4] = file;
        this.user.cv = file.name;
        this.validateUploads(file[0], "cv");
        return file[0].name;
      }
    },

    async upload() {
      let data = [];
      const formData = new FormData();
      for (let i in this.images) {
        data = [...this.images[i], ...data];
      }
      for (let j in data) {
        formData.append("doc", data[j]);
      }
      formData.append("language", this.user.language);
      formData.append("experience", this.user.experience);
      return this.$store.dispatch("UPLOAD_DOCUMENTS", formData);
    }
    // ...mapActions(["UPLOAD_DOCUMENTS"])
  }
};
</script>

<style scoped>
.error {
  color: brown;
}
.register h1 {
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
}
.register h2 {
  text-align: center;
  font-size: 14px;
  font-weight: 300;
}
.register {
  margin-bottom: 50px;
}
.alert {
  width: 100%;
}
</style>
