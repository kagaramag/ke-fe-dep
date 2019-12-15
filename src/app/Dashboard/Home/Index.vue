<template>
  <div>
    <component :is="layout">
      <div v-if="!loaded" class="grab-page-loading"></div>
      <div v-if="loaded">
        <div class="py-2">
          <img
            src="@/assets/images/welcome-kids.svg"
            alt="Welcome"
            style="max-width:300px;display:block;margin:0 auto"
            class="img-fluid"
          />
        </div>
        <h1 class="text-success text-center py-3">{{$t('dashboard.title')}}</h1>
        <Tutor v-if="type === 't'" />
        <Parent v-if="type === 'p'" />
      </div>
    </component>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Tutor from "./Tutor";
import Parent from "./Parent";
const account_layout = "account";
export default {
  name: "DashboardHome",
  components: {
    Tutor,
    Parent
  },
  props: ["data"],
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || account_layout) + "-layout";
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
