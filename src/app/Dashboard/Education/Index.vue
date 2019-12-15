<template>
  <div>
    <component :is="layout">
      <div v-if="!loaded" class="grab-page-loading"></div>
      <div v-if="loaded">
        <div class="py-2">
          My Education
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
  name: "DashboardEducation",
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
  }
};
</script>

<style scoped>
</style>
