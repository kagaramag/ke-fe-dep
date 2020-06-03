<template>
  <div>
    <Header />
    <div class="wrap-app">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.wrap-app {
  margin-top: 60px;
}
</style>
