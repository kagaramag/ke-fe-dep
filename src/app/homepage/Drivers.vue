<template>
  <section id="drivers" class="bg-light">
    <!-- what drives us? -->
    <section class="clearfix">
      <div class="container">
        <h1 class="text-center text-primary font-weight-light my-4">
          <span class="bold">Trust</span> the
          <br />
          <span>Process with</span>
          <span class="bold"> Keetela</span>
        </h1>
        <div class="row align-self-center text-center">
          <div class="col-sm-12 col-md-4 mb-4 one-step">
            <div class="card pt-4">
              <img
                src="https://res.cloudinary.com/ninjas/image/upload/v1585781859/keetela/grow_b72a1l.svg"
                class="card-img-top center"
                alt="grow"
              />
              <div class="card-body">
                <h2 class="card-title">Grow</h2>
                <p class="card-text">
                  Experience a fun &amp; modern way of learning with us
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 mb-4 one-step">
            <div class="card pt-4">
              <img
                src="https://res.cloudinary.com/ninjas/image/upload/v1585781821/keetela/connect_jitmhe.svg"
                class="card-img-top center"
                alt="connect"
              />
              <div class="card-body">
                <h2 class="card-title">Connect</h2>
                <p class="card-text">
                We are driven by the cohesion of great excellent people.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 mb-4 one-step">
            <div class="card pt-4">
              <img
                src="https://res.cloudinary.com/ninjas/image/upload/v1585781854/keetela/spark_dp4v2g.svg"
                class="card-img-top center"
                alt="spart"
              />
              <div class="card-body">
                <h2 class="card-title">Spark</h2>
                <p class="card-text">
                  Share &amp; Celebrate the joy of<br>discovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "HomeAbout"
};
</script>

<style scoped>
#drivers {
  width: 100%;
  padding: 10vh 0;
}
.one-step img {
  max-width: 90px;
  display: block;
  margin: 0 auto;
}
.one-step h2 {
  font-size: 3em;
}
.card {
  background: none;
  border: none;
}
</style>
