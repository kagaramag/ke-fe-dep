import AxiosHelper from '@/helpers/AxiosHelper'
/* eslint-disable space-before-function-paren */
export default {
  // initial state
  state: {
    get_posts: [],
    errors: {},
    success: false
  },
  // getters
  getters: {
    get_posts(state) {
      return state.get_posts;
    },
    errors(state) {
      return state.errors;
    }
  },

  // mutations
  mutations: {
    GET_BLOGS(state, payload) {
      state.get_posts = "";
      state.get_posts = payload;
    },
    POST_BLOG_FAILURE(state, payload) {
      state.errors = [payload, ...state.errors];
    }
  },

  // actions
  actions: {
    GET_BLOG_POSTS: context => {
      AxiosHelper.get("/articles?limit=20")
        .then(response => context.commit("GET_BLOGS", response.data.articles))
        .catch(error =>
          context.commit("GET_BLOG_FAILURE", error.response.data)
        );
    }
  }
};
