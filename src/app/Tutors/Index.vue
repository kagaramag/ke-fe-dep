<template>
  <div id="tutors">
    <component :is="layout">
      <div class="container">
        <!-- search tutors -->

        <!-- List of Tutors -->
        <h2 class="mt-3 text-center">{{$t('tutors.title')}}</h2>
        <div class="grabtutors mb-5" v-if="tutors">
          <div class="row">
            <div v-for="tutor in tutors.tutors" class="col-sm-12 col-md-4 col-lg-4" :key="tutor.index">
              <router-link :to="`/${$i18n.locale}/@${tutor.username}`">
                <div class="card shadow-lg radius-3">
                  <div class="row pt-3">
                    <div class="col-12">
                      <img
                        :src="tutor.image || avatar"
                        class="card-img-top shadow rounded-circle mb-4"
                        :alt="tutor.lastName"
                      />
                    </div>
                    <div class="col-12 text-center">
                      <h3 class="text-truncate mb-0 nobold text-dark text-center">
                        {{tutor.lastName | capitalize}} {{tutor.firstName}}
                      </h3>
                      <div class="card-text mx-3 my-1" style="color:#646464;height:70px">
                        <div :inner-html.prop="tutor.bio | truncate(100)"></div>
                      </div>
                    </div>
                    <div class="col-12 text-center py-3">
                      <router-link
                        class="btn btn-success shadow rounded"
                        :to="`/${$i18n.locale}/@${tutor.username}`"
                      >View Profile</router-link>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const default_layout = "default";
export default {
  name: "tutors",
  mounted() {
    this.$store.dispatch("FETCH_TUTORS");
  },
  computed: {
    tutors() {
      return this.$store.getters.fetch_tutors;
    },
    ...mapGetters(["fetch_tutors"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
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
  border: 5px solid #09835a;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
.card {
  border: none;
  margin-top: 20px;
}
.card h3 {
  font-weight: 500;
}
.card .bg-light {
  background: #e0e0e0 !important;
}
.card-img-top {
  width: 80%;
  max-width: 120px;
  margin: 2% auto;
  display: block;
}
.summary-info b {
  font-size: 15px;
  font-size: 200;
}
.summary-info span {
  font-size: 28px;
  font-size: 700;
}
.icon {
  color: #dfdfdf;
  font-size: 18px;
  position: relative;
  top: -2px;
}
.verified .icon {
  color: #4e836a;
}
</style>
