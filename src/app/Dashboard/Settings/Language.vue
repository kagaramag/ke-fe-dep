<template>
  <div id="Parent">
    <h4 class="my-2">{{$t('settings.language.title')}}</h4>
    <div class="my-2">{{$t('settings.language.description')}}</div>
    <button class="btn border border-dark rounded px-4 mr-2" @click="setLanguage('en')">
      <img
        src="@/assets/images/flag_uk.png"
        alt="English"
      />
      English
    </button>
    <button class="btn border border-dark rounded px-4 mr-2" @click="setLanguage('kin')">
      <img
        src="@/assets/images/flag_rw.png"
        alt="Kinyarwanda"
      />
      Kinyarwanda
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
const account_layout = "account";
export default {
  name: "Tutor",
  props: ["profile"],
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setLanguage(locale) {
      // save language as fr_MX in localstorage to match backend setup
      if (locale == "kin") {
        localStorage.setItem("lang", "fr_MX");
        document.title = "Keetela - Igniting minds for success";
      } else {
        localStorage.setItem("lang", "en");
        document.title = "Keetela - Igniting mind for success";
      }

      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  }
};
</script>