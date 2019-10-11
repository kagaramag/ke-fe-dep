<template>
  <div id="my-kids">
    <h2 class="mb-4">
      My Kids
      <span class="float-right">
        <b-button id="show-btn" class="btn btn-primary rounded-pill px-3" @click="popUserForm()">
          <icon class="icon" icon="plus" />&nbsp; Add
        </b-button>
      </span>
    </h2>
    <!-- LIST OF KIDS -->
    <div>
      <ul class="list-unstyled" v-if="fetch_kids.kids">
        <li
          class="my-4 shadow-1 bg-white wrap-one-tutering"
          v-for="kid in fetch_kids.kids"
          :key="kid.index"
        >
          <div v-if="!kid.tutoring" class="requested" />
          <div v-if="kid.tutoring && kid.tutoring.status ==='requested'" class="requested" />
          <div v-if="kid.tutoring && kid.tutoring.status ==='accepted'" class="accepted" />
          <div v-if="kid.tutoring && kid.tutoring.status ==='rejected'" class="rejected" />
          <div class="row">
            <div class="media p-3 my-1 mx-3" style="position:relative">
              <span>
                <img
                  src="@/assets/images/profile.png"
                  style="max-width:40px;"
                  class="d-block mx-3 ui-w-100 rounded-circle profile d-block mx-auto"
                  alt="Tutor"
                />
              </span>
              <div class="media-body px-3">
                <div class="mb-3" v-if="kid.tutoring && kid.tutoring.status ==='requested' ">
                  <h5 class="py-2" sty le="font-size:18px">
                    You requested
                    <b>{{kid.tutoring.tutor.lastName}} {{kid.tutoring.tutor.firstName}}</b> to tutor
                    <b>{{kid.names}}</b>
                  </h5>
                  <div class="my-2" style="color:#878787">{{kid.createdAt | date }}</div>
                </div>
                <div class="mb-3" v-if="kid.tutoring && kid.tutoring.status ==='accepted' ">
                  <h5 class="py-2" style="font-size:18px">
                    <b>{{kid.names}}</b> is being tutored by
                    <b>{{kid.tutoring.tutor.lastName}} {{kid.tutoring.tutor.firstName}}</b>
                  </h5>
                  <div class="my-2" style="color:#878787">{{kid.createdAt | date }}</div>
                </div>
                <div class="mb-3" v-if="kid.tutoring && kid.tutoring.status ==='rejected' ">
                  <h5 class="py-2" style="font-size:18px">
                    <b>{{kid.tutoring.tutor.lastName}} {{kid.tutoring.tutor.firstName}}</b> rejected your request to tutor
                    <b>{{kid.names}}</b>
                  </h5>
                  <div class="my-2" style="color:#878787">{{kid.createdAt | date }}</div>
                </div>
                <div class="mb-3" v-if="!kid.tutoring">
                  <h5 class="py-2" style="font-size:18px">
                    <b>{{kid.names}}</b> doe not have a tutor yet
                  </h5>
                  <div class="my-2" style="color:#878787">{{kid.createdAt | date }}</div>
                </div>
              </div>
            </div>

            <div class="wrap-media-btn">
              <router-link
                :to="'/tutors'"
                v-if="!kid.tutoring"
                class="btn btn-outline-dark rounded-pill px-4"
              >Search tutors</router-link>
              <button class="btn btn-outline-dark rounded-pill px-4">
                View
                <icon class="icon" icon="arrow-right" />
              </button>
            </div>
            <div class="dropdown option-nav">
              <b-dropdown id="option-nav" right no-caret class="m-md-2" variant="outline-light">
                <template v-slot:button-content>
                  <icon icon="ellipsis-v" class="icon float-right text-dark" />
                </template>
                <b-dropdown-item @click="popKidInfo(kid.id)">
                  <icon class="icon" icon="child" />&nbsp; View kid details
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <span v-if="kid.tutoring">
                  <b-dropdown-item v-if="kid.tutoring.status === 'requested'">
                    <icon class="icon" icon="ban" />&nbsp; Stop tutor
                  </b-dropdown-item>
                </span>
                <b-dropdown-item
                  @click="popUserForm(kid.id, kid.names, kid.age, kid.school )"
                  class="text-danger"
                >
                  <icon class="icon" icon="pen" />&nbsp; Edit
                </b-dropdown-item>
                <b-dropdown-item class="text-danger">
                  <icon class="icon" icon="trash" />&nbsp; Delete kid
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </li>
        <li
          class="my-4 shadow-1 bg-white"
          style="display:none"
          v-for="kid in fetch_kids.kids"
          :key="kid.index"
        >
          <div class="row mb-3 p-2" style="position:relative">
            <div class="col-1">
              <icon class="icon text-muted mt-2" style="font-size:2.2em;" icon="child" />
            </div>
            <div class="col-11">
              <h3 class="mt-0">{{kid.names}}</h3>
              <span class="text-muted">
                Age:
                <span class="badge badge-secondary">{{kid.age}} Years</span> &nbsp;&nbsp;
                Class:
                <span class="badge badge-secondary">{{kid.class}}</span> &nbsp;&nbsp;
                School:
                <span
                  class="badge badge-secondary"
                >{{kid.school}}</span>
              </span>
            </div>
          </div>
          <div class="divider"></div>
          <div class="row m-0 p-2" v-if="kid.tutoring">
            <div v-if="kid.tutoring.status === 'requested'" class="capitalize col-6">
              Tutor:
              {{kid.tutoring.tutor.firstName}}
              {{kid.tutoring.tutor.lastName}}
            </div>
            <div class="col-6 text-right">
              Pending
              <b-tooltip target="why-pending" triggers="hover">
                Waiting for tutor to confirm your request.
                <br />Don't worry we have notified him/her
              </b-tooltip>
            </div>
          </div>
          <div class="row m-0 p-2 grab-no-tutor text-dark" v-else>
            <span class="col">This child does not have a tutor yet.</span>
          </div>
        </li>
      </ul>
      <div
        class="rounded shadow-2 bg-white p-3 text-center"
        v-if="fetch_kids && fetch_kids.kids.length === 0"
      >
        <icon icon="exclamation-circle" style="font-size:3.4em" class="icon my-4 text-muted" />
        <h4>No kids provided yet</h4>
      </div>
      <div
        class="rounded shadow-2 bg-white p-2 text-center"
        v-if="fetch_kids.errors && fetch_kids.errors.error"
      >
        <icon icon="exclamation-triangle" style="font-size:3.4em" class="icon my-4 text-muted" />
        <h4>{{fetch_kids.errors.error}}</h4>
      </div>
    </div>

    <!-- MODAL, REGISTER, EDIT A KID -->
    <b-modal id="view-kid-info" hide-footer>
      <template v-slot:modal-title>Child information</template>
      <div class="d-block">
        {{kidPreview}}
      </div>
    </b-modal>
    <!-- MODAL, REGISTER, EDIT A KID -->
    <b-modal id="register" hide-footer>
      <template v-slot:modal-title>{{title}}</template>
      <div class="d-block">
        <!-- <div
          class="alert alert-danger"
          role="alert"
          v-if="register_kid.errors[0] && register_kid.errors[0].error"
        >{{register_kid.errors[0].error}}</div>-->
        <div class="row">
          <div class="col m-4">
            <form :class="{ 'form-group--error': $v.names.$error }">
              <div class="form-group">
                <label for="names">Names</label>
                <input
                  type="names"
                  v-model="$v.names.$model"
                  class="form-control"
                  id="names"
                  autocomplete="off"
                />
                <div class="error py-2" v-if="!$v.names.required">Names are required</div>
                <div
                  class="error py-2"
                  v-if="!$v.names.minLength"
                >Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
              </div>
              <div class="form-group">
                <label for="age">Birth date</label>
                <datetime type="date" v-model="birth"></datetime>
              </div>
              {{birth}}
              <div class="form-group">
                <label for="school">School</label>
                <input
                  type="school"
                  v-model="$v.school.$model"
                  class="form-control"
                  id="school"
                  autocomplete="off"
                />
                <div class="error py-2" v-if="!$v.school.required">School are required</div>
                <div
                  class="error py-2"
                  v-if="!$v.school.minLength"
                >School must have at least {{$v.school.$params.minLength.min}} letters.</div>
              </div>
              <div class="form-group">
                <label for="class">Class</label>
                <input
                  type="class"
                  v-model="$v.class.$model"
                  class="form-control"
                  id="class"
                  autocomplete="off"
                />
                <small
                  id="classHelp"
                  class="form-text text-muted"
                >Use N* for nursary and P* for Primary school(e.g.: N2, P3)</small>
                <div class="error py-2" v-if="!$v.class.required">Class are required</div>
                <div
                  class="error py-2"
                  v-if="!$v.class.minLength"
                >Class must have at least {{$v.class.$params.minLength.min}} letters.</div>
              </div>
              <div>
                <button
                  type="submit"
                  @click.prevent
                  @click="submit_kid"
                  class="btn btn-primary rounded-pill px-4"
                >Register</button>
                <b-button
                  class="btn btn-outline-primary mx-2 rounded-pill btn-light"
                  @click="$bvModal.hide('register')"
                >Cancel</b-button>
                <div class="float-right m-1">
                  <b-spinner v-show="false"></b-spinner>
                </div>
              </div>
            </form>
          </div>
        </div>
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
import { required, minLength, between } from "vuelidate/lib/validators";
const { validationMixin, default: Vuelidate } = require("vuelidate");
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);

