<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
      <div class="box">
        <form class="p-4">
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
            <label for="language">{{$t('identity.language')}}</label>
            <input
              type="text"
              class="form-control"
              v-model="user.language"
              id="language"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="experience">{{$t('identity.experience')}}</label>
            <input
              type="text"
              class="form-control"
              v-model="user.experience"
              id="experience"
              autocomplete="off"
            />
          </div>

          <div class="form-group">
            <b-form-file single :placeholder="user.bulletin" :file-name-formatter="getBULL"></b-form-file>
          </div>
          <div class="form-group">
            <b-form-file single :placeholder="user.id" :file-name-formatter="getID"></b-form-file>
          </div>
          <div class="form-group">
            <b-form-file single :placeholder="user.cv" :file-name-formatter="getCV"></b-form-file>
          </div>

          <div class="form-group">
            <b-form-file single :placeholder="user.diploma" :file-name-formatter="getDIP"></b-form-file>
          </div>

          <button
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
export default {
  components: {
    Loading
  },
  name: "register",
  data() {
    return {
      images: {},
      user: {
        language: "",
        experience: "",
        bulletin: this.$t("identity.bulletin"),
        id: this.$t("identity.id"),
        cv: this.$t("identity.cv"),
        diploma: this.$t("identity.diploma")
      }
    };
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile;
    },
    documents() {}
  },
  methods: {
    getBULL(file) {
      if (file) {
        this.images[0] = file;
        this.user.bulletin = file.name;
        return file[0].name;
      }
    },
    getID(file) {
      if (file) {
        this.images[1] = file;
        this.user.id = file.name;
        return file[0].name;
      }
    },
    getDIP(file) {
      if (file) {
        this.images[2] = file;
        this.user.diploma = file.name;
        return file[0].name;
      }
    },

    getCV(file) {
      if (file) {
        this.images[3] = file;
        this.user.cv = file.name;
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
      return this.UPLOAD_DOCUMENTS(formData);
    },
    ...mapActions(["UPLOAD_DOCUMENTS"])
  }
};
</script>

<style scoped>
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
