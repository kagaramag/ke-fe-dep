
<template>
  <div id="profile-card" style="margin-top:72px;">
    <div class="bg-primary py-2 mb-4">
      <div class="container">
        <div class="row" style="position:relative">
          <div class="wrap-profile image">
            <img
              :src="fetch_user.user.image ? fetch_user.user.image : avatar"
              class="bg-light rounded-circle ui-w-100 profile mt-1 mx-auto shadow-3"
              :alt="fetch_user.user.firstName || ''"
            />
          </div>

          <div class="col">
            <div style="margin-left:200px">
              <h3 class="text-light" style="font-size:30px;">
                <span class="float-left">{{fetchUserInfo.user.lastName}} {{fetchUserInfo.user.firstName}}</span>
                <span v-if="!profile !== false">
                  <button
                    v-if="profile.user.role === 'parent' && (fetch_user.user.id !== profile.user.id)"
                    @click.prevent
                    @click="$bvModal.show('hirenow')"
                    class="btn btn-light border border-light mx-3 rounded-pill px-4 float-left"
                  >
                    <icon class="icon" icon="handshake" />&nbsp;&nbsp;Hire me
                  </button>
                </span>
                <span v-if="!profile !== false">
                  <router-link :to="'/'" class="btn btn-light rounded-pill px-4 float-right">
                    <icon class="icon" icon="envelope" />&nbsp;&nbsp;message
                  </router-link>
                </span>
              </h3>
              <div class="clear"></div>
              <div class="pt-3 text-light">
                <span class="mr-3 d-sm-none">
                  <icon class="icon" icon="user-circle" />&nbsp;I am a
                  <span
                    class="bg-light py-1 px-2 rounded-pill text-dark capitalize"
                  >{{fetch_user.user.UserRole.role.role}}</span>
                </span>
                <span>
                  <icon class="icon" icon="map-marker" />&nbsp;Gitega, Nyarugenge, Kigali
                </span>
                <span class="px-3">
                  <icon class="icon" icon="clock" />&nbsp;
                  <b>Joined</b>
                  {{fetch_user.user.createdAt | date}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!-- MODAL, CONNECT TUTOR TO A KID -->
    <b-modal id="hirenow" hide-footer>
      <template v-slot:modal-title>Hire a tutor</template>
      <div class="d-block">
        <div class="row">
          <div class="col m-4">
            <div
              v-show="fetched_kids && fetched_kids.length !== 0"
              class="alert alert-info"
              role="alert"
            >
              <h4
                class="alert-heading"
              >Hiring {{fetch_user.user.lastName}} {{fetch_user.user.firstName}}</h4>
              
              <p>
                Select a child and request
                <b>{{fetch_user.user.lastName}}</b>
                to tutor him/her.
                We immediately contact {{fetch_user.user.gender === 'male' ? 'him' : 'her'}} and {{fetch_user.user.gender === 'male' ? 'he' : 'she'}} will approve your request as soon as possible
              </p>
            </div>
            <div v-if="fetched_kids && fetched_kids.length">
              <div v-if="requested_tutor && requested_tutor.errors && requested_tutor.errors.tutor">
                <div class="alert alert-danger" role="alert">{{requested_tutor.errors.tutor}}</div>
              </div>
              <div v-if="requested_tutor && requested_tutor.message">
                <div class="alert alert-success" role="alert">{{requested_tutor.message}}</div>
              </div>
              <form v-if="requested_tutor && !requested_tutor.message">
                <div class="form-group">
                  <label for="school">Kids</label>
                  <b-form-select v-model="tuteeId" class="mb-3">
                    <option disabled value>Please select one</option>
                    <option
                      v-for="kid in fetched_kids"
                      :value="kid.id"
                      :key="kid.index"
                    >{{kid.names}}</option>
                  </b-form-select>
                </div>
                <button
                  type="submit"
                  @click.prevent
                  @click="request_tutor"
                  class="btn btn-primary bg-primary px-3 rounded-pill"
                >Hire now</button>
                <b-button class="btn btn-danger px-3 rounded-pill" @click="$bvModal.hide('hirenow')">Cancel</b-button>
                <div class="float-right m-1">
                  <b-spinner v-show="false"></b-spinner>
                </div>
              </form>
            </div>
            <div v-else>
              <div class="alert alert-danger" role="alert">
                <div>All your children may have tutors or you did not register children yet!</div>
              </div>
              <div class="my-3">
                <router-link
                  @click="$bvModal.hide('hirenow')"
                  :to="`/profile/${profile.user.username}/tutoring`"
                  class="btn btn-outline-dark btn-light rounded-pill my-3 px-4"
                >My Kids</router-link>
                <button
                  @click="$bvModal.hide('hirenow')"
                  class="btn btn-outline-dark btn-light rounded-pill my-3 px-4"
                >Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import fetchUserInfo from '@/mixins/fetchUserInfo'

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

export default {
  mixins: [fetchUserInfo],
  name: "ProfileBar",
  props: ["teachers", "fetch_user", "profile"],
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.FETCH_KIDS();
  },
  methods: {
    ...mapGetters(["fetch_kids", "requested_tutor"])
  },
  computed: {
    requested_tutor() {
      return this.$store.getters.requested_tutor;
    },
    fetched_kids() {
      let filtered_kids = [];
      Object.entries(this.$store.getters.fetch_kids.kids).forEach(
        ([key, value]) => {
          if (!value.tutoring) {
            filtered_kids = [...filtered_kids, value];
          }
        }
      );
      return filtered_kids;
    }
  },
  methods: {
    request_tutor() {
      const data = { tuteeId: this.tuteeId, tutorId: this.fetch_user.user.id };
      this.REQUEST_TUTOR(data);
    },
    ...mapActions(["FETCH_KIDS", "REQUEST_TUTOR"])
  }
};
</script>


