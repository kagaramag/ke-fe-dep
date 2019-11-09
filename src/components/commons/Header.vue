<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary m-0 fixed-top navbar-expand-lg navbar-light">
      <div class="container">
       <router-link class="navbar-brand" :to="`/${$i18n.locale}`">
          <img src="@/assets/images/logo_XII.svg" />
        </router-link>
        <button 
          type="button" 
          data-target="#navbarSupportedContent" 
          aria-expanded="false" 
          class="navbar-toggler border-0 text-light"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <icon class="icon" icon="bars" />
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${$i18n.locale}`">{{$t('header.home')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${$i18n.locale}/tutors`">{{$t('header.tutors')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${$i18n.locale}/faqs`">{{$t('header.faqs')}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav right" v-if="loaded && profile.isLoggedIn">
            <div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <router-link class="nav-link" :to="`/${$i18n.locale}`">
                    <icon class="icon" icon="bell" />
                  </router-link>
                </li>
                <li class="list-inline-item">
                  <router-link class="nav-link" :to="`/${$i18n.locale}`">
                    <icon class="icon" icon="envelope" />
                  </router-link>
                </li>
                <li class="list-inline-item">
                  <span class="text-light">
                    <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}`">
                      {{fetch_user.user.firstName | truncate(10)}}
                      <img
                        :src="fetch_user.user.image ? fetch_user.user.image : avatar"
                        class="bg-light rounded-circle ui-w-30 profile mt-2 mx-auto"
                        :alt="fetch_user.user.firstName"
                      />
                    </router-link>
                  </span>
                </li>
              </ul>
            </div>
          </ul>

          <ul class="navbar-nav right" v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="`/${$i18n.locale}/login`">{{$t('home.login')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link rounded-pill border border-primary px-4"
                :to="`/${$i18n.locale}/register`"
              >{{$t('home.register')}}</router-link>
            </li>
          </ul>

          <div class="float-right"></div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

export default {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
    this.$store.dispatch("GET_PROFILE");
  },
  computed: {
    fetch_user() {
      return this.$store.getters.fetch_user;
    },
    ...mapGetters(["profile", "fetch_user"])
  }
};
</script>
<style scoped>
.navbar-items {
  margin: 0;
  padding: 0px;
  display: inline;
}
.navbar-items li {
  list-style-type: none;
  /* float: left; */
  text-align: center;
  display: inline-block;
}
.navbar-items li a {
  padding: 5px 15px;
  color: #ffffff;
  font-weight: bold;
}
.bg-primary.text-light {
  color: #fefefe !important;
  padding: 6px 20px;
}
.profile {
  position: relative;
  top: 4px;
  width: 30px;
}
.rounded-circle.profile {
  border: 2px solid #ffffff;
}
</style>
