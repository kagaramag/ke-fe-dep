<template>
  <div id="account">
    <component :is="layout">
      <div class="container">
        <div v-if="loaded && (fetch_user && fetch_user.loading)" class="grab-page-loading"></div>
        <div v-show="loaded && !fetch_user.loading">
          <div class="mb-3">
            <ProfileBar :data="fetch_user" />
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-3">
              <img
                src="@/assets/images/coding-class-1.jpg"
                class="img-fluid img-thumbnail rounded"
                alt="Coding Class Ads"
              />
            </div>
            <div class="col-sm-12 col-md-8 col-lg-9">
              <ProfileBio v-if="fetch_user.user.bio" :user="fetch_user.user" />
              <Legal v-if="fetch_user" :user="fetch_user" />
              <Education v-if="fetch_user.education" :education="fetch_user.education" />
              <Articles v-if="fetch_user.articles" :articles="fetch_user.articles" />
            </div>
            <!-- <Tips :fetch_user="data.fetch_user" :profile="data.profile" /> -->
            <!-- HIRE ME START -->
            <!-- <HireMe
          v-if="
          data.profile.isLoggedIn 
          && data.profile.user.role === 'parent'
          && (data.profile.user.id !== data.fetch_user.user.id)
          "
          :fetch_user="data.fetch_user"
          :profile="data.profile"
            />-->
            <!-- KIDS -->

            <!-- HIRE ME END -->
            <!-- <Education
          v-if="
          data.profile.isLoggedIn 
          && (
            data.profile.user.role === 'parent'
            || (
              data.profile.user.id === data.fetch_user.user.id
              && data.profile.user.role !== data.fetch_user.user.id
            )
          )
          "
          :fetch_user="data.fetch_user"
          :profile="data.profile"
            />-->
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
import ProfileBar from "./ProfileBar";
import ProfileBio from "./ProfileBio";
import Legal from "./Legal";
import Education from "./Education";
import Articles from "./Articles";

const default_layout = "default";
export default {
  name: "ProfilePage",
  components: {
    ProfileBar,
    ProfileBio,
    Legal,
    Education,
    Articles
  },
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.currentUsername = this.$route.params.username;
    this.FETCH_USER(this.currentUsername);
    this.loaded = true;
  },
  computed: {
    fetch_user() {
      return this.$store.getters.fetch_user;
    },
    ...mapGetters(["fetch_user"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["FETCH_USER"])
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  margin: 0;
}

.profile .bio {
  font-weight: 100;
}

.post-link {
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}

.post-link a {
  display: block;
}
</style>
