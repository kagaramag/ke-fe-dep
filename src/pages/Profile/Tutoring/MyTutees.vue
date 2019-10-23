<template>
  <div id="my-kids">
    <div v-if="fetch_kids.kids && fetch_kids.kids.length">
      <h2 class="my-2">Tutoring</h2>
      <!-- LIST OF KIDS -->
      <ul class="list-unstyled" v-if="fetch_kids.kids">
        <li
          class="my-4 shadow-1 bg-white wrap-one-tutering"
          v-for="val in fetch_kids.kids"
          :key="val.index"
        >
          <div v-if="val.status ==='requested'" class="requested" />
          <div v-if="val.status ==='accepted'" class="accepted" />
          <div v-if="val.status ==='rejected'" class="rejected" />
          <router-link :to="`/${$i18n.locale}/profile/${profile.user.username}/tutoring/${val.id}`">
            <div class="row">
              <div class="media p-3 my-1 mx-3" style="position:relative">
                <span v-if="val.kid.parent.image">
                  <img
                    :src="val.kid.parent.image"
                    style="max-width:40px;"
                    class="d-block mx-3 ui-w-100 rounded-circle profile d-block mx-auto"
                    alt="Tutor"
                  />
                </span>
                <span v-else>
                  <img
                    src="@/assets/images/profile.png"
                    style="max-width:40px;"
                    class="d-block mx-3 ui-w-100 rounded-circle profile d-block mx-auto"
                    alt="Tutor"
                  />
                </span>
                <div class="media-body px-3">
                  <div v-if="val.status === 'requested'" class="mb-3">
                    <h5 class="py-2" style="font-size:18px">
                      <b>{{val.kid.parent.lastName}} {{val.kid.parent.firstName}}</b> requested you to tutor
                      <b>{{val.kid.names}}</b>
                      , his/her {{val.kid.age}}-years old child.
                    </h5>
                    <!-- <button
                    @click.prevent
                    @click="accept_request(val.kid.id)"
                    class="btn btn-outline-success rounded-pill shadow-none"
                  >Accept</button>
                  <button class="btn btn-outline-danger rounded-pill shadow-none mx-3">Reject</button>
                    <button class="btn btn-light rounded-pill shadow-none">See more</button>-->
                  </div>
                  <div v-if="val.status === 'accepted'" class="mb-3">
                    <h5 class="py-2" style="font-size:18px">
                      You are now connected with
                      <b>{{val.kid.names}}</b>
                      , a {{val.kid.age}}-years old child of
                      <b>{{val.kid.parent.lastName}} {{val.kid.parent.firstName}}</b>.
                    </h5>- For more information regarding start the job, you can contact
                    <b>{{val.kid.parent.firstName}}</b>
                    <br />- If you need more help, don't hesitate to visit our contact page
                  </div>
                  <div v-if="val.status === 'rejected'" class="mb-3">
                    <h5 class="py-2" style="font-size:18px">
                      You have rejected this the request of <b>{{val.kid.parent.lastName}} {{val.kid.parent.firstName}}</b> to 
                      tutor his kid <b>{{val.kid.names}}</b>
                    <b>{{val.kid.parent.firstName}}</b>
                    <br />- If you need more help, don't hesitate to visit our contact page
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <div class="divider"></div>
        </li>
      </ul>
    </div>
    <div v-if="loaded && !fetch_kids.kids.length">
      <div class="media">
        <img
          style="max-width:240px;"
          class="d-block mx-3 ui-w-100 profile d-block mx-auto"
          src="@/assets/images/school-kid.png"
          alt="Lost Kid"
        />
      </div>
      <h2 class="text-center my-4">Oooops, You dont have kid to tutor yet!</h2>
      <div class="text-center">Learn how you can connect yourself with kids and parents.</div>
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
  name: "MyKids",
  props: ["profile", "fetch_kids"],
  data() {
    return {
      loaded: false
    };
  },
  created() {
    this.loaded = false;
  },
  computed: {
    accept_requested() {
      // this.loaded = true;
      return this.$store.getters.accept_requested;
    }
  },
  methods: {
    accept_request(id) {
      this.ACCEPT_REQUEST({ tuteeId: id });
    },
    ...mapActions(["ACCEPT_REQUEST"])
  }
};
</script>


<style scoped>
.wrap-one-tutering:hover {
  background: #f2f4f5 !important;
}
</style>