library.add(fas);
library.add(fab);
Vue.use(Vuelidate);
Vue.component("icon", FontAwesomeIcon);

const account_layout = "account";
export default {
  name: "MyKids",
  props: ["profile", "fetch_kids"],
  component: {
    datetime: Datetime
  },
  data() {
    return {
      names: this.name || "",
      school: "",
      birth: new Date(),
      class: "",
      edit: false,
      kidPreview: {
        names: '',
        school: ''
      }
    };
  },
  computed: {
    register_kid() {
      return this.$store.getters.register_kid;
    }
  },
  methods: {
    popUserForm(id, names, age, school) {
      if (id) {
        (this.title = "Edit kid"), (this.names = names), (this.school = school);
      } else {
        this.title = "Register kid";
      }
      this.$bvModal.show("register");
    },
    // pop kid info
    async popKidInfo(id) {
      await emptyKidInfo();
      this.kidPreview = '',
      await this.$bvModal.show("view-kid-info");
    },
    submit_kid() {
      const data = {
        names: this.names,
        class: this.class,
        birth: "",
        school: this.school
      };
      if (!this.edit) {
        this.REGISTER_KID(data);
      } else {
        this.EDIT_KID(data);
      }
    },
    ...mapActions(["FETCH_KIDS", "REGISTER_KID"])
  },
  validations: {
    names: {
      required,
      minLength: minLength(4)
    },
    school: {
      required,
      minLength: minLength(4)
    },
    class: {
      required,
      minLength: minLength(2)
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
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
.grab-tutor {
  background: rgb(48, 72, 148);
  background: linear-gradient(
    35deg,
    rgba(48, 72, 148, 1) 0%,
    rgba(183, 33, 255, 1) 100%
  );
}
.grab-no-tutor {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgb(246, 246, 246) 50%,
    rgba(200, 200, 200, 1) 100%
  );
}
.option-nav {
  position: absolute;
  top: 15px;
  right: 30px;
}
.option-nav .dropdown-menu li {
  position: relative;
  left: 0px;
}
.option-nav .dropdown-menu li .icon {
  margin-left: -10px;
  color: #b3b3b3;
}
.vdatetime-input {
  padding: 12px 6px !important;
}
.wrap-one-tutering:hover {
  background: #f2f4f5 !important;
}
.wrap-media-btn {
  position: absolute;
  top: 70px;
  right: 20px;
}
.option-nav {
  position: absolute;
  top: 15px;
  right: 10px;
}
.option-nav .dropdown-menu li {
  position: relative;
  left: 0px;
}
.option-nav .dropdown-menu li .icon {
  margin-left: -10px;
  color: #b3b3b3;
}
</style>