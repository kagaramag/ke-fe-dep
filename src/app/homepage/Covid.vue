<template>
  <div class="bg-message">
    <div class="container text-center">
      <h3>Due to Covid-19 pendemic, our services are offered online</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "covid-message"
};
</script>

<style scoped>
.bg-message {
  background: #324994;
  color: #ffffff;
  padding: 30px 0;
}
.container {
  position: relative;
}
.container::before {
  background: url("./../../assets/images/hospital-lv.svg");
  left: 0;
}
.container::after {
  background: url("./../../assets/images/hospital.svg");
  right: 0;
}
.container::before,
.container::after {
  position: absolute;
  content: "";
  top: -30px;
  width: 110px;
  height: 110px;
  background-size: 110px 110px;
}
@media (max-width: 960px) {
  .container::before,
  .container::after {
    display: none;
  }
}
</style>