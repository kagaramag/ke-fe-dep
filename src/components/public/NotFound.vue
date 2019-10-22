<template>
  <div class="notfound bg-light shadow-4 radius-4">
    <div class="row">
      <div class="col-md-7">
        <br />
        <br />
        <h1>Oooops!!!</h1>
        <h2>Error 404</h2>
        <div>The page you are looking for does not exit or it is currently unvailable</div>
        <br />
        <div>
          <router-link :to="`/${$i18n.locale}`" class="btn bg-primary text-light">Go back Home</router-link>
        </div>
      </div>
      <div class="col-md-5">
        <div class="image">
          <img src="./../../assets/images/404-01.png" />
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
const minima_layout = "minima";
export default {
  name: "notfound",
  computed: {
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.notfound {
  /* font-size: 35px; */
  margin-top: 120px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  display: block;
  padding: 40px;
  position: relative;
  max-width: 800px;
  z-index: 5;
  font-weight: bold;
}
.notfound h1 {
  font-size: 4em;
  font-weight: 600;
}
/* .notfound::before {
  margin-bottom: 35px !important;
  border: 6px solid #5d3434;
  padding: 40px 0;
  transform: rotate(-5deg);
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  min-height: 220px;
  background: #b1a183;
  z-index: -1;
}
.notfound::after {
  margin-bottom: 35px !important;
  border: 6px solid #9b9b9b;
  padding: 40px 0;
  transform: rotate(4deg);
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  min-height: 220px;
  background: #141414;
  z-index: -1;
} */
</style>
