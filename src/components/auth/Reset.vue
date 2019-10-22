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
      <div class="box" v-if="confirmed">
        <b-alert variant="success" show v-if="done">Success! your password has been changed.</b-alert>
        <form class="p-4">
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors[0]"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="password" id="password" />
          </div>

          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" class="form-control" v-model="confirmpassword" id="password" />
          </div>
          <button
            type="submit"
            @click.prevent
            @click="confirm"
            class="btn rounded-pill border border-primary px-4 d-block col"
          >Confirm</button>
          <router-link :to="`/${$i18n.locale}/login`">Login</router-link>
        </form>
        <div class="text-center" v-if="spinning">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
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
      this.confirmed = false;
      this.spinning = false;
      this.$store.dispatch("RESET_PASSWORD", this.user);
      const response = this.$store.dispatch("RESET_PASSWORD", this.user);
      setTimeout(() => {
        this.confirmed = true;
      }, 3000);
    },
    async confirm() {
      this.spinning = true;
      this.redirect = localStorage.getItem("redirect");
      const response = await this.$store.dispatch("RESET_PASSWORD", this.user);

      const data = await this.$store.dispatch("CONFIRM_PASSWORD", {
        redirect: this.redirect,
        passwords: {
          passwordOne: this.password,
          passwordTwo: this.confirmpassword
        }
      });

      this.message = data;
      (this.password = ""), (this.confirmpassword = "");
      setTimeout(() => {
        this.done = true;
      }, 3000);
      this.spinning = false;
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
