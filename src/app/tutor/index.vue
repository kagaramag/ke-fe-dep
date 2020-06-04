<template>
  <div>
    <component :is="layout">
      <div v-if="get_tutor && get_tutor.tutor && get_tutor.success && !get_tutor.loading">
        <div id="wrap-profile-card" class="bg-white">
          <div class="wrap-cover-image">
            <img :src="selectedImage" :alt="get_tutor.tutor.user.names" />
          </div>
          <div class="container position-relative">
            <div class="profile-card">
              <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                  <div class="image profile-img bg-white shadow-sm">
                    <img
                      v-if="get_tutor.tutor.user.photo"
                      v-lazy="get_tutor.tutor.user.photo || avatar"
                      :alt="get_tutor.user.names"
                    />
                    <img
                      v-if="get_tutor.tutor.user.gender === 'male'"
                      src="@/assets/images/male.svg"
                      :alt="get_tutor.tutor.user.names"
                    />
                    <img
                      v-if="get_tutor.tutor.user.gender === 'female'"
                      src="@/assets/images/female.svg"
                      :alt="get_tutor.tutor.user.names"
                    />
                  </div>
                </div>
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-10 align-middle profile-info">
                  <h1 class="font-weight-light mb-0">{{get_tutor.tutor.user.names}}</h1>
                  <div>Professional Tutor</div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <!-- what drives us? -->
        <div class="container" style="margin-top: 110px">
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <div
                class="is-verified rounded shadow-sm mb-3"
              >Our verification process ensures that tutors meet our high standards of trust & excellence.</div>
              <div class="radius-1 shadow-sm bg-white mb-3 py-1 px-3">
                <h2 class="font-weight-light my-3">Bio</h2>
                <div class="wrap-content" v-html="get_tutor.tutor.user.bio"></div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <router-link
                :to="`/tutors/hire?ref=${get_tutor.tutor.uuid}`"
                class="hire-me gradient-primary"
              >Hire me</router-link>
              <div class="radius-1 shadow-sm bg-white mb-3 py-1 px-3">
                <h2 class="font-weight-light my-3">Accepted payment methods</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0">MTN Mobile Money</li>
                  <li class="list-group-item px-0">Airtel&amp;Tigo</li>
                  <li class="list-group-item px-0">Bank Deposit</li>
                </ul>
              </div>
              <div class="radius-1 shadow-sm bg-white mb-3 py-1 px-3">
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
      <div v-if="get_tutor && get_tutor.loading">
        <Loading />
      </div>
    </component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/commons/Loading";

const default_layout = "default";
export default {
  components: { Loading },
  name: "contact",
  data() {
    return {
      images: [
        require("@/assets/images/cover-p4.jpg"),
        // require("@/assets/images/cover-p2.jpg"),
        // require("@/assets/images/cover-p3.jpg"),
        // require("@/assets/images/cover-p4.jpg")
      ],
      selectedImage: ""
    };
  },
  created() {
    this.loaded = true;
    this.$store.dispatch("resetTutor");
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
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
#wrap-profile-card {
  position: relative;
  margin-bottom: 25px;
  min-height: 30vh;
  box-shadow: 0 20px 15px -10px rgba(0, 0, 0, 0.1);
  /* background: url("./../../assets/images/cover-p4.jpg");
  background-position: center center; */
}
.wrap-cover-image {
  position: absolute;
  width: 100%;
  height: 35vh;
  top: 0;
  left: 0;
  overflow: hidden;
}
.wrap-cover-image::before {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
}

.wrap-cover-image img {
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
}
.profile-card {
  position: relative;
  top: 130px;
  margin: 25px 0 30px 0;
  padding: 15px 0;
}
.profile-img {
  width: 126px;
  height: 126px;
  padding: 6px;
  border-radius: 15px !important;
  overflow: hidden;
}
#drivers {
  width: 100%;
  padding: 10vh 0;
}
.is-verified {
  border: 1px solid #8abea1;
  background: #e9f8f3 url("./../../assets/images/checkmark.svg");
  background-size: 45px 45px;
  background-repeat: no-repeat;
  background-position: 15px 20px;
  color: #429666;
  padding: 20px 30px 20px 80px;
  margin-bottom: 5px;
}
.wrap-content p {
  margin: 0px;
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
.hire-me {
  display: block;
  width: 100%;
  padding: 18px 0;
  margin: 0 0 15px 0;
  text-align: center;
  color: #ffffff;
  border: none;
  border-radius: 5px !important;
}
.profile-info {
  color: #ffffff;
}
@media (max-width: 767px) {
  .profile-card {
    border-radius: 12px 12px 0 0 !important;
    background: #ffffff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.4);
  }
  .profile-info h1,
  .profile-info div {
    color: #232323;
    text-align: center;
  }
}
</style>
