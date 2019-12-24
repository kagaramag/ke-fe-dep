<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
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
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
          </div>

          <div class="form-group">
            <label for="password">Confirm password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.confirmpassword"
              id="password"
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              @click.prevent
              @click="reset"
              class="btn btn-primary rounded border border-primary px-5"
            >Confirm &amp; Save</button>
          </div>
        </form>
      </div>
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
  components: {
    Loading
  },
  name: "register",
  data() {
    return {
      user: {
        password: "",
        confirmpassword: ""
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
      this.CONFIRM_PASSWORD(this.user);
    },
    ...mapActions(["CONFIRM_PASSWORD"])
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
