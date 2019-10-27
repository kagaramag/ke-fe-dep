<template>
  <div id="my-kids">
    <h2 class="my-4">
      My Kids
      <span class="float-right">
        <b-button id="show-btn" class="btn btn-light" @click="$bvModal.show('register')">
          <icon class="icon" icon="plus" />Add
        </b-button>
      </span>
    </h2>
    <!-- LIST OF KIDS -->
    <div>
      <ul class="list-unstyled" v-if="fetch_kids.kids">
        <li class="my-4 shadow-1 bg-white" v-for="kid in fetch_kids.kids" :key="kid.index">
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
            <div class="dropdown option-nav">
              <b-dropdown id="option-nav" right no-caret class="m-md-2" variant="outline-light">
                <template v-slot:button-content>
                  <icon icon="ellipsis-v" class="icon float-right text-dark" />
                </template>
                <span v-if="kid.tutoring">
                  <b-dropdown-item v-if="kid.tutoring.status === 'requested'">
                    <icon class="icon" icon="undo" />Cancel
                  </b-dropdown-item>
                  <b-dropdown-item v-if="kid.tutoring.status === 'requested'">
                    <icon class="icon" icon="ban" />Rejected
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                </span>
                <b-dropdown-item class="text-danger">
                  <icon class="icon" icon="pen" />Edit
                </b-dropdown-item>
                <b-dropdown-item class="text-danger">
                  <icon class="icon" icon="trash" />Delete kid
                </b-dropdown-item>
              </b-dropdown>
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

    <!-- MODAL, CREATE A KID -->

    <b-modal id="register" hide-footer>
      <template v-slot:modal-title>Register your Kid</template>
      <div class="d-block">
        <!-- <div
          class="alert alert-danger"
          role="alert"
          v-if="register_kid.errors[0] && register_kid.errors[0].error"
        >{{register_kid.errors[0].error}}</div>-->
        <div class="row">
          <div class="col m-4">
            <form>
              <div class="form-group">
                <label for="names">Names</label>
                <input
                  type="names"
                  v-model="kid.names"
                  class="form-control"
                  id="names"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="school">School</label>
                <input
                  type="school"
                  v-model="kid.school"
                  class="form-control"
                  id="school"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="subject"
                  v-model="kid.subject"
                  class="form-control"
                  id="subject"
                  autocomplete="off"
                />
                <small
                  id="subjectHelp"
                  class="form-text text-muted"
                >Seperate subjects by comma (e.g.: Math, History)</small>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="age">Age</label>
                    <input
                      type="number"
                      v-model="kid.age"
                      class="form-control"
                      name="age"
                      min="0"
                      id="age"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="class">Class</label>
                    <input
                      type="class"
                      v-model="kid.class"
                      class="form-control"
                      id="class"
                      autocomplete="off"
                    />
                    <small
                      id="classHelp"
                      class="form-text text-muted"
                    >Use N* for nursary and P* for Primary school(e.g.: N2, P3)</small>
                  </div>
                </div>
              </div>
              <button
                :disabled="!validateKid"
                type="submit"
                @click.prevent
                @click="submit_kid"
                class="btn btn-primary bg-primary"
              >Submit</button>
              <b-button class="btn btn-light" @click="$bvModal.hide('register')">Cancel</b-button>
              <div class="float-right m-1">
                <b-spinner v-show="false"></b-spinner>
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

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);
const account_layout = "account";
export default {
  name: "MyKids",
  props: ["profile", "fetch_kids"],
  data() {
    return {
      kid: {
        names: "",
        school: "",
        subject: "",
        age: 0,
        class: ""
      }
    };
  },
  computed: {
    validateKid() {
      if (
        !this.kid.names ||
        !this.kid.school ||
        !this.kid.subject ||
        this.kid.age === 0 ||
        !this.kid.class
      ) {
        return false;
      }
      return true;
    },
    register_kid() {
      return this.$store.getters.register_kid;
    }
  },
  methods: {
    submit_kid() {
      const data = this.kid;
      data.subject = data.subject.split(",");
      this.REGISTER_KID(data);
    },
    ...mapActions(["FETCH_KIDS", "REGISTER_KID"])
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
</style>
