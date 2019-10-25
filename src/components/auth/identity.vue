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
            <label for="bulletin">{{$t('identity.bulletin')}}</label>
            <b-form-file
              single
              :placeholder="`${$t('identity.image')}`"
              :drop-placeholder="`${$t('identity.drop')}`"
              :browse-text="`${$t('identity.imagebrowse')}`"
            ></b-form-file>
          </div>
          <div class="form-group">
            <label for="passport">{{$t('identity.passport')}}</label>
            <b-form-file
              single
              :placeholder="`${$t('identity.image')}`"
              :drop-placeholder="`${$t('identity.drop')}`"
              :browse-text="`${$t('identity.imagebrowse')}`"
            ></b-form-file>
          </div>
          <div class="form-group">
            <label for="cv">{{$t('identity.cv')}}</label>
            <b-form-file
              single
              :placeholder="`${$t('identity.image')}`"
              :drop-placeholder="`${$t('identity.drop')}`"
              :browse-text="`${$t('identity.imagebrowse')}`"
            ></b-form-file>
          </div>
          <div class="form-group">
            <label for="diploma">{{$t('identity.diploma')}}</label>
            <b-form-file
              single
              :placeholder="`${$t('identity.image')}`"
              :drop-placeholder="`${$t('identity.drop')}`"
              :browse-text="`${$t('identity.imagebrowse')}`"
            ></b-form-file>
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
const minima_layout = "minima";
export default {
  components: {
    Loading
  },
  name: "register",
  data() {
    return {
      user: {
        language: "",
        experience: "",
        bulletin: "",
        passport: "",
        cv: "",
        diploma: ""
      }
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile;
    }
  },
  methods: {
    register() {
      this.REGISTER_USER(this.user);
    },
    ...mapActions(["REGISTER_USER"])
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
