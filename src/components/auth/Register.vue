<template>
  <component :is="layout">
    <div class="register">
      <h2>{{$t('register.message')}}</h2>
      <div class="box">
        <div class="px-4">
          <div class="row" v-if="register_user && register_user.errors">
            <div
              class="alert alert-danger"
              v-for="error in register_user.errors"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="row" v-if="register_user && register_user.message">
            <div class="alert alert-success">
              {{register_user.message}}.
              <br />
              <router-link :to="`/${$i18n.locale}/login`">{{$t('register.here')}}</router-link>
              {{' '}} {{$t('register.loginn')}}
            </div>
          </div>
        </div>
        <form class="px-4" v-if="register_user && !register_user.success">
          <div class="row">
            <div class="form-group col col-sm-12 col-md-6 col-lg-6">
              <label for="firstname">{{$t('register.firstname')}}</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.user.firstName.$model"
                id="firstname"
                autocomplete="off"
              />
              <div class="error py-2" v-if="!$v.user.firstName.required">First name is required</div>
              <div
                class="error py-2"
                v-if="!$v.user.firstName.minLength"
              >First name must have at least {{$v.user.firstName.$params.minLength.min}} letters.</div>
              <div
                class="error py-2"
                v-if="!$v.user.firstName.maxLength"
              >Last name must not have more than {{$v.user.firstName.$params.maxLength.max}} letters.</div>
            </div>
            <div class="form-group col col-sm-12 col-md-6 col-lg-6">
              <label for="lastname">{{$t('register.lastname')}}</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.user.lastName.$model"
                id="lastname"
                autocomplete="off"
              />
              <div class="error py-2" v-if="!$v.user.lastName.required">Last name is required</div>
              <div
                class="error py-2"
                v-if="!$v.user.lastName.minLength"
              >Last name must have at least {{$v.user.lastName.$params.minLength.min}} letters.</div>
              <div
                class="error py-2"
                v-if="!$v.user.lastName.maxLength"
              >Last name must not have more than {{$v.user.lastName.$params.maxLength.max}} letters.</div>
            </div>
          </div>
          <div class="row">
            <div class="mx-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="male"
                  v-model="user.gender"
                  @change="$v.user.gender.$touch()"
                  value="male"
                />
                <label class="form-check-label" for="male">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="female"
                  v-model="user.gender"
                  value="female"
                />
                <label class="form-check-label" for="female">Female</label>
              </div>
            </div>
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
            <div class="error py-2" v-if="!$v.user.email.required">Email is required</div>
            <div class="error py-2" v-if="!$v.user.email.email">Enter a valid email</div>
          </div>
          <div class="form-group">
            <label for="password">{{$t('register.password')}}</label>
            <input type="password" class="form-control" v-model="user.password" id="password" />
            <div class="error py-2" v-if="!$v.user.password.required">Password is required</div>
            <div
              class="error py-2"
              v-if="!$v.user.password.minLength"
            >Password must have at least {{$v.user.password.$params.minLength.min}} characters.</div>
            <div
              class="error py-2"
              v-if="!$v.user.password.maxLength"
            >Password must not have more than {{$v.user.password.$params.maxLength.max}} characters.</div>
          </div>
          <div class="form-check mb-1">
            <input type="checkbox" v-model="terms" name="terms" class="form-check-input" id="terms" />
            <label
              class="form-check-label"
              for="terms"
            >{{$t('register.terms.title')}} {{$t('register.terms.agreement')}}, {{$t('register.terms.terms')}} {{$t('register.terms.and')}} {{$t('register.terms.privacy')}}</label>
          </div>
          <div class="text-center">
            <button
              type="submit"
              @click.prevent
              @click="register"
              :disabled="!validateRegister ? true : false"
              class="btn btn-primary rounded px-5"
            >{{$t('register.button')}}</button>
          </div>
          <div
            class="mt-2 alert alert-success text-center"
            v-if="register_user && register_user.loading && !register_user.success"
          >Wait! We are registering you...</div>
          <br />
          <div class="col text-center">
            {{$t('register.question')}}
            <router-link :to="`/${$i18n.locale}/login`">{{$t('register.login')}}</router-link>
          </div>
        </form>
      </div>
      <div class="text-center">
        {{$t('register.back')}}
        <router-link :to="`/${$i18n.locale}`">{{$t('register.home')}}</router-link>
      </div>
    </div>
  </component>
</template>

<script>
import Vue from "vue";
// import Loading from "@/commons/Loading";
import { mapActions, mapGetters } from "vuex";
import {
  required,
  minLength,
  maxLength,
  between,
  email,
  helpers
} from "vuelidate/lib/validators";
const { validationMixin, default: Vuelidate } = require("vuelidate");
Vue.use(Vuelidate);
const alpha = helpers.regex("alpha", /^[a-zA-Z]*$/);

const minima_layout = "minima";
export default {
  components: {
    // Loading
  },
  name: "register",
  data() {
    return {
      loaded: false,
      accountType: "",
      terms: false,
      user: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        gender: ""
      },
      role: 0
    };
  },
  created() {
    this.RESET_REGISTER();
    switch (this.$route.params.type) {
      case "tutor":
        this.role = 3;
        break;
      case "parent":
        this.role = 4;
        break;
      case "learner":
        this.role = 5;
        break;
      default:
        this.$router.push("/en/404");
        break;
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    },
    register_user() {
      return this.$store.getters.register_user;
    },
    ...mapGetters(["register_user"]),
    validateRegister() {
      if (
        !this.user.firstName ||
        !this.user.lastName ||
        !this.user.email ||
        !this.user.password ||
        !this.user.gender ||
        !this.terms
      ) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    register() {
      let user = {};
      user = this.user;
      user = {
        ...user,
        role: this.role
      };
      this.REGISTER_USER(user);
    },
    ...mapActions(["REGISTER_USER", "RESET_REGISTER"])
  },
  // validation
  validations: {
    user: {
      firstName: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(45)
      },
      lastName: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(45)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(22)
      }
    }
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
  font-weight: 100 !important;
}

.register {
  margin-bottom: 50px;
}

.alert {
  width: 100%;
}

.type-card {
  border: 1px solid #dfdfdf;
  border-radius: 3px !important;
  background: #ffffff;
  cursor: pointer;
}

.is-selected {
  border: 1px solid #989898;
  background: #304894;
  color: #ffffff;
}
</style>
