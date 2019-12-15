import AxiosHelper from "@/helpers/AxiosHelper";
import store from "@/store";
import router from "@/router";
import i18n from "../../i18n";

export default {
  // initial state
  state: {
    auth: {
      token: localStorage.token || "",
      isAuth: localStorage.isAuth || false
    },
    profile: {
      user: {},
      errors: {},
      message: "",
      isLoggedIn: false,
      loading: false
    },
    fetch_user: {
      user: {},
      education: {},
      location: {},
      kids: {},
      legal: {},
      articles: [],
      errors: {},
      message: "",
      loading: false
    },
    edit_user: {
      user: {},
      errors: {},
      message: "",
      loading: false
    },
    fetch_tutors: {
      tutors: [],
      errors: {},
      message: "",
      loading: false
    },
    register_user: {
      user: {},
      errors: {},
      message: "",
      loading: false,
      success: false
    }
  },
  // getters
  getters: {
    register_user(state) {
      return state.register_user;
    },
    edit_user(state) {
      state.edit_user.user = state.fetch_user.user;
    },
    profile(state) {
      return state.profile;
    },
    fetch_user(state) {
      return state.fetch_user;
    },
    fetch_tutors(state) {
      return state.fetch_tutors.tutors;
    },
    auth(state) {
      return state.auth;
    }
  },

  // mutations
  mutations: {
    RESET_ERROR(state) {
      state.profile.errors = {};
    },
    RESET_REGISTER(state) {
      state.register_user = {
        user: {},
        errors: {},
        message: "",
        loading: false,
        success: false
      };
    },
    SITE_LOADING(state, payload) {
      state.profile.loading = payload;
    },
    REGISTER_USER_LOADING(state, payload) {
      state.register_user = {
        user: {},
        errors: {},
        message: "",
        loading: true,
        success: false
      };
    },
    GET_PROFILE(state) {
      state.profile = {
        ...state.profile,
        loading: false
      };
      state.profile.user = JSON.stringify(localStorage.user);
      state.profile.isLoggedIn = JSON.parse(localStorage.isAuth);
    },
    REGISTER_USER_SUCCESS(state, payload) {
      state.register_user.user = payload.user;
      state.register_user.loading = false;
      state.register_user.success = true;
      state.register_user.errors = {};
      state.register_user.message = payload.message;
    },
    REGISTER_USER_FAILURE(state, payload) {
      state.register_user.errors = payload;
      state.register_user.loading = false;
      state.register_user.success = false;
    },
    UPDATE_USER_SUCCESS(state, payload) {
      state.profile.isLoggedIn = true;
      state.profile.loading = false;
      state.profile.user = { ...state.profile, ...payload.user };
      localStorage.user = JSON.stringify(payload.user);
    },
    LOGIN_USER_SUCCESS(state, payload) {
      state.profile.isLoggedIn = true;
      state.profile.loading = false;
      state.profile.user = { ...state.profile, ...payload.user };
      localStorage.user = JSON.stringify(payload.user);
      localStorage.isAuth = true;
      localStorage.token = payload.token;
      let url;
      switch (payload.user.role) {
        case "parent":
          url = `/${i18n.locale}/dashboard/p`;
          break;
        case "normal":
          url = `/${i18n.locale}/dashboard/n`;
          break;
        case "learner":
          url = `/${i18n.locale}/dashboard/l`;
          break;
        case "tutor":
          url = `/${i18n.locale}/dashboard/t`;
          break;
        case "admin":
          url = `/${i18n.locale}/dashboard/a`;
          break;
        default:
          url = `/${i18n.locale}`;
          break;
      }
      router.push(url);
    },
    LOGIN_USER_FAILURE(state, payload) {
      state.profile.loading = false;
      state.profile.errors = [payload, ...state.profile.errors];
    },
    LOGIN_USER_OUT(state) {
      state.profile = {
        user: {},
        errors: {},
        loading: false,
        message: "",
        isLoggedIn: false
      };
      localStorage.user = null;
      localStorage.isAuth = false;
      localStorage.token = null;
      router.push({ path: `/${i18n.locale}/login` });
    },
    UPDATE_PROFILE(state, payload) {
      state.profile = { ...state.profile, ...payload };
    },
    UPDATE_USER(state, payload) {
      state.fetch_user.user = { ...state.fetch_user.user, ...payload };
    },

    GET_PROFILE_LOADING(state, payload) {
      state.fetch_user.loading = payload;
      state.fetch_user.education = {};
      state.fetch_user.articles = {};
      state.fetch_user.location = {};
      state.fetch_user.kids = {};
      state.fetch_user.legal = {};
    },
    FETCH_USER_SUCCESS(state, payload) {
      state.fetch_user.loading = false;
      state.fetch_user.user = payload.user;
      state.fetch_user.education = payload.education;
      state.fetch_user.articles = payload.articles;
      state.fetch_user.location = payload.location;
      state.fetch_user.kids = payload.kids;
      state.fetch_user.legal = payload.legal;
    },
    FETCH_USER_FAILURE(state, payload) {
      state.fetch_user.errors = payload;
    },
    FETCH_TUTORS_SUCCESS(state, payload) {
      state.fetch_tutors.tutors = { ...state.fetch_tutors, ...payload };
    },
    FETCH_TUTORS_FAILURE(state) {
      state.fetch_tutors.tutors = [];
    },
    UPDATE_USER_SUCCESS(state, payload) {
      state.fetch_user.user = payload.user;
      state.fetch_user.message = payload.message;
    },
    UPDATE_USER_FAILURE(state, payload) {
      state.fetch_user.message = "";
      state.fetch_user.errors = payload;
    }
  },

  // actions
  actions: {
    RESET_REGISTER: context => {
      context.commit("RESET_REGISTER");
    },
    RESET_PASSWORD: (context, payload) => {
      AxiosHelper.post(`/auth/reset`, payload)
        .then(response => {
          context.commit("FETCH_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_USER_FAILURE", error.response.data);
        });
    },

    CONFIRM_PASSWORD: (context, payload) => {
      AxiosHelper.patch(`/auth/reset/${payload.redirect}`, payload.passwords)
        .then(response => {
          context.commit("FETCH_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_USER_FAILURE", error.response.data);
        });
    },

    UPDATE_USER: (context, payload) => {
      context.commit("SITE_LOADING", true);
      AxiosHelper.put("/users", payload)
        .then(response => {
          context.commit("UPDATE_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_USER_FAILURE", error.response.data);
        });
    },

    UPDATE_PROFILE: (context, payload) => {
      context.commit("UPDATE_PROFILE");
      AxiosHelper.put("/users", payload)
        .then(response => {
          context.commit("UPDATE_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("UPDATE_USER_FAILURE", error.response.data);
        });
    },
    UPDATE_PHOTO: (context, payload) => {
      AxiosHelper.post("/upload/profile", payload)
        .then(response => {
          context.commit("FETCH_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_USER_FAILURE", error.response.data);
        });
    },

    GET_PROFILE: context => {
      context.commit("GET_PROFILE");
    },
    FETCH_USER: (context, payload) => {
      context.commit("SITE_LOADING", false);
      context.commit("GET_PROFILE_LOADING", true);
      AxiosHelper.get(`/users/username/${payload}`)
        .then(response => {
          context.commit("FETCH_USER_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_USER_FAILURE", error.response.data);
        });
    },
    REGISTER_USER: (context, payload) => {
      context.commit("REGISTER_USER_LOADING");
      AxiosHelper.post("/auth/signup", payload)
        .then(response =>
          context.commit("REGISTER_USER_SUCCESS", response.data)
        )
        .catch(error => {
          context.commit("REGISTER_USER_FAILURE", error.response.data.errors);
        });
    },
    LOGIN_USER: (context, payload) => {
      context.commit("RESET_ERROR");
      context.commit("SITE_LOADING", true);
      AxiosHelper.post("/auth/login", payload)
        .then(response => context.commit("LOGIN_USER_SUCCESS", response.data))
        .catch(error =>
          context.commit("LOGIN_USER_FAILURE", error.response.data.errors)
        );
    },
    LOGOUT_USER: context => {
      context.commit("LOGIN_USER_OUT");
    },
    // fetch tutors
    FETCH_TUTORS: context => {
      AxiosHelper.get(`/users/tutors`)
        .then(response => {
          context.commit("FETCH_TUTORS_SUCCESS", response.data);
        })
        .catch(error => {
          context.commit("FETCH_TUTORS_FAILURE", error.response.data);
        });
    }
  }
};
