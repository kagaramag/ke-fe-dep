<template>
  <div id="Tips">
    <!-- HOW TO HIRE ME -->
    <div
      v-if="
        profile.isLoggedIn
        && profile.user.role === 'parent'
        && profile.user.id === fetch_user.user.id
        "
      class="alert alert-success"
      role="alert"
    >
      <h4 class="alert-heading">How to hire a tutor?</h4>
      <p>
        Aww yeah, we understand that your children deserve the best tutors. We have made it easy for you to find the most competent tutors wherever you are.
        For more information,
        <router-link :to="`/${$i18n.locale}`">Check here</router-link>the process and criteria to admin tutors on our website and
        <router-link :to="`/${$i18n.locale}`">here</router-link>for tips to hire a tutor you really need.
      </p>
      <hr />
      <div>
        <router-link
          :to="`/${$i18n.locale}`/tutors"
          class="btn btn-light border border-success rounded-pillfloat-right"
        >Find Tutor</router-link>
      </div>
      <div class="clear"></div>
    </div>
    <!-- COMPLETE PROFILE -->
    <div
      v-if="
        profile.isLoggedIn
        && profile.user.role === 'tutor'
        && profile.user.id === fetch_user.user.id
        "
    >
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">{{$t('userprofile.notification.title')}}</h4>
        <p>{{$t('userprofile.notification.content')}}</p>
        <hr />
        <div>
          <router-link
            class="btn btn-light border border-success rounded-pill"
            :to="`/profile/${profile.user.username}/edit`"
          >{{$t('userprofile.notification.button')}}</router-link>
        </div>
        <div class="clear"></div>
      </div>
      <br />
      <div class="divider mb-4"></div>
    </div>

    <!-- BIO -->
    <div class="alert alert-light shadow-1 mb-3 py-3" role="alert">
      <h4 class="alert-heading">{{$t('userprofile.bio.title')}}</h4>
      <icon class="icon float-left" style="font-size: 1.3em;" icon="quote-left" />
      &nbsp;
      {{fetch_user && fetch_user.user.bio || `${$t('userprofile.bio.notification')}`}}
      <div class="clear"></div>
    </div>
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
const account_layout = "account";
export default {
  name: "Tips",
  props: ["profile", "fetch_user"]
};
</script>
