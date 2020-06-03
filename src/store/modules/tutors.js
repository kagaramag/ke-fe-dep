import FirebaseHelper from "@/helpers/FirebaseHelper";

export default {
  state: {
    get_tutors: {
      tutors: [],
      loading: false,
      success: false,
    },
    get_tutor: {
      tutor: {},
      loading: false,
      success: false,
    },
  },
  getters: {
    get_tutors(state) {
      return state.get_tutors;
    },
    get_tutor(state) {
      return state.get_tutor;
    },
    create_tutor(state) {
      return state.create_tutor;
    }
  },

  mutations: {
    LOADING_TUTORS(state) {
      state.get_tutors.tutors = [];
      state.get_tutors.loading = true;
      state.get_tutors.success = false;
    },
    FETCH_TUTORS_SUCCESS(state, payload) {
      state.get_tutors.tutors = payload;
      state.get_tutors.loading = false;
      state.get_tutors.success = true;
    },
    FETCH_TUTORS_FAILURE(state) {
      state.get_tutors.tutors = [];
      state.get_tutors.loading = false;
      state.get_tutors.success = false;
    },
    LOADING_TUTOR(state) {
      state.get_tutor.tutor = {};
      state.get_tutor.loading = true;
      state.get_tutor.success = false;
    },
    RESET_TUTOR(state) {
      state.get_tutor.tutor = {};
      state.get_tutor.loading = false;
      state.get_tutor.success = false;
    },
    FETCH_TUTOR_SUCCESS(state, payload) {
      state.get_tutor.tutor = payload;
      state.get_tutor.loading = false;
      state.get_tutor.success = true;
    },
    FETCH_TUTOR_FAILURE(state) {
      state.get_tutor.tutor = {};
      state.get_tutor.loading = false;
      state.get_tutor.success = false;
    },
  },
  actions: {
    fetchTutors: (context) => {
      context.commit("LOADING_TUTORS");
      FirebaseHelper.get(`/tutors`)
      .then(response => {
        context.commit("FETCH_TUTORS_SUCCESS", response);
      })
      .catch(error => {
        context.commit("FETCH_TUTORS_FAILURE", error);
      });
    },
    fetchTutor: (context, payload) => {
      context.commit("LOADING_TUTOR");
      FirebaseHelper.getOne("/tutors", payload)
      .then(response => {
        context.commit("FETCH_TUTOR_SUCCESS", response);
      })
      .catch(error => {
        context.commit("FETCH_TUTOR_FAILURE", error);
      });
    },
    resetTutor: context => {
      context.commit("RESET_TUTOR");
    },
  }
};
