<template>
  <div class="notfound m-3">
    <div class="row">
      <div class="col-md-5">
        <div class="image">
          <img src="./../../assets/images/404-01.png" />
        </div>
      </div>
      <div class="col-md-7">
        <br />
        <br />

        <h1>{{$t('notfound.title')}}</h1>
        <h2>{{$t('notfound.error')}}</h2>
        <div class="nobold">{{$t('notfound.message')}}</div>
        <br />
        <div>
          <router-link
            :to="`/${$i18n.locale}`"
            class="btn bg-primary text-light rounded px-4"
          >{{$t('notfound.forward')}}</router-link>
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

</style>
