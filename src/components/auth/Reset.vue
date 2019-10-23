<template>
  <component :is="layout">
    <div class="login">
      <Loading v-if="profile.loading" />
      <h1 class="bold">Welcome</h1>
      <h2>Reset Your Password</h2>
      <div class="box" v-if="!confirmed">
        <form class="p-4">
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors[0]"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="form-group">
            <label for="email">Your email</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="email"
              autocomplete="off"
            />
          </div>

          <button
            type="submit"
            @click.prevent
            @click="reset"
            class="btn rounded-pill border border-primary px-4 d-block col"
          >Reset Password</button>
          <br />Remembered your password?
          <router-link :to="`/${$i18n.locale}/login`">Login</router-link>
        </form>
      </div>
      <br />
      <div class="text-center">
        Go back
        <router-link :to="`/${$i18n.locale}`" class="p-1">Home</router-link>
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
