<template>
  <div class="wrap-loading-profile">
    <div class="profile">
      <img class="shadow-lg radius-3" src="@/assets/images/ProfileLoading.svg" alt="loading" />
    </div>
    <div class="profile shadow radius-2">
      <img class="shadow-lg radius-3" src="@/assets/images/ProfileLoading.svg" alt="loading" />
    </div>
  </div>
</template>
<style scoped>
.wrap-loading-profile {
  width: 100%;
}
.profile {
  width: 48%;
  margin: auto 1% 45px 1%;
  height: auto;
  float: left;
  -webkit-animation-name: profile;
  animation-name: profile;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
.profile img {
  width: 100%;
  height: auto;
}
@keyframes profile {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.85;
  }
}
</style>