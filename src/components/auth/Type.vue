<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
      <h1 class="type">{{$t('account-type.title')}}</h1>
      <div class="row" v-if="profile && profile.errors">
        <div class="alert alert-danger" v-for="error in profile.errors" :key="error.index">{{error}}</div>
      </div>
      <div class="row" v-if="profile && profile.message">
        <div class="alert alert-success">
          {{profile.message}}
          <br />
        </div>
      </div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-card
              :title="`${$t('account-type.parent.title')}`"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="cursor:pointer; max-width: 30rem; width: 13.5rem"
              class="mb-2"
              @click="goHome"
            >
              <b-card-text>{{$t('account-type.parent.message')}}</b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              :title="`${$t('account-type.tutor.title')}`"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="cursor:pointer; max-width: 30rem; width: 13.5rem"
              class="mb-2"
              @click="legalDoc"
            >
              <b-card-text>{{$t('account-type.tutor.message')}}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
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
    goHome() {
      this.$router.push(`/`);
    },
    legalDoc() {
      this.$router.push(`identity`);
    },

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
.type {
  font-size: 20px;
  font-weight: 600;
}
</style>
