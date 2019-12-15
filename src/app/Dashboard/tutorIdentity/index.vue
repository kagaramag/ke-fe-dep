<template>
  <component :is="layout">
    <div>
      <Loading v-if="profile.loading" />
      <div v-if="!profile.loading">
        <form @submit.prevent>
          <h2>{{$t('identity.title')}}</h2>
          <div class="nobold">{{$t('identity.message')}}</div>
          <div class="row" v-if="profile && profile.errors">
            <div
              class="alert alert-danger"
              v-for="error in profile.errors"
              :key="error.index"
            >{{error}}</div>
          </div>
          <div class="row" v-if="profile && profile.message">
            <div class="alert alert-success">
              {{profile.message}}.
              <br />
              <router-link :to="`/${$i18n.locale}/login`">{{$t('register.here')}}</router-link>
              {{' '}} {{$t('register.loginn')}}
            </div>
          </div>
          <!-- 
          <h5>Languages I speak</h5>
          <div class="row m-3">
            <div class="col-4">
              <input
                type="checkbox"
                value="Kinyarwanda"
                v-model="user.language"
                class="form-check-input"
                id="kinyarwanda"
              />
              <label class="kinyarwanda" for="kinyarwanda">Ikinyarwanda</label>
            </div>
            <div class="col-4">
              <input
                type="checkbox"
                value="English"
                v-model="user.language"
                class="form-check-input"
                id="english"
              />
              <label class="english" for="english">English</label>
            </div>
            <div class="col-4">
              <input
                type="checkbox"
                value="Francais"
                v-model="user.language"
                class="form-check-input"
                id="francais"
              />
              <label class="francais" for="francais">Francais</label>
            </div>
            <div class="col-4">
              <input
                type="checkbox"
                value="Swahili"
                v-model="user.language"
                class="form-check-input"
                id="Swahili"
              />
              <label class="Swahili" for="Swahili">Swahili</label>
            </div>
            <div class="col-4">
              <input
                type="checkbox"
                value="Spanish"
                v-model="user.language"
                class="form-check-input"
                id="Spanish"
              />
              <label class="Spanish" for="Spanish">Spanish</label>
            </div>
            <div class="col-4">
              <input
                type="checkbox"
                value="Luganda"
                v-model="user.language"
                class="form-check-input"
                id="Luganda"
              />
              <label class="Luganda" for="Luganda">Luganda</label>
            </div>
          </div>
          <div class="form-group">
            <input
              :placeholder="`${$t('identity.experience')}`"
              type="text"
              class="form-control"
              v-model="user.experience"
              id="experience"
              autocomplete="off"
            />
          </div>-->
          <div class="m-3">
            <div class="row my-3 bg-white shadow-lg radius-3rounded">
              <div class="col-3">
                <div class="image image-identity">
                  <img src="@/assets/images/report.svg" alt />
                </div>
              </div>
              <div class="col-9">
                <h4 class="my-3">{{$t('identity.bulletin5')}}</h4>
                <div class="my-1">Provide senior 5 report</div>
                <div class="form-group" style="max-width:350px">
                  <label class="error" v-if="error.bulletin5">{{error.bulletin5}}</label>
                  <b-form-file single :placeholder="'Select'" :file-name-formatter="getFiveReport"></b-form-file>
                </div>
              </div>
            </div>
            <div class="row my-3 bg-white shadow-lg radius-3rounded">
              <div class="col-3">
                <div class="image image-identity">
                  <img src="@/assets/images/report.svg" alt />
                </div>
              </div>
              <div class="col-9">
                <h4 class="my-3">{{$t('identity.bulletin6')}}</h4>
                <div class="my-1">Provide senior 6 report</div>
                <div class="form-group" style="max-width:350px">
                  <label class="error" v-if="error.bulletin6">{{error.bulletin6}}</label>
                  <b-form-file single :placeholder="'select'" :file-name-formatter="getSixReport"></b-form-file>
                </div>
              </div>
            </div>
            <div class="row my-3 bg-white shadow-lg radius-3rounded">
              <div class="col-3">
                <div class="image image-identity">
                  <img src="@/assets/images/id.svg" alt />
                </div>
              </div>
              <div class="col-9">
                <h4 class="my-3">{{$t('identity.id')}}</h4>
                <div class="my-1">Provide a photocopy of National ID or Passport</div>
                <div class="form-group" style="max-width:350px">
                  <label class="error" v-if="error.bulletinid">{{error.id}}</label>
                  <b-form-file single :placeholder="'Select'" :file-name-formatter="getID"></b-form-file>
                </div>
              </div>
            </div>
            <div class="row my-3 bg-white shadow-lg radius-3rounded">
              <div class="col-3">
                <div class="image image-identity">
                  <img src="@/assets/images/cv.svg" alt />
                </div>
              </div>
              <div class="col-9">
                <h4 class="my-3">{{$t('identity.cv')}}</h4>
                <div class="my-1">Provide senior 5 report</div>
                <div class="form-group" style="max-width:350px">
                  <label class="error" v-if="error.cv">{{error.cv}}</label>
                  <b-form-file single :placeholder="user.cv" :file-name-formatter="getCV"></b-form-file>
                </div>
              </div>
            </div>
            <div class="row my-3 bg-white shadow-lg radius-3rounded">
              <div class="col-3">
                <div class="image image-identity">
                  <img src="@/assets/images/diploma.svg" alt />
                </div>
              </div>
              <div class="col-9">
                <h4 class="my-3">{{$t('identity.diploma')}}</h4>
                <div class="my-1">Provide senior 5 report</div>
                <div class="form-group" style="max-width:350px">
                  <label class="error" v-if="error.diploma">{{error.diploma}}</label>
                  <b-form-file single :placeholder="'Select'" :file-name-formatter="getDIP"></b-form-file>
                </div>
              </div>
            </div>
            <div class="row my-3">
              <button
                type="submit"
                @click.prevent
                @click="upload"
                class="btn btn-success rounded px-4"
              >
                <icon class="icon" icon="save" />
                &nbsp;
                {{$t('identity.button')}}
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
    </div>
  </component>
