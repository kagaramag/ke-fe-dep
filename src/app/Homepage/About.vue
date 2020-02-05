<template>
  <div id="about" class="bg-light">
    <!-- Welcome -->
    <section class="clearfix">
      <div class="container">
        <h1 class="text-center font-weight-light my-4">
          Striving to empower the
          <br />
          <span class="p-2 text-white bold">community</span>
        </h1>
        <div class="text-center description">
          <b>Keetela</b> accelerates the acquisition of knowledge and skills necessary to achieve career advancement
          <br />and personal growth.
        </div>
        <div class="clear"></div>
        <!-- <div class="py-3 text-center">
          <router-link class="btn btn-large btn-light px-4 rounded" :to="'/about'">About us</router-link>
        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeAbout"
};
</script>

<style scoped>
#about {
  width: 100%;
  padding: 10vh 0;
}
#about .description {
  font-size: 18px;
}
#about h1 span {
  position: relative;
}

#about h1 {
  position: relative;
  z-index: 3;
}

#about h1 span::before {
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  margin: 5px 0;
  left: 0;
  background: #403ea8;
  z-index: -1;
  content: "";
  transform: rotate(-2deg);
}
</style>
