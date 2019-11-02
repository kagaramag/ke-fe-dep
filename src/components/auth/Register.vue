<template>
  <component :is="layout">
    <div class="register">
      <Loading v-if="profile.loading" />
      <h2>{{$t('register.message')}}</h2>
      <div class="box">
        <form class="p-4">
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
          <h2 class="text-left my-1">{{$t('register.whoiam')}}</h2>
          <div class="row mb-4">
            <div class="clear"></div>
            <div class="col col-sm-12 col-md-6 col-lg-6"
            @click="seleteType('tutor')"
            >
              <div class="p-2 type-card" v-bind:class="{ 'is-selected': accountType === 'tutor' }">
                <h3>{{$t('register.accountType.tutor.type')}}</h3>
                <div>{{$t('register.accountType.tutor.description')}}</div>
              </div>
            </div>
            <div class="col col-sm-12 col-md-6 col-lg-6"
            @click="seleteType('parent')"
            >
              <div class="p-2 type-card" v-bind:class="{ 'is-selected': accountType === 'parent' }">
                <h3>{{$t('register.accountType.parent.type')}}</h3>
                <div>{{$t('register.accountType.parent.description')}}</div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="firstname">{{$t('register.firstname')}}</label>
            <input
              type="text"
              class="form-control"
              v-model="user.firstName"
              id="firstname"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="lastname">{{$t('register.lastname')}}</label>
            <input
              type="text"
              class="form-control"
              v-model="user.lastName"
              id="lastname"
              autocomplete="off"
            />
          </div>
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
          <div class="form-group">
            <label for="password">{{$t('register.password')}}</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
          </div>
          <div class="text-center">
            <button
              type="submit"
              @click.prevent
              @click="register"
              :disabled="!accountType ? true : false"
              class="btn rounded-pill btn-primary border border-primary px-5"
            >{{$t('register.button')}}</button>
            <br />
          </div>
          <br />
          <div class="col text-center">
            {{$t('register.question')}}
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
  name: "register",
  data() {
    return {
      accountType: '',
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
    },
    validateRegister() {
      if (
        !this.user.firstName ||
        !this.user.lastName ||
        !this.user.email ||
        !this.user.password
      ) {
        return false;
      }
      return true;
    }
  },
  methods: {
    register() {
      let user = {}
       user = this.user;
      user = {
        ...user,
        role: this.accountType === 'tutor' ? 3 : 4 
      }
      this.REGISTER_USER(user);
    },
    seleteType(accountType){
      this.accountType = accountType
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
.type-card{
  border:1px solid #dfdfdf;
  border-radius: 3px!important;
  background: #ffffff;
  cursor: pointer;
  }
.is-selected {
  border:1px solid #989898;
  background: #304894;
  color:#ffffff;
}
</style>
