<template>
  <div>
    <nav class="navbar bg-primary sticky-top m-0 p-0 navbar-expand-lg">
      <div class="container my-0">
        <router-link class="navbar-brand" :to="'/'">
          <img src="@/assets/images/logo_XII.svg" />
        </router-link>

        <div class="nav-menu float-right">
          <ul>
            <li><router-link :to="'/'">Home</router-link></li>
            <li><router-link :to="'/tutors'">Tutors</router-link></li>
            <li><router-link :to="'/mentors'">Mentors</router-link></li>
            <li><router-link :to="'/training'">Training</router-link></li>
            <li><router-link :to="'/codingclass'">Coding Class</router-link></li>
            <li><router-link :to="'/blog'">Blog</router-link></li>
            <li><router-link class="btn btn-light text-primary shadow rounded px-4" :to="'/tutors/apply'">Apply</router-link></li>
            <li><router-link :to="'/contact'">Contact</router-link></li>
          </ul>
          <span>
            <button
              ref="button"
              class="toggle-button border-0 px-2 mx-2 text-secondary d-lg-none"
              style="font-size:25px"
              @click="OpenNavBar()"
            >
              <icon class="icon" icon="bars" />
            </button>
          </span>
        </div>
        <button
          ref="button"
          class="toggle-button border-0 p-1 mx-2 bg-transparent text-white d-lg-none"
          style="font-size:25px"
          @click="OpenNavBar()"
        >
          <icon class="icon" icon="bars" />
        </button>
        <!-- <div class="collapse navbar-collapse">
          <ul class="navbar-nav main-nav float-right mt-2 pt-2 mt-lg-0 ml-4">
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/codingclass'">Coding Class</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/tutoring'">Tutoring</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/mentoring'">Mentoring</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/training'">Training</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/blog'">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" :to="'/contact'">Contact</router-link>
            </li>
          </ul>
          <div class="float-right"></div>
        </div>-->
      </div>
    </nav>
    <!-- <div class="grab-nav-bar" v-if="showPopup">
      <button
        class="border-0 p-1 mx-2 bg-transparent text-white d-lg-none"
        style="font-size:25px"
        @click="CloseNavBar()"
      >
        <icon class="icon" icon="times" />
      </button>
      <div class="nav-bar mx-auto">
        <ul class="list-group text-center list-group-flush">
          <li class="list-group-item">
            <router-link class="text-white" :to="'/'">Home</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/codingclass'">Coding Class</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/tutoring'">Tutoring</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/mentoring'">Mentoring</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/training'">Training</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/blog'">Blog</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="text-white" :to="'/contact'">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["maxHeader"],
  data() {
    return {
      showPopup: false
    };
  },
  created() {
    document.documentElement.style.overflow = "auto";
  },
  computed: {
    profile() {
      return JSON.parse(localStorage.getItem("user")) || null;
    },
    ...mapGetters(["auth"])
  },
  methods: {
    CloseNavBar() {
      this.showPopup = false;
      document.documentElement.style.overflow = "auto";
    },
    OpenNavBar() {
      this.showPopup = true;
      document.documentElement.style.overflow = "hidden";
      return;
    }
  }
};
</script>

<style scoped>
.nav-menu ul {
  display: inline;
}
.nav-menu ul li {
  display: inline;
  padding: 10px;
}
.nav-menu ul li:last-child {
  padding-right:0;
}
.nav-menu a {
  color: #fdfdfd;
  padding: 10px auto;
}


@media only screen and (max-width: 991px) {
  .navbar-brand {
    margin-left: 10px !important;
  }
}
.nav-bar {
  position: relative;
  margin-top: 60px;
  max-width: 450px;
}
.nav-bar .list-group li {
  background: none !important;
}
</style>
