<template>
  <component :is="layout">
    <div class="login">
      <Loading v-if="profile.loading" />
      <h2>{{$t('register.reset')}}</h2>
      <div class="box" v-if="!confirmed">
        <form class="p-4">
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors[0]"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="my-2">{{$t('reset.message')}}</div>
          <div class="form-group">
            <label for="email">{{$t('register.email')}}</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="email"
              autocomplete="off"
            />
          </div>
          <div class="text-center">
            <button
              :disabled="!validateReset"
              type="submit"
              @click.prevent
              @click="reset"
              class="btn btn-primary rounded-pill border border-primary px-5"
            >{{$t('register.reset')}}</button>
          </div>
          <div class="col text-center">
            <br />
            {{$t('register.remember')}}
            <router-link :to="`/${$i18n.locale}/login`">{{$t('register.login')}}</router-link>
          </div>
        </form>
      </div>
      <br />
      <div class="text-center">
        {{$t('register.back')}}
        <router-link :to="`/${$i18n.locale}`" class="p-1">{{$t('register.home')}}</router-link>
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
      redirect: "",
      confirmed: false,
      spinning: true,
      done: false,
      message: null,
      password: "",
      confirmpassword: "",
      user: {
        email: ""
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
    validateReset() {
      if (!this.user.email) {
        return false;
      }
      return true;
    }
  },

  methods: {
    reset() {
      this.spinning = false;
      this.$store.dispatch("RESET_PASSWORD", this.user);
      setTimeout(() => {
        this.confirmed = true;
      }, 3000);
    }
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
