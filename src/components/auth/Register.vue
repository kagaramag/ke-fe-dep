<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
      <div class="box">
        <form class="p-4">
          <h1 class="bold">Welcome</h1>
          <h2>Register to continue...</h2>
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
              <router-link :to="`/${$i18n.locale}/login`">Click here</router-link>
              {{' '}} to login
            </div>
          </div>
          <div class="form-group">
            <label for="firstname">Your first name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.firstName"
              id="firstname"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="lastname">Your last name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.lastName"
              id="lastname"
              autocomplete="off"
            />
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
          <button
            type="submit"
            @click.prevent
            @click="register"
            class="btn rounded-pill border border-primary px-4 d-block col"
          >Register</button>
          <br />Already have account?
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
  name: "register",
  data() {
    return {
      user: {
        lastName: "",
        firstName: "",
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
    register() {
      this.REGISTER_USER(this.user);
    },
    ...mapActions(["REGISTER_USER"])
  }
};
</script>

<style scoped>
.register h1 {
  text-align: center;
  padding: 20px 0;
}
.register h2 {
  text-align: center;
  font-weight: 100;
}
.register {
  margin-bottom: 50px;
}
.alert {
  width: 100%;
}
</style>
