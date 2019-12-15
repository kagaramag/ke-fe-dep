<template>
  <nav class="navbar sticky-top bg-primary m-0 p-0 navbar-expand-lg navbar-light">
    <div class="container my-0">
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
        <ul class="navbar-nav main-nav mr-auto mt-2 pt-2 mt-lg-0 ml-4 right">
          <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}`">{{$t('header.home')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}/tutors`">{{$t('header.tutors')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}/blog`">{{$t('header.blog')}}</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="`/${$i18n.locale}/faqs`">{{$t('header.faqs')}}</router-link>
          </li> -->
        </ul>
        <ul class="navbar-nav right" v-if="auth && auth.isAuth">
          <div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <span v-if="profile">
                  <router-link class="text-white" :to="`/${$i18n.locale}/dashboard/${type}`">
                    {{profile.firstName | truncate(10)}}
                    <img :src="profile.image ? profile.image : avatar" class="bg-light rounded-circle ui-w-30 profile mt-2 mx-auto" :alt="profile.firstName" />
                  </router-link>
                </span>
              </li>
            </ul>
          </div>
        </ul>

        <ul class="navbar-nav right" v-if="auth.isAuth === false || !profile">
          <li class="nav-item">
            <router-link
              class="btn rounded btn-light text-primary px-4 mr-3"
              :to="`/${$i18n.locale}/login`"
            >{{$t('home.login')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="btn rounded btn-light text-primary px-4"
              :to="`/${$i18n.locale}/register`"
            >{{$t('home.register')}}</router-link>
          </li>
        </ul>
        <div class="float-right"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    auth() {
      return JSON.parse(localStorage.getItem("auth")) || null;
    },
    profile() {
      return JSON.parse(localStorage.getItem("user")) || null;
    },
    ...mapGetters(["auth"])
  }
};
</script>

<style scoped>
.bg-primary.text-light {
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
.navbar-nav.main-nav a {
  color: #ffffff !important;
  transition: 0.3s;
  font-weight: 300;
}
.navbar-nav.main-nav .nav-item {
  padding-left: 5px !important;
  padding-right: 5px !important;
  position: relative;
}

.navbar-nav.main-nav li:before {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  top: 8px;
  left: 0;
  content: "";
  width: 1px;
  height: 26px;
}

.navbar-nav.main-nav li:nth-child(1):before {
  background: none;
}
</style>