<style scoped>
.wrap-profile {
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
}
.content-wrapper {
  margin: 0px auto;
  display: block;
  max-width: 1100px;
}
.profile-nav {
  border-top: #ebebeb 2px solid;
  width: 100%;
  display: inline-block;
  margin: 0;
  padding: 10px 0;
}
.profile-nav li {
  display: inline-block;
  list-style-type: none;
}
.profile-nav li a {
  margin: 7px 10px 7px 0 !important;
  color: #343434;
}
.bio {
  font-weight: 100;
  font-size: 18px;
  color: #565656;
}
.loaded {
  display: none;
}
.profile {
  max-width: 120px;
  height: auto;
}
.rounded-circle.profile {
  border: 4px solid #ffffff;
}
.nav .icon {
  margin-right: 5px;
}
.nav .nav-link {
  color: #81828b;
  font-weight: 100;
}
.nav .nav-link.active {
  color: #484a52;
  font-weight: 600;
}
.tabs-alt.nav-tabs .nav-link.active,
.tabs-alt.nav-tabs .nav-link.active:hover,
.tabs-alt.nav-tabs .nav-link.active:focus,
.tabs-alt > .nav-tabs .nav-link.active,
.tabs-alt > .nav-tabs .nav-link.active:hover,
.tabs-alt > .nav-tabs .nav-link.active:focus {
  -webkit-box-shadow: 0 -2px 0 #26b4ff inset;
  box-shadow: 0 -2px 0 #26b4ff inset;
}

.nav-tabs:not(.nav-fill):not(.nav-justified) .nav-link,
.nav-pills:not(.nav-fill):not(.nav-justified) .nav-link {
  margin-right: 0.125rem;
}
.nav-tabs.tabs-alt .nav-link,
.tabs-alt > .nav-tabs .nav-link {
  border-width: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
}
.nav-tabs .nav-link.active {
  border-bottom-color: #fff;
}
</style>