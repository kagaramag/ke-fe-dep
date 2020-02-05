<template v-if="auth">
  <div
    v-if="fetch_cart && fetch_cart.length"
    class="grab-cart-bar py-3 bg-black text-center text-light"
  >
    You are almost done with hiring
    <router-link :to="`/@${fetch_cart[0].username}`">{{fetch_cart[0].name}}</router-link>. &nbsp;
    <router-link
      class="pl-3 bold"
      :to="`/dashboard/${accountType}/hiring/${fetch_cart[0].username}`"
    >Complete</router-link>&nbsp;the process
    <div class="clear"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",
  mounted() {
    this.FETCH_CART();
    this.loaded = true;
  },
  computed: {
    auth() {
      return JSON.parse(localStorage.getItem("auth")) || null;
    },
    fetch_cart() {
      return this.$store.getters.fetch_cart;
    },
    ...mapGetters(["fetch_cart"])
  },
  methods: {
    ...mapActions(["FETCH_CART"])
  }
};
</script>

<style scoped>
.grab-cart-bar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12000;
}
.btn {
  background: rgba(255, 255, 255, 0.5);
}
</style>