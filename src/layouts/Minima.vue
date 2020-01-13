<!-- 
####### MINIMA LAYOUT #######
"Layout for pages without header/sidebar" 
##############################
-->

<script>
export default {
  name: "layout-mimina"
};
</script>
<template>
  <div>
    <div class="container layout">
      <div class="background">
        <!-- <img src="@/assets/images/kids.png" /> -->
      </div>
      <div class="row">
        <div class="col">
          <div class="wrap-box bg-white shadow-lg pt-3 pb-1 radius-4">
            <div class="image minima-logo my-3">
              <router-link :to="'/'">
                <img src="@/assets/images/logo_XII_blue.svg" />
              </router-link>
            </div>
            <div class="clear"></div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.minima-logo {
  max-width: 200px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background img {
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 750px;
  height: auto;
}

.layout {
  margin-top: 0px;
  max-width: 900px !important;
}

.wrap-box {
  max-width: 500px;
  margin: 70px auto 30px auto;
}
</style>
