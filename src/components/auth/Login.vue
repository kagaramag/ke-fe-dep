<template>
  <component :is="layout">
    <div class="login">
      <Loading v-if="profile.loading" />
      <h2>{{$t('login.message')}}</h2>
      <div class="box">
        <form class="p-4">
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors[0]"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="form-group">
            <label for="email">{{$t('login.email')}}</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="email"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="password">{{$t('login.password')}}</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
          </div>
          <div class="text-center">
            <button
              type="submit"
              @click.prevent
              @click="login"
              class="btn btn-primary rounded-pill border border-primary px-5"
            >{{$t('login.button')}}</button>
          </div>
          <div class="col text-center">
            <br />
            {{$t('login.question')}}
            <router-link :to="`/${$i18n.locale}/register`">{{$t('login.register')}}</router-link>
            <br />
            <router-link :to="`/${$i18n.locale}/reset`">{{$t('login.reset')}}</router-link>
          </div>
        </form>
      </div>
      <br />
      <div class="text-center">
        {{$t('login.back')}}
        <router-link :to="`/${$i18n.locale}`" class="p-1">{{$t('login.home')}}</router-link>
      </div>
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
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
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
    validateLogin() {
      if (!this.user.email || !this.user.password) {
        return false;
      }
      return true;
    }
  },
  methods: {
    login() {
      this.LOGIN_USER(this.user);
    },
    ...mapActions(["LOGIN_USER"])
  }
};
</script>

<style scoped>
.login h1 {
  text-align: center;
  padding: 20px 0;
}
.login h2 {
  text-align: center;
  font-weight: 100;
}
.login {
  margin-bottom: 50px;
}
.alert {
  width: 100%;
}
</style>
