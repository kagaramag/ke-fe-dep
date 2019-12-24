<template>
  <div>
    <component :is="layout">
      <Welcome />
      <About />
    </component>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Welcome from './Welcome';
import About from './About';
const default_layout = "default";
export default {
  name: "home",
  components: {
    Welcome,
    About
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>
