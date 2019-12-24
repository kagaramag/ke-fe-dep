<template>
  <div id="about" class="bg-primary">
    <!-- Welcome -->
    <section class="clearfix">
      <div class="container text-white">
        <h1 class="text-center">Let's empower our community</h1>
        <div class="text-center description">
          <b>Keetela</b> accelerates the acquisition of knowledge and skills necessary to achieve career advancement<br/> and personal growth.
        </div>
        <div class="clear"></div>
        <div class="py-3 text-center">
          <router-link class="btn btn-large btn-light px-4 rounded" :to="'/about'">About us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeAbout"
}
</script>

<style scoped>
#about{
  width: 100%;
  padding: 10vh 0;
}
#about .description{
  font-size: 18px
}
</style>