</template>

<script>
import Loading from "@/components/commons/Loading";
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

const account_layout = "account";
const possibleFiles = [
  "image/png",
  "image/jpeg",
  "image/jpeg",
  "application/pdf"
];
export default {
  components: {
    Loading
  },
  name: "identity",
  data() {
    return {
      images: {},
      error: {
        bulletin5: "",
        bulletin6: "",
        id: "",
        cv: "",
        diploma: ""
      },
      user: {
        language: [],
        experience: "",
        bulletin5: this.$t("identity.bulletin5"),
        bulletin6: this.$t("identity.bulletin6"),
        id: this.$t("identity.id"),
        cv: this.$t("identity.cv"),
        diploma: this.$t("identity.diploma")
      }
    };
  },

  created() {
    this.$store.dispatch("FETCH_DOCUMENTS");
  },

  computed: {
    ...mapGetters(["fetch_documents"]),
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile;
    },
    documents() {}
  },
  methods: {
    validateUploads(file, document) {
      if (possibleFiles.includes(file.type)) {
        this.error[document] = "";
      } else {
        this.error[document] = "file format not supported";
      }
    },

    getFiveReport(file) {
      if (file) {
        this.images[0] = file;
        this.user.bulletin = file.name;
        this.validateUploads(file[0], "bulletin5");
        return file[0].name;
      }
    },
    getSixReport(file) {
      if (file) {
        this.images[1] = file;
        this.user.bulletin = file.name;
        this.validateUploads(file[0], "bulletin6");
        return file[0].name;
      }
    },
    getID(file) {
      if (file) {
        this.images[2] = file;
        this.user.id = file.name;
        this.validateUploads(file[0], "id");
        return file[0].name;
      }
    },
    getDIP(file) {
      if (file) {
        this.images[3] = file;
        this.user.diploma = file.name;
        this.validateUploads(file[0], "diploma");
        return file[0].name;
      }
    },

    getCV(file) {
      if (file) {
        this.images[4] = file;
        this.user.cv = file.name;
        this.validateUploads(file[0], "cv");
        return file[0].name;
      }
    },

    async upload() {
      let data = [];
      const formData = new FormData();
      for (let i in this.images) {
        data = [...this.images[i], ...data];
      }
      for (let j in data) {
        formData.append("doc", data[j]);
      }
      return this.$store.dispatch("UPLOAD_DOCUMENTS", formData);
    }
  }
};
</script>

<style scoped>
.image-identity img {
  max-width: 80px !important;
  margin: 25px auto;
  display: block;
}
.error {
  color: brown;
}
.register h1 {
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
}
.register h2 {
  text-align: center;
  font-size: 14px;
  font-weight: 300;
}
.register {
  margin-bottom: 50px;
}
.alert {
  width: 100%;
}
</style>
