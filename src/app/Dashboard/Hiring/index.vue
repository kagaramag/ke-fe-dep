<template>
  <div>
    <component :is="layout">
      <div v-if="loaded">
        <div v-if="loaded" class="content-wrapper mt-2 mb-2">
          <!-- BOX HEADER -->
          <div class="content-steps mt-4 mb-1">
            <h3 class="text-center my-2">Hiring a tutor</h3>
            <div class="clear"></div>
            <div class="row">
              <div class="col-sm-4 col-md-4 col-lg-4 p-0 m-0" v-on:click="goTo('zero')">
                <div :class="{ 'active': steps.zero }" class="hire-process-box">
                  <icon class="icon" icon="user" />
                  <span>1. Tutor</span>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4 p-0 m-0" v-on:click="goTo('one')">
                <div :class="{ 'active': steps.one }" class="hire-process-box isNotOkay">
                  <icon class="icon" icon="child" />
                  <span>2. Learners</span>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4 p-0 m-0" v-on:click="goTo('two')">
                <div :class="{ 'active': steps.two  }" class="hire-process-box isOkay">
                  <icon class="icon" icon="check" />
                  <span>3. Hire</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="content-steps">
            <!-- STEP ZERO: Tutor -->
            <div v-if="steps.zero">
              <div class="py-3 bg-white border border-gray mb-3 shadow-1 radius-2">
                <div class="row mx-3">
                  <div class="col-sm-3 col-md-3 l-lg-3 image">
                    <img
                      v-lazy="fetch_user.user.image || avatar"
                      class="rounded-circle my-2"
                      :alt="fetch_user.user.firstName"
                    />
                  </div>
                  <div class="col-sm-9 col-md-9 l-lg-9">
                    <h4 class="my-1">{{fetch_user.user.firstName}} {{fetch_user.user.lastName}}</h4>
                    <div>
                      <span v-if="fetch_user.location">{{fetch_user.location.province}}</span>
                    </div>
                    <div class="clear"></div>
                    <div :inner-html.prop="fetch_user.user.bio | truncate(250)"></div>
                    <div class="my-3">
                      <router-link
                        :to="`/@${fetch_user.user.username}`"
                        class="btn btn-secondary rounded"
                      >
                        <icon class="icon" icon="user" />&nbsp;
                        View tutor
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- STEP TWO: Learners -->
            <div v-if="steps.one">
              <div class="p-3 border text-center border-gray mb-3 shadow-1 radius-2">
                <h4>Learner</h4>
                <div
                  class="my-4"
                >Our application requires to have written at least one article in the blog.</div>
                <div>
                  <img
                    style="max-width:350px;display:block;margin: 15px auto;"
                    src="@/assets/images/no-article-found.svg"
                    alt="Build profile"
                  />
                </div>
                <div class="mt-1 mb-4">
                  <router-link
                    class="btn btn-danger radius-1"
                    :to="`/dashboard/t/my-blog/compose`"
                  >
                    <icon class="icon" icon="plus" />&nbsp; Write now
                  </router-link>
                </div>or
                <div class="mt-1 mb-4">
                  <router-link
                    class="btn btn-secondary radius-1"
                    :to="`/dashboard/t/my-blog`"
                  >
                    <icon class="icon" icon="plus" />&nbsp; Go to my articles
                  </router-link>
                </div>
              </div>
            </div>
            <!-- HIRE -->
            <div v-if="steps.two">
              <div class="p-3 bg-white border border-gray mb-3 shadow-1 radius-2">
                <h1 class="text-center">Hire</h1>
                <div>
                  <img
                    style="max-width:400px;width:100%;display:block;margin: 15px auto;"
                    src="@/assets/images/build_profile.svg"
                    alt="Build profile"
                  />
                </div>
                <div class="text-center my-4">
                  Complete the profile information carefully.
                  <br />We require above information so that we can match you with child around you
                </div>
                <div class="mt-1 mb-4 text-center">
                  <router-link class="btn btn-secondary radius-1" :to="'/'">Learn more</router-link>
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
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
const account_layout = "account";
export default {
  name: "HiringProcess",

  data() {
    return {
      loaded: false,
      submitDisable: false,
      isStepOne: true,
      steps: {
        zero: true,
        one: false,
        two: false
      },
      currentTitle: "Tutor"
    };
  },
  mounted() {
    this.loaded = true;
  },
  created() {
    this.FETCH_USER(this.$route.params.username);
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    auth() {
      return JSON.parse(localStorage.getItem("isAuth"));
    },
    fetch_user() {
      return this.$store.getters.fetch_user;
    },
    ...mapGetters(["fetch_user"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["FETCH_USER"]),
    goTo(step) {
      this.steps = {
        zero: false,
        one: false,
        two: false
      };
      Object.entries(this.steps).forEach((element, index) => {
        if (element[0] === step) {
          this.steps[step] = true;
        }
      });
      this.$store.dispatch("RESET_FETCH_USER");
    }
  }
};
</script>

<style scoped>
.content-wrapper {
}
.content-steps {
  width: 98%;
  margin: 0 auto;
  max-width: 750px;
  display: block;
}
.submit-disabled {
  opacity: 0.3;
}
.hire-process-box {
  width: 96%;
  margin: 15px 1% 0px 1%;
  padding: 8px 1%;
  border-radius: 4px !important;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.hire-process-box .icon {
  font-size: 35px;
  margin-top: 5px;
}
.hire-process-box span {
  position: relative;
  display: block;
  text-align: center;
  padding-top: 13px;
  font-weight: 100 !important;
}
.hire-process-box.active {
  color: #403ea8;
}
/* .hire-process-box.isOkay::before {
  position: absolute;
  content: "";
  bottom: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  background: #ffffff url("../../../assets/images/step_checked.svg");
  background-size: 20px 20px;
  border-radius: 4px;
}
.hire-process-box.isNotOkay::before {
  position: absolute;
  content: "";
  bottom: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  background: #ffffff url("../../../assets/images/step_unchecked.svg");
  background-size: 20px 20px;
  border-radius: 4px;
} */
.hire-process-box img {
  max-width: 40px;
  margin-left: 4px;
}
.content-steps .btn {
  min-width: 220px;
}
</style>
