import Vue from 'vue';
import { mapGetters } from 'vuex';
// check if a user is authenticated or not

Vue.mixin({
  computed: {
    isAuthed() {
      return this.$store.getters.getAuth.isAuth || false;
    },
    ...mapGetters(['getAuth'])
  }
});
