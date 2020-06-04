<template>
  <div>
    <component :is="layout">
      <div id="intro">
        <section class="clearfix">
          <div class="container" style="height:500px">
            <div class="row align-items-center h-100">
              <div class="col-12 col-lg-6">&nbsp;</div>
              <div class="col-12 col-lg-6">
                <form
                  class="p-5 bg-white shadow-lg"
                  style="border-radius: 30px 30px 0 0"
                  v-if="request_tutor && !request_tutor.success"
                >
                  <h3 class="font-weight-light">Request process</h3>
                  <div class="d-block">
                    <div class="form-group">
                      <label for="names">Your names</label>
                      <input
                        type="names"
                        class="form-control"
                        v-model="requestTutor.names"
                        @blur="$v.requestTutor.names.$touch()"
                        id="names"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Your email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model.trim="requestTutor.email"
                        @blur="$v.requestTutor.email.$touch()"
                        id="email"
                        autocomplete="off"
                      />
                    </div>
                    <div
                      class="error-input"
                      v-if="$v.requestTutor.email.$dirty && $v.requestTutor.email.$invalid"
                    >Email is incorrect</div>
                    <label for="phone">Your phone number</label>
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        @input="checkPhone"
                        v-model.trim="requestTutor.phone"
                        id="phone"
                      />
                    </div>
                    {{ isPhoneNumber }}
                    <div
                      class="error-input"
                      v-if="$v.requestTutor.phone.$dirty && $v.requestTutor.phone.$invalid"
                    >phone is incorrect</div>
                  </div>
                  <div class="py-1">
                    <b-button
                      class="mt-1 px-3 mr-3 gradient-primary rounded"
                      @click.prevent="requestTutorNow"
                    >Request now</b-button>
                  </div>
                  <div
                    class="alert alert-warning my-3 text-center"
                    style="max-width: 650px;margin: 0 auto;display: center"
                  >We will never share or misuse your personal information such as names, email or phone number to any third parties.</div>
                </form>
                <div
                  class="py-4 text-center"
                  v-if="
                request_tutor && request_tutor.success && !request_tutor.loaded
              "
                >
                  <h2 class="font-weight-light">
                    Thank you for requesting a tutor.
                    <br />We will contact you as soon as possible.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </component>
  </div>
</template>


<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { isPhone } from "./../../validations";
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
  numeric
} from "vuelidate/lib/validators";
const { default: Vuelidate } = require("vuelidate");
Vue.use(Vuelidate);
const default_layout = "default";
export default {
  metaInfo: {
    title: "Trusted & verified personal tutors",
    titleTemplate: "%s - | Keephonea.com | Igniting minds for success!",
    meta: [
      {
        name: "description",
        content:
          "We connect you with trusted & verified one-on-one tutor near you!"
      },
      {
        name: "keywords",
        content:
          "Tutors, Teachers, One-on-one tutors, Primary subjects, Mathematics, English, French"
      }
    ]
  },
  name: "mentoring",
  data() {
    return {
      isPhoneNumber: false,
      requestTutor: {
        names: "",
        email: "",
        phone: "",
        child: "",
        ref: null
      },
      becomeTutor: {
        names: "",
        email: "",
        phone: "",
        location: ""
      }
    };
  },
  mounted() {
    this.requestTutor.ref = this.$route.query.ref;
  },
  computed: {
    request_tutor() {
      return this.$store.getters.request_tutor;
    },
    ...mapGetters(["request_tutor"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods: {
    checkPhone(e) {
      this.isPhoneNumber = isPhone(e.target.value);
    },
    requestTutorNow() {
      this.createTutorRequest(this.requestTutor);
    },
    ...mapActions(["createTutorRequest"])
  },
  // validation
  validations: {
    requestTutor: {
      names: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(45)
      },
      courses: {
        required
      },
      phone: {
        required,
        numeric,
      },
      email: {
        required,
        email
      },
      child: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(22)
      }
    },
    becomeTutor: {
      names: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(45)
      },
      phone: {
        required,
        numeric
      },
      email: {
        required,
        email
      },
      location: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(22)
      }
    }
  }
};
</script>

<style scoped>
.tutoring-cover {
  background-image: url("https://res.cloudinary.com/ninjas/image/upload/v1587542008/keephonea/colored-pencils-and-water-color-beside-picture-frame-3774088_w3v3sl.jpg");
}
.grab-tutoring-caption {
  max-width: 660px;
}
.grab-tutoring-caption .btn.border {
  border-width: 3px !important;
}
.tutoring-cover {
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781819/keephonea/bg-tutoring_fsxvoz.jpg");
}
.courses-cover {
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781818/keephonea/bg-courses_ki6vdk.jpg");
  background-attachment: scroll;
  background-position: center top;
  background-size: cover;
  position: relative;
}
.error-input {
  color: #c55656;
}
.courses-cover::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: rgba(255, 255, 255, 0.25);
  width: 100%;
  height: 100%;
}
.one-course {
  position: relative;
  width: 32%;
  float: left;
  border-radius: 5px;
  margin: 0 1% 10px 0;
  padding: 15px 0 !important;
}
.one-course span {
  position: relative;
  left: 55px;
  margin: 10px 0;
}
.one-course img {
  position: absolute;
  width: 30px;
  height: auto;
  top: 10px;
  left: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .one-course {
    width: 49%;
  }
}
@media only screen and (max-width: 767px) {
  .one-course {
    width: 99%;
  }
}

#intro {
  width: 100%;
  overflow: hidden;
  min-height: 85vh;
  position: relative;
  background-image: url("./../../assets/images/cover-p6.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#intro::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  /* background: rgba(26, 26, 26, 0.8); */
}
#intro h2 {
  color: #8f8e8e;
  font-weight: 700;
  max-width: 700px;
}
#intro h1 {
  max-width: 900px;
}
</style>
