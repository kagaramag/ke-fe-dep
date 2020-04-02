<template>
  <div id="about" class="bg-light">
    <!-- Welcome -->
    <section class="clearfix">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img
              src="https://res.cloudinary.com/ninjas/image/upload/v1585781849/keetela/about-bg_zm0rvj.svg"
              class="card-img-top center"
              alt="about us"
            />
          </div>
          <div class="col-sm-12 col-md-6 text-primary">
            <div class="py-4">
              <h1 class="font-weight-light my-4">
                <span class="bold">Striving</span>
                <br />
                to empower the
                <br />
                <span class="bold">community</span>
              </h1>
              <div class="description py-3">
                <b>Keetela</b> accelerates the acquisition of knowledge and
                skills necessary to achieve career advancement <br />and
                personal growth.
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
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
</style>
