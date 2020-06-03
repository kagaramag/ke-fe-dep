<template>
  <div>
    <!-- <component :is="layout"> -->
    <section class="clearfix">
      <div class="container">
        <h2 class="text-center h1 text-primary font-weight-light py-3 my-4">
          Top
          <span class="bold">Tutors</span>
        </h2>
        <div v-if="get_tutors  && get_tutors.loading">
          <Loading />
          <ProfileLoading />
        </div>
        <div
          v-if="loaded && get_tutors  && get_tutors.tutors && !get_tutors.loading && get_tutors.success"
        >
          <div class="row mt-4 align-self-center">
            <div
              class="col-sm-12 col-md-6 col-lg-4"
              v-for="tutor in get_tutors.tutors"
              :key="tutor.index"
            >
              <router-link :to="`/tutor/${tutor.uuid}/${generateName(tutor.user.names)}`">
                <div class="card hoverable py-4 mb-3 px-2 shadow-sm radius-3">
                  <div class="row">
                    <div class="col-12">
                      <div class="image">
                        <img
                          v-if="tutor.user.photo"
                          v-lazy="tutor.user.image || avatar"
                          class="rounded-circle mb-4"
                          :alt="tutor.user.names"
                        />
                        <img
                          v-else-if="tutor.user.gender === 'male'"
                          src="@/assets/images/male.svg"
                          class="rounded-circle mb-4"
                          :alt="tutor.user.names"
                        />
                        <img
                          v-else-if="tutor.user.gender === 'female'"
                          src="@/assets/images/female.svg"
                          class="rounded-circle mb-4"
                          :alt="tutor.user.names"
                        />
                      </div>
                    </div>
                    <div class="col-12 text-center">
                      <h3
                        class="text-truncate mb-0 nobold text-dark"
                      >{{tutor.user.names | capitalize}}</h3>
                      <div class="card-text my-1" style="color:#646464;min-height: 100px">
                        <div class="my-3" :inner-html.prop="tutor.user.bio | truncate(120)"></div>
                      </div>
                      <router-link
                        class="btn view-profile rounded"
                        :to="`/tutor/${tutor.uuid}/${generateName(tutor.user.names)}`"
                      >View Profile</router-link>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- </component> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/commons/Loading";
import ProfileLoading from "@/components/commons/ProfileLoading";
const default_layout = "default";
export default {
  name: "all-tutors",
  components: {
    Loading,
    ProfileLoading
  },
  metaInfo: {
    title: "Find Best Instructors, Tutors & Mentors Near You",
    titleTemplate: "%s - | Keetela.com | Igniting minds for success!",
    meta: [
      {
        name: "description",
        content:
          "Acquisition of knowledge and skills necessary to achieve career advancement and personal growth"
      },
      {
        name: "keywords",
        content:
          "Tutors, Mentorship, Coaching, Rwanda Tutoring, Kigali, Training, Coding Class, Programming Training"
      }
    ]
  },
  data() {
    return {
      loaded: false
    };
  },
  created() {
    this.loaded = true;
  },
  mounted() {
    this.fetchTutors();
  },
  computed: {
    ...mapGetters(["get_tutors"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods: {
    generateName(name) {
      const n = name.replace(/ /g, '-').toLowerCase();
      return n;
    },
    ...mapActions(["fetchCourses", "fetchTutors"])
  }
};
</script>

<style scoped>
.image img {
  max-width: 120px !important;
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
.view-profile {
  border: 1px solid #cdcdcd;
}
</style>
