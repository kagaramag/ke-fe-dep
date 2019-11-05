<template>
  <div id="education">
    <!-- SUBJECT -->
    <h2 class="my-4">
      {{$t('userprofile.education.title')}}
      <span
        class="float-right"
        v-if="profile.isLoggedIn && profile.user.id === fetch_user.user.id && !fetch_education.education"
      >
        <button class="btn btn-link" @click="openModal">
          <icon class="icon" icon="plus" />Add
        </button>
      </span>
    </h2>

    <div class="divider mb-4"></div>
    <div>
      <ul class="list-unstyled" v-if="fetch_education && fetch_education.education">
        <li
          class="my-4 rounded shadow-2 bg-white p-3"
          v-for="education in fetch_education.education"
          :key="education.index"
        >
          <div class="row mb-3">
            <div class="col-1">
              <icon class="icon text-muted mt-2" style="font-size:2.2em;" icon="school" />
            </div>
            <div class="col-11">
              <h3 class="mt-0">{{education.institution}}</h3>
              <span class="text-muted">
                {{education.certificate}} {{$t('userprofile.education.in')}}
                <b>{{education.course}}</b>
              </span>
            </div>
          </div>
          <!-- <div class="divider"></div> -->
        </li>
      </ul>
      <div
        class="rounded shadow-2 bg-white p-3 text-center"
        v-if="fetch_education && !fetch_education.education.length"
      >
        <icon icon="exclamation-circle" style="font-size:3.4em" class="icon my-4 text-muted" />
        <h4>No education provided yet</h4>
      </div>
    </div>

    <b-modal ref="my-modal" hide-footer title="Add Education">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-10" label="College:" label-for="input-11">
            <b-form-select v-model="form.graduated">
              <template v-slot:first>
                <option :value="null" disabled>Are you a graduate?</option>
              </template>

              <option value="True">Yes</option>
              <option value="False">No</option>
            </b-form-select>
          </b-form-group>

          <b-form-group id="input-group-1" label="Year of graduation:" label-for="input-1">
            <b-form-input
              id="input-0"
              v-model="form.yearOfGraduation"
              type="date"
              required
              placeholder="Year of Graduation"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Institution:" label-for="input-1">
            <b-form-input
              id="input-2"
              v-model="form.college"
              type="text"
              required
              placeholder="Which University / College did you graduate from?"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Institution:" label-for="input-1">
            <b-form-input
              id="input-2"
              v-model="form.institution"
              type="text"
              required
              placeholder="What institution"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Course:" label-for="input-1">
            <b-form-input
              id="input-3"
              v-model="form.course"
              type="text"
              required
              placeholder="What course did you take?"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Degree:" label-for="input-1">
            <b-form-input
              id="input-4"
              v-model="form.certificate"
              type="text"
              required
              placeholder="Certificate of higher education"
            ></b-form-input>
          </b-form-group>

          <b-button :disabled="!validateEducation" type="submit" variant="primary">Submit</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
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

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

const account_layout = "account";
export default {
  name: "education",
  props: ["fetch_user", "profile"],
  data() {
    return {
      form: {
        college: null,
        graduated: null,
        yearOfGraduation: new Date(),
        institution: "",
        course: "",
        certificate: ""
      },

      show: true
    };
  },
  mounted() {
    this.currentUsername = this.$route.params.username;
    this.FETCH_EDUCATION(this.currentUsername);
  },
  computed: {
    validateEducation() {
      if (
        !this.form.college ||
        !this.form.graduated ||
        !this.form.institution ||
        !this.form.course ||
        !this.form.certificate
      ) {
        return false;
      }
      return true;
    },
    fetch_education() {
      return this.$store.getters.fetch_education.education;
    },
    ...mapGetters(["fetch_education"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["FETCH_EDUCATION", "UPDATE_EDUCATION"]),
    onSubmit(evt) {
      evt.preventDefault();
      this.UPDATE_EDUCATION(this.form);
    },
    openModal() {
      this.$refs["my-modal"].show();

      console.log("opening modal");
    }
  }
};
</script>

<style scoped>
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
.list-unstyled {
}
</style>
