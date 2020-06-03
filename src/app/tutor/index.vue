<template>
  <div>
    <component :is="layout">
      <div v-if="get_tutor && get_tutor.tutor && get_tutor.success && !get_tutor.loading">
        <div id="profile-card" class="p-3 bg-white">
          <div class="py-1">
            <div class="container">
              <div class="row" style="position:relative">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                  <div class="image">
                    <img
                      v-if="get_tutor.tutor.user.photo"
                      v-lazy="get_tutor.tutor.user.photo || avatar"
                      class="rounded-circle mb-4"
                      :alt="get_tutor.user.names"
                    />
                    <img
                      v-if="get_tutor.tutor.user.gender === 'male'"
                      src="@/assets/images/male.svg"
                      class="rounded-circle mb-4"
                      :alt="get_tutor.tutor.user.names"
                    />
                    <img
                      v-if="get_tutor.tutor.user.gender === 'female'"
                      src="@/assets/images/female.svg"
                      class="rounded-circle mb-4"
                      :alt="get_tutor.tutor.user.names"
                    />
                  </div>
                </div>
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-10">
                  <div>
                    <h1 class="font-weight-light">
                      <span class="float-left">{{get_tutor.tutor.user.names}}</span>
                      <span class="float-right">
                        <router-link :to="'/tutors/all'" class="btn rounded px-4 mr-3">
                          <icon class="icon" icon="arrow-left" />&nbsp;&nbsp;All tutors
                        </router-link>
                        <!-- <router-link :to="'/'" class="btn btn-success rounded px-4 shadow">
                          <icon class="icon" icon="handshake" />&nbsp;&nbsp;Request me
                        </router-link>-->
                      </span>
                    </h1>
                    <div class="clear"></div>
                    <div class="pt-3">
                      <span class="mr-3">
                        Professional Tutor
                        <!-- <icon class="icon" icon="map-marker-alt" />&nbsp; -->
                        <!-- {{get_tutor.tutor.address}} -->
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <!-- what drives us? -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <div class="radius-1 shadow bg-white mb-3 py-1 px-3">
                <h2 class="font-weight-light my-3">Bio</h2>
                <div v-html="get_tutor.tutor.user.bio"></div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="radius-1 shadow bg-white mb-3 py-1 px-3">
                <h2 class="font-weight-light my-3">Accepted payment methods</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0">MTN Mobile Money</li>
                  <li class="list-group-item px-0">Airtel&amp;Tigo</li>
                  <li class="list-group-item px-0">Bank Deposit</li>
                </ul>
              </div>
              <div class="radius-1 shadow bg-white mb-3 py-1 px-3">
                <h2 class="font-weight-light my-3">Booking Policy</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0">
                    Schedule
                    <span class="font-weight-bold">2 days</span> before
                  </li>
                  <li class="list-group-item px-0">
                    Free cancellation within:
                    <span class="font-weight-bold">1 day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const default_layout = "default";
export default {
  name: "contact",

  created() {
    this.loaded = true;
    this.$store.dispatch("resetTutor");
  },
  mounted() {
    this.fetchTutor(this.$route.params.uuid);
  },
  computed: {
    ...mapGetters(["get_tutor"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["fetchTutor"])
  }
};
</script>

<style scoped>
.container {
  max-width: 920px !important;
}
#profile-card {
  margin-bottom: 25px;
  box-shadow: 0 20px 15px -10px rgba(0, 0, 0, 0.1);
}
#drivers {
  width: 100%;
  padding: 10vh 0;
}
.one-step img {
  max-width: 90px;
  display: block;
  margin: 0 auto;
}
.one-step h2 {
  font-size: 3em;
}
.list-group-flush .text-gray {
  color: #dedede !important;
}
.list-group-flush .icon {
  font-size: 18px;
}
.list-unstyled .media img {
  width: 60px;
}
</style>
