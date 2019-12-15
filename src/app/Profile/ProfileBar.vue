<template>
  <div
    id="profile-card"
    class="p-3 mt-2 radius-2 shadow bg-white border border-gray"
    slot-scope="data"
  >
    <div class="py-1">
      <div class="container">
        <div class="row" style="position:relative">
          <div class="col-sm-3 col-md-3 col-lg-2">
            <div class="wrap-profile image">
              <img
                :src="data && data.user.image ? data.user.image : avatar"
                class="bg-light rounded-circle ui-w-100 profile mx-auto shadow-3"
                :alt="data.user.firstName || ''"
              />
            </div>
          </div>
          <div class="col-sm-9 col-md-9 col-lg-10">
            <div>
              <h3 class="text-dark" style="font-size:30px;">
                <span class="float-left">{{data.user.lastName}} {{data.user.firstName}}</span>
                <span
                  v-if="auth && auth.role == 'parent' && data.user.UserRole && data.user.UserRole.role.role == 'tutor'"
                >
                  <router-link
                    :to="'/'"
                    class="btn btn-light border border-dark rounded px-4 shadow float-right"
                  >
                    <icon class="icon" icon="handshake" />&nbsp;&nbsp;Hire me
                  </router-link>
                </span>
              </h3>
              <div class="clear"></div>
              <div class="pt-3">
                <span class="pr-3" v-if="data.location">
                  <icon class="icon" icon="map-marker-alt" />
                  &nbsp;
                  {{data.location.province}}, {{data.location.district}}
                </span>
                <span class="pr-3">
                  <icon class="icon" icon="clock" />&nbsp;
                  <b>Joined</b>
                  {{data.user.createdAt | date}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!-- MODAL, CONNECT TUTOR TO A KID -->
    <!-- <b-modal id="hirenow" hide-footer>
    <template v-slot:modal-title>Hire a tutor</template>
    <div class="d-block">
      <div class="row">
        <div class="col m-4">
          <div v-show="fetched_kids && fetched_kids.length !== 0" class="alert alert-info" role="alert">
            <h4 class="alert-heading">Hiring {{data.lastName}} {{data.firstName}}</h4>

            <p>
              Select a child and request
              <b>{{data.lastName}}</b>
              to tutor him/her.
              We immediately contact {{data.gender === 'male' ? 'him' : 'her'}} and {{data.gender === 'male' ? 'he' : 'she'}} will approve your request as soon as possible
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
                  <option v-for="kid in fetched_kids" :value="kid.id" :key="kid.index">{{kid.names}}</option>
                </b-form-select>
              </div>
              <button type="submit" @click.prevent @click="request_tutor" class="btn btn-primary bg-primary px-3 rounded">Hire now</button>
              <b-button class="btn btn-danger px-3 rounded" @click="$bvModal.hide('hirenow')">Cancel</b-button>
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
              <router-link @click="$bvModal.hide('hirenow')" :to="`/profile/${profile.user.username}/tutoring`" class="btn btn-outline-dark btn-light rounded my-3 px-4">My Kids</router-link>
              <button @click="$bvModal.hide('hirenow')" class="btn btn-outline-dark btn-light rounded my-3 px-4">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </b-modal>-->
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileBar",
  props: ["data"],
  data() {
    return {
      loaded: false,
      role: {
        name: "",
        image: ""
      }
    };
  },
  computed: {
    auth() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};
</script>

<style scoped>
#profile-card {
  position: relative;
}
#profile-card::before {
  position: absolute;
  content: "";
  width: 90%;
  height: 6px;
  background: #b8b8b8;
  bottom: -6px;
  left: 5%;
  border-radius: 0 0 5px 5px;
}
#profile-card::after {
  position: absolute;
  content: "";
  width: 80%;
  height: 6px;
  background: #dbdbdb;
  bottom: -12px;
  left: 10%;
  border-radius: 0 0 5px 5px;
}
.wrap-profile {
  top: 0;
  left: 0;
  max-width: 160px;
  height: auto;
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
