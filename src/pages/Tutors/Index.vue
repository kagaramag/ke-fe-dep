<template>
  <div id="tutors">
    <component :is="layout">
      <div class="container">
        <!-- search tutors -->

        <!-- List of Tutors -->
        <h2 class="m-y-5">Find Tutors</h2>
        <div class="grabtutors" v-if="tutors">
          <div class="row">
            <div v-for="tutor in tutors.tutors" class="col-sm-6 col-md-4" :key="tutor.index">
              <div class="card shadow-1">
                <div class="row pt-3">
                  <div class="col-4">
                    <span v-if="tutor.image">
                      <img :src="tutor.image" class="card-img-top rounded-circle" alt="Tutor" />
                    </span>
                    <span v-else>
                      <img
                        src="@/assets/images/profile.png"
                        class="card-img-top rounded"
                        alt="Tutor"
                      />
                    </span>
                  </div>
                  <div class="col-8 px-0">
                    <h3
                      class="text-truncate mt-2 mb-0"
                    >{{tutor.lastName | capitalize}} {{tutor.firstName | firstLetter}}.</h3>
                    <div class="text-muted">@{{tutor.username}}</div>
                  </div>
                </div>
                <div class="divider bg-light mt-3 mb-1"></div>
                <div class="card-body text-center p-2">
                  <div
                    class="card-text"
                    style="color:#878787"
                  >{{tutor.bio || 'I’m a violinist, pianist, songwriter and composer. I’ve written an opera...' }}</div>
                </div>
                <div class="divider bg-light my-1"></div>
                <div class="row text-center">
                  <div class="col-4">
                    <div class="summary-info">
                      <b>Rank</b>
                      <br />
                      <span>7</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="summary-info">
                      <router-link class="btn btn-outline-primary my-2 rounded-pill" :to="`/profile/${tutor.username}`">View</router-link>
                    </div>
                  </div>
                  <span class="col-4">
                    <span class="summary-info">
                      <b>Price</b>
                      <br />
                      <span>10K</span>
                    </span>
                  </span>
                </div>
              </div>
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
.container {
  max-width: 1000px !important;
}
.profile {
  width: 100%;
  margin: 0;
}
/* .profile h1, .profile h2, .profile h3{font-weight: 100} */
.profile .bio {
  font-weight: 100;
}

.post-link {
  /* margin-bottom: 20px !important; */
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
.card {
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
  max-width: 180px;
  margin: 3% auto;
  display: block;
}
.summary-info b{
  font-size: 15px;
  font-size: 200
}
.summary-info span{
  font-size: 28px;
  font-size: 700
}
</style>