<!-- 
####### MINIMA LAYOUT #######
"Layout for pages without header/sidebar" 
##############################
-->
<script>
import HeaderComponent from "./../components/commons/Header";
export default {
  name: "layout-mimina",
  components: {
    HeaderComponent
  }
};
</script>
<template>
  <div class="container layout">
    <div class="background">
      <img src="@/assets/images/kids.png" />
    </div>
    <div class="row">
      <div class="col col-lg-7 col-md-7 col-sm-12">
        <div class="wrap-box">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
}
.background img {
  position: fixed;
  bottom: 0;
  right:0;
  max-width:750px;
  height: auto;
}
.layout {
  margin-top: 0px;
  max-width: 900px !important;
}
.wrap-box {
  margin-top: 50px;
}
</style>