<template>
  <component :is="layout">
  <div class="login">
    <Loading v-if="profile.loading" />
    <h1 class="bold">Welcome</h1>
    <h2>Sign in to continue...</h2>
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
          <label for="email">Your email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            id="email"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="user.password" id="password" />
        </div>
        <button type="submit" @click.prevent @click="login" class="btn btn-primary">Login</button>
        Haven't account yet?
        <router-link :to="'/register'">Register</router-link>
      </form>
    </div>
    <br />
    <div class="text-center">
      Go back
      <router-link :to="'/'" class="p-1">Home</router-link>
    </div>
  </div>
  </component>
</template>

<script>
import Loading from "./../commons/Loading";
import { mapActions, mapGetters } from "vuex";
const minima_layout = "minima";
export default {
  components : {
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
  font-weight: 100
}
.login {
 margin-bottom:50px
}
.alert {
  width: 100%;
}
</style>